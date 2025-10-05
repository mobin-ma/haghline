"use client";
import dynamic from "next/dynamic";
import LandingNav from "@/components/LandingNav";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Loading from "./loading";
import PublicRoute from "@/components/PublicRoute";

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <Loading />,
});

const Welcome = dynamic(() => import("@/components/Welcome"), {
  ssr: false,
  loading: () => <Loading />,
});

const Features = dynamic(() => import("@/components/Features"), {
  ssr: false,
  loading: () => <Loading />,
});

const LawyerShowcase = dynamic(() => import("@/components/LawyerShowcase"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <PublicRoute>
      <div>
        <LandingNav />
        <Welcome />
        <HowItWorks />
        <Hero />
        <Features />
        <LawyerShowcase />
        <Testimonials />
        <Footer />
      </div>
    </PublicRoute>
  );
}
