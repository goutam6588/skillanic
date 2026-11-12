import React from "react";
import { StatisticItem } from "./StatisticItem";
import Section from "./common/Section";
import Xection from "./common/layout/Xection";
import Container from "./common/layout/Container";
import { useSanityContent } from "../src/hooks/useSanityContent";

export function Statistics() {
  const statistics = [
    { metric: "500+", label: "Students Placed" },
    { metric: "30LPA", label: "Highest Package" },
    { metric: "100+", label: "Hiring Support" },
    { metric: "100%", label: "Placement Rate" },
  ];
  const { value: content } = useSanityContent("homePage.statistics", statistics, {
    collection: true,
  });

  return (
       <Xection id="Statistics" className="hidden md:block"> 
        {/* <Container size="default" padding="default"> */}
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {content.map((stat, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center py-8 text-center"
            >
              {/* Custom Divider */}
              {index !== content.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2  h-7 w-px bg-red-400" />
              )}

              <StatisticItem
                metric={stat.metric}
                label={stat.label}
                isLast={index === content.length - 1}
              />
            </div>
          ))}
        </div>
        {/* </Container> */}
      </Xection>
  );  
}
