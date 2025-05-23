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
  if (savedAdsError) {
    console.error("Error fetching saved ads:", savedAdsError);
    return;
  }

  const adIds = savedAds ? savedAds?.map((ad) => ad.ad_id) : "";

  if (adIds.length === 0) {
    console.log("No saved ads for user.");
    return [];
  }

  const { data, error: adsError } = await supabase
    .from("ads")
    .select("*")
    .in("id", adIds);

  console.log(data);

  if (adsError) {
    console.error("Error fetching ads:", adsError);
    return;
  }

  return { data };
}

export async function ApiNewAd(ad) {
  // create image name
  const imageName = `${Math.random()}-${ad.image.name}`.replaceAll("/", "");

  // create imagePath
  const imagePath = `${BASE_URL}/adimages/${imageName}`;

  // upload userData

  const { error: dataError } = await supabase
    .from("ads")
    .insert([{ ...ad, image: imagePath }]);

  // upload image
  const { error: imageError } = await supabase.storage
    .from("adimages")
    .upload(imageName, ad.image);

  console.log(imageError);

  if (dataError || imageError) throw new Error("somthing went wrong");
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
