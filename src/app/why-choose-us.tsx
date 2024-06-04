"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ReceiptRefundIcon,
  BuildingLibraryIcon,
  ChevronDoubleDownIcon,
  TruckIcon,
  PencilIcon,
  BanknotesIcon,
  PhoneIcon,
  TagIcon
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";
import BackgroundImageCard from "@/components/background-image-card";


interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Why choose us?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Discover the unique advantages, benefits, and standout features.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">


          <BackgroundImageCard title="" imageUrl="/image/mechanic.png">
          {/* Learn from industry professionals with years of hands-on experience
            in React development. */}
        </BackgroundImageCard>

          <div className="space-y-8">
            <div className="my-4">
              <Option icon={ReceiptRefundIcon} title="0 Debt on Comprehensive Policy">
              Customers can enjoy the benefits of having zero debt when opting for a comprehensive insurance policy.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={BuildingLibraryIcon} title="Insurance Renewals">
              They assist clients with the renewal process for their insurance policies, ensuring continuous coverage without interruption.
              </Option>
            </div>
            <Option icon={ChevronDoubleDownIcon} title="Lowest Premium">
            Secureway Solutions aims to provide clients with insurance policies at the lowest possible premiums, helping them save on costs.
            </Option>
            <Option icon={TruckIcon} title="Free Towing">
            Secureway Solutions offers complimentary towing services in certain situations, ensuring that clients receive assistance in the event of vehicle breakdowns or accidents.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={PencilIcon} title="Professional Insurance Advice">
              Their team offers professional advice to help clients choose the most suitable insurance options based on their needs and circumstances.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={BanknotesIcon} title="Cashless Claim at Any Shop in India">
              Customers can benefit from the convenience of making cashless insurance claims at any authorized repair shop across India.
              </Option>
            </div>
            <Option icon={PhoneIcon} title="24x7 Claim Helpline Service">
            They provide round-the-clock assistance through their claim helpline service, ensuring that clients can get support whenever they need it.
            </Option>
            <Option icon={TagIcon} title="Loaner Car in Selected Cities">
            In specific cities, they provide loaner cars to clients while their vehicles are being repaired, ensuring that they can continue with their daily activities without disruption.
            </Option>
          </div>
          <BackgroundImageCard title="" imageUrl="/image/advisor.png">
          {/* Learn from industry professionals with years of hands-on experience
            in React development. */}
        </BackgroundImageCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
