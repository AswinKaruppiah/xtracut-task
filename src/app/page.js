import AboutUs from "@/components/AboutUs/AboutUs";
import ApplyNowBanner from "@/components/ApplyNowBanner/ApplyNowBanner";
import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Header";
import { Hero } from "@/components/Hero/Hero";
import OurFacility from "@/components/OurFacility/OurFacility";
import ShapeFuture from "@/components/ShapeFuture/ShapeFuture";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import WhyJoin from "@/components/WhyJoin/WhyJoin";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="space-y-24">
        <Hero />
        <WhyJoin />
        <ShapeFuture />
        <WhyChoose />
        <AboutUs />
        <ContactUs />
        <FAQ />
        <OurFacility />
        <ApplyNowBanner />
        <Footer />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
