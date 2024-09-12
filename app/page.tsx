import { Hero } from "@/components/Hero";
import Navbar from "@/components/navbar";
import axios from "axios";

// Function to dynamically generate metadata including Open Graph data
export async function generateMetadata({ searchParams }: { searchParams: { type: string } }) {
  const type = searchParams.type || "industry"; // Default to "industry" if no type is provided

  // Fetch the dashboard data to find the relevant metadata for the current type
  let dashboard = [];
  try {
    const res = await axios.get(
      "https://sparkling-kindness-41d0c1b2d5.strapiapp.com/api/dashboards?populate=*"
    );
    dashboard = res.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }

  // Find the selected data for the given type
  const selectedData = dashboard.find(
    // @ts-expect-error
    (item) => item.attributes.slug === type
  )?.attributes || {};

  // Prepare Open Graph metadata
  const ogTitle = selectedData?.title || "Default Open Graph Title";
  const ogDescription = selectedData?.description || "Default Open Graph Description";
  const ogImage = selectedData?.image?.data?.attributes?.url || "/default-image.jpg"; // Provide a default image if none available
  const ogUrl = `https://yourdomain.com/?type=${type}`; // Dynamic URL based on the type

  return {
    title: selectedData?.title || "Default Title",
    description: selectedData?.description || "Default Description",
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: ogUrl,
      images: [
        {
          url: ogImage,
          alt: selectedData?.title || "Open Graph Image",
        },
      ],
      type: 'website',
    },
  };
}

export default async function Home({ searchParams }: { searchParams: { type: string } }) {
  let dashboard = [];
  try {
    const res = await axios.get(
      "https://sparkling-kindness-41d0c1b2d5.strapiapp.com/api/dashboards?populate=*"
    );
    dashboard = res.data.data;
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }

  return (
    <>
      <Navbar />
      <Hero dashboard={dashboard} initialType={searchParams.type || "industry"} />
    </>
  );
}
