"use client";
import dynamic from "next/dynamic";
import LandingNav from "@/components/LandingNav";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
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
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HowItWorks />
          <Hero />
          <Features />
          <LawyerShowcase />
          <div className="col-span-1 md:col-span-2">
            <Testimonials />
          </div>
        </main>
        <Footer />
      </div>
    </PublicRoute>
  );
}
