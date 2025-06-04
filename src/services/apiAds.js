import { ApiAddMessage } from "./apiMessage";
import supabase from "./supabase";

const BASE_URL =
  "https://fhpjqtdzftqarmmqcokt.supabase.co/storage/v1/object/public/";

export async function ApiGetUsersAds(user_id) {
  let { data: ads, error } = await supabase
    .from("ads")
    .select("*")
    .eq("user_id", user_id);
  if (error) throw new Error(error.message);

  return ads;
}

export async function ApiGetAds() {
  let { data, error } = await supabase
    .from("ads")
    .select("*")
    .eq("isConfirmed", true);
  if (error) throw new Error(error.message);

  return data;
}

export async function ApiGetSavedAds(user_id) {
  const { data: savedAds, error: savedAdsError } = await supabase
    .from("savedAds")
    .select("ad_id")
    .eq("user_id", user_id);

  const adIds = savedAds ? savedAds?.map((ad) => ad.ad_id) : "";

  const { data, error: adsError } = await supabase
    .from("ads")
    .select("*")
    .in("id", adIds);

  if (savedAdsError || adsError) throw new Error("Something went wrong");

  return { data };
}

export async function ApiUpdateAd(ad) {
  const { id, ...data } = ad;
  let imageName;
  let imagePath;

  if (
    typeof data.image !== "string" &&
    data.image !== undefined &&
    data.image !== null
  ) {
    imageName = `${Math.random()}-${data?.image?.name}`.replaceAll("/", "");
    imagePath = `${BASE_URL}/adimages/${imageName}`;
  }

  if (!id) {
    const { error: dataError } = await supabase
      .from("ads")
      .insert([{ ...data, image: imagePath ? imagePath : null }]);
    if (dataError) throw new Error(dataError.message);
  } else {
    const { error: dataError } = await supabase
      .from("ads")
      .update({ ...data, image: imagePath ? imagePath : null })
      .eq("id", id);
    if (dataError) throw new Error(dataError.message);
  }
  if (imagePath) {
    const { error: imageError } = await supabase.storage
      .from("adimages")
      .upload(imageName, ad.image);
    if (imageError) throw new Error(imageError.message);
  }

  if (id) {
    ApiAddMessage({
      user_id: data.user_id,
      message: `${data.title} ad updated successfully, Plaease wait for confirmation`,
    });
  } else {
    ApiAddMessage({
      user_id: data.user_id,
      message: `${data.title} ad created successfully, Plaease wait for confirmation`,
    });
  }
}

export async function ApiGetAd(id) {
  const { data, error } = await supabase
    .from("ads")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function ApiDeleteAd(id) {
  const { data, error } = await supabase
    .from("ads")
    .delete()
    .eq("id", id)
    .select();
  const { error: error2 } = await supabase
    .from("savedAds")
    .delete()
    .eq("ad_id", id);

  ApiAddMessage({
    user_id: data[0].user_id,
    message: `${data[0].title} ad deleted successfully.`,
  });

  if (error || error2) throw new Error(error.message);
}

export async function ApiToggleSavedAd({ user_id, ad_id, isSaved }) {
  if (isSaved) {
    // If the ad is already saved, delete it
    const { error: deleteError } = await supabase
      .from("savedAds")
      .delete()
      .eq("user_id", user_id)
      .eq("ad_id", ad_id);
    if (deleteError) throw new Error(deleteError.message);
  } else {
    // If the ad is not saved, insert it
    const { error: insertError } = await supabase
      .from("savedAds")
      .insert([{ user_id, ad_id }]);
    if (insertError) throw new Error(insertError.message);
  }
}

export async function ApiNotConfirmedAds() {
  const { data, error } = await supabase
    .from("ads")
    .select("*")
    .eq("isConfirmed", false);

  if (error) throw new Error(error.message);

  return data;
}

export async function ApiConfirmRejectAd({
  ad_title,
  ad_id,
  user_id,
  admin_id,
  isConfirmed,
}) {
  const { error: confirmAdError } = await supabase
    .from("confirmRecord")
    .insert({ ad_id, admin_id, isConfirmed });
  if (confirmAdError) throw new Error(confirmAdError.message);

  if (isConfirmed) {
    const { error: confirmAdError } = await supabase
      .from("ads")
      .update({ isConfirmed: true })
      .eq("id", ad_id);
    ApiAddMessage({
      user_id: user_id,
      message: `${ad_title} ad confirmed successfully.`,
    });
    if (confirmAdError) throw new Error(confirmAdError.message);
  } else {
    const { error: rejectAdError } = await supabase
      .from("ads")
      .delete()
      .eq("id", ad_id);
    ApiAddMessage({
      user_id: user_id,
      message: `unfortunately your ${ad_title} ad is rejected. `,
    });
    if (rejectAdError) throw new Error(rejectAdError.message);
  }
}
