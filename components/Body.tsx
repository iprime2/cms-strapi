import OtherTab from "./OtherTab";
import RedTab from "./RedTab";
import axios from "axios";
import { Button } from "./ui/button";

// This is now a Server Component
export default async function Body({ searchParams }: { searchParams: {section: string} }) {
  // Fetch the dashboard data
  const heroData = await getDashboardData();

  // console.log(heroData);
  console.log(searchParams);

  // Get the current section from the query parameter (default to 'industry')
  const section = searchParams?.section || "industry";
  
  console.log(section);

  let selectedData;
  const change = (t: string) => {
    selectedData = heroData.find((item) => item.attributes.slug === t);
  } 

  // Find the content for the current section

  return (
    <section className="py-12 bg-gray-50 h-full">
      <div className="container mx-auto text-center">
        <h4 className="text-xl text-gray-800 mb-4">WHY CHOOSE US</h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          We Are Different From Others
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo hic!
        </p>

        <div className="flex w-full justify-center items-center gap-12 relative">
          {/* Dynamically render the hero section based on the selected tab */}
          <div className="relative w-[650px] flex items-center justify-center">
            {/* Circular Background with text */}
            <div className="absolute w-80 h-80 bg-rose-700 rounded-full opacity-70 flex flex-col justify-center items-center text-left text-white px-6 z-30 transform -translate-x-[150px]">
              <h3 className="text-xl font-bold mb-4">{selectedData?.attributes?.title}</h3>
              <p className="text-base">{selectedData?.attributes?.description}</p>
            </div>

            {/* Image with the circular crop */}
            <img
              src="https://imgs.search.brave.com/sQ-v6vxEFv1GS-dhpxQKz8sKC5AIAXlVh4bh7BD93B8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NjAwNzM2OC9waG90/by9zaG90LW9mLWEt/bWF0dXJlLWJ1c2lu/ZXNzd29tYW4tdXNp/bmctYS1sYXB0b3At/aW4tYS1tb2Rlcm4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BZUxn/M2toODg4ZjBEeWFr/N01DbjRJeXhWY2Z2/cERYSDgzVHNFOFRk/N1hnPQ"
              alt={selectedData?.attributes?.title}
              className="relative rounded-full w-80 h-80 object-cover z-20 ml-16"
            />
          </div>

          {/* Tabs Section */}
          <div className="w-[350px] flex items-center justify-center flex-col gap-4">
            <Button onClick={() => change('industry')}>
              <RedTab title="Industry Experts" />
            </Button>
            <Button onClick={() => change('industry')}>
              <OtherTab title="Dedicated Team" />
            </Button>
            <a href="?section=outcome">
              <OtherTab title="Outcome Focused" />
            </a>
            <a href="?section=quality">
              <OtherTab title="High Quality Service" />
            </a>
            <a href="?section=cyber">
              <OtherTab title="Cyber Security Expert" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getDashboardData() {
  try {
    const res = await axios.get("http://localhost:1337/api/dashboards");
    const dashboard = res.data.data;

    return dashboard;
  } catch (error) {
    console.log(error);
  }
}
