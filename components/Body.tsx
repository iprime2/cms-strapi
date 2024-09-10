import OtherTab from "./OtherTab";
import RedTab from "./RedTab";

export default function Body() {
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
          {/* Image and Circle Background */}
          <div className="relative w-[650px] flex items-center justify-center">
            {/* Circular Background with text */}
            <div className="absolute w-80 h-80 bg-rose-700 rounded-full opacity-70 flex flex-col justify-center items-center text-left text-white px-6 z-30 transform -translate-x-[150px]">
              <h3 className="text-xl font-bold mb-4">Industry Experts</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.
              </p>
            </div>

            {/* Image with the circular crop */}
            <img
              src="https://imgs.search.brave.com/sQ-v6vxEFv1GS-dhpxQKz8sKC5AIAXlVh4bh7BD93B8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/NjAwNzM2OC9waG90/by9zaG90LW9mLWEt/bWF0dXJlLWJ1c2lu/ZXNzd29tYW4tdXNp/bmctYS1sYXB0b3At/aW4tYS1tb2Rlcm4t/b2ZmaWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1BZUxn/M2toODg4ZjBEeWFr/N01DbjRJeXhWY2Z2/cERYSDgzVHNFOFRk/N1hnPQ"
              alt="Industry Experts"
              className="relative rounded-full w-80 h-80 object-cover z-20 ml-16 transform -translate-x-[-60px]" 
            />
          </div>

          {/* Tabs Section */}
          <div className="w-[350px] flex items-center justify-center flex-col gap-4">
            <RedTab title="Industry Experts" />
            <OtherTab title="Dedicated Team" />
            <OtherTab title="Outcome focused" />
            <OtherTab title="High Quality Service" />
            <OtherTab title="Cyber Security Expert" />
          </div>
        </div>
      </div>
    </section>
  );
}
