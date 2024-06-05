import Image from "next/image";
import Hero from "./hero";
import OnlineCourse from "./online-course";
import WhyChooseUs from "./why-choose-us";
import CarouselFeatures from "./carousel-features";
import Pricing from "./pricing";
import OtherCourses from "./other-courses";
import { Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OnlineCourse />
      <WhyChooseUs />
      {/* <CarouselFeatures /> */}
      {/* <Pricing /> */}
      <OtherCourses />
      <Footer />
    </>
  );
}
