import supabase from "./supabase";

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
  const imageName = `${Math.random()}-${ad.image.name}`.replaceAll("/", "");

  const imagePath = `${BASE_URL}/adimages/${imageName}`;

  const { data, error } = await supabase
    .from("ads")
    .insert([{ ad, image: imagePath }])
    .select();
  if (error) throw new Error("somthing went wrong with uploading new ad");
  console.log(data);
  return { data };
}

const BASE_URL =
  "https://fhpjqtdzftqarmmqcokt.supabase.co/storage/v1/object/sign";
