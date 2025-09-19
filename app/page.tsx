"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
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
  const welcomeRef = useRef<HTMLDivElement>(null);
  return (
    <PublicRoute>
      <div>
        <Welcome ref={welcomeRef} />
        <Header welcomeRef={welcomeRef} />
        <Hero />
        <Features />
        <HowItWorks />
        <LawyerShowcase />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </PublicRoute>
  );
}
