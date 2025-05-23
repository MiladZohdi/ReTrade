import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export function useGetAd() {
  const { params } = useParams();
  console.log(params);
  // const { data, error } = useQuery({
  //   queryKey: ["ad", adId],
  //   queryFn: async () => {
  //     const response = await fetch("http://localhost:3000/ad");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const ad = await response.json();
  //     return ad;
  //   },
  // });
  // return { ad };
}
