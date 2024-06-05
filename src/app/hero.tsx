"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center ">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-2xl text-5xl font-bold"
          placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
        >
          Enjoy perks of 0 Debt on Comprehensive Policy
        </Typography>
        <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Secureway Solutions your trusted partner for hassle-free insurance solutions. Enjoy peace of mind with our expert advice.
        </Typography>
        <div>
          <Button variant="gradient" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            JOIN US
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
