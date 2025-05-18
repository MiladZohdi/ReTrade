// export default function useNewAd() {
//   const { user } = useGetUser();
//   const user_id = user?.user?.id;
//   const { data: savedAds, isPending: loadingUserAds } = useQuery({
//     queryKey: ["savedAds"],
//     queryFn: () => ApiGetSavedAds(user_id),
//   });
//   return { savedAds, loadingUserAds };
// }
