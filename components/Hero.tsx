"use client"

import React, { useEffect, useState } from "react";
import OtherTab from "./OtherTab";
import axios from 'axios';

export const Hero:React.FC =  () => {
  const [dashboard, setDashboard] = useState([]);
  const [type, setType] = useState("industry");
  const [selectedData, setSelectedData] = useState("");

  useEffect(() => {
    fetchData();
  },[]);
  
  useEffect(() => {
    updateContent();
  },[type]);

    console.log(dashboard);

  const fetchData = async () => {
    try {
        const res = await axios.get("https://sparkling-kindness-41d0c1b2d5.strapiapp.com/api/dashboards?populate=*");
        setDashboard(res.data.data);
        // @ts-expect-error
        const temp = res.data.data.find((item) => item.attributes.slug === type);
        setSelectedData(temp?.attributes);
    } catch (error) {
        console.log(error);
    }
   
  }

  const updateContent = () => {
        // @ts-expect-error
        const temp = dashboard.find((item) => item.attributes.slug === type);
        // @ts-expect-error
    setSelectedData(temp?.attributes);
  }

  const changeType = (type: string) => {
    setType(type);
  }

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
                {/* @ts-expect-error */}  
                <h3 className="text-xl font-bold mb-4">{selectedData?.title}</h3>
                <p className="text-base">
                {/*  @ts-expect-error */}
                  {selectedData?.description}
                </p>
              </div>

              {/* Image with the circular crop */}
              <img
                // @ts-expect-error  
                src={`${selectedData?.image?.data?.attributes?.url}`}
                className="relative rounded-full w-80 h-80 object-cover z-20 ml-16 transform -translate-x-[-60px]"
              />
            </div>

          {/* Tabs Section */}
          <div className="w-[350px] flex items-center justify-center flex-col gap-4">
            <div className="w-full" onClick={() => changeType("industry")}>
              {/* <RedTab title="Industry Experts" /> */}
              <OtherTab title="Industry Experts" type={type} slug="industry"/>
            </div>
            <div className="w-full" onClick={() => changeType("dedicated")}>
              <OtherTab title="Dedicated Team" type={type} slug="dedicated"/>
            </div>
            <div className="w-full" onClick={() => changeType("outcome")}>
              <OtherTab title="Outcome focused" type={type} slug="outcome"/>
            </div>
            <div className="w-full" onClick={() => changeType("quality")}>
              <OtherTab title="High Quality Service" type={type} slug="quality"/>
            </div>
            <div className="w-full" onClick={() => changeType("cyber")}>
              <OtherTab title="Cyber Security Expert" type={type} slug="cyber"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

