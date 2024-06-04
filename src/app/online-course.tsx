"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Hands-On Projects",
    description:
      "Apply your knowledge to real-world projects, building a robust portfolio.",
  },
  {
    icon: AcademicCapIcon,
    title: "Career Opportunities",
    description:
      "React developers are in high demand and this course is designed for you!",
  },
  {
    icon: CheckBadgeIcon,
    title: "Flexible Learning",
    description: "Access course materials whenever it suits your schedule.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            About Us
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Secureway Solutions is a leading provider of insurance solutions dedicated to safeguarding your assets and
            providing peace of mind. With a focus on professionalism and personalized service, we offer expert advice,
            competitive premiums, and round-the-clock support to meet all your insurance needs.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {/* {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
