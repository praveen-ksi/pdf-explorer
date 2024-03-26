import { ListingType } from "../types";

export async function getPdfListing(): Promise<{ response?: ListingType[]; error?: string }> {
  try {
    const response = await fetch("https://api.npoint.io/dee51ea017d20efdfcc8");
    if (response.status === 200) {
      const result = await response.json();
      const listing = serializer(result);
      return { response: listing };
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (err) {
    return { error: "Failed to fetch data" };
  }
}

function serializer(list: any): ListingType[] {
  return (
    list?.map((obj: any): ListingType => {
      return {
        name: obj?.name || "",
        author: obj?.author || "",
        published: obj?.published || "",
        link: obj?.link || "",
      };
    }) || []
  );
}
