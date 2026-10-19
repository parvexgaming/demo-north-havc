import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PageHero";
import { Products, FinalCta } from "@/components/site/sections";
import img from "@/assets/air-quality.jpg";

export const Route = createFileRoute("/indoor-air-quality")({
  head: () => ({ meta: meta("Indoor Air Quality Solutions — Northwest Services ATX", "Filtration, purification, UV, ventilation, and humidity-control products for homes and businesses.") }),
  component: () => (
    <>
      <PageHero eyebrow="Indoor Air Quality" title="Cleaner Air for Homes & Businesses" text="Explore indoor air quality products and solutions designed to support cleaner indoor environments, ventilation, humidity management, and HVAC system performance." image={img} alt="Technician installing an air filter" />
      <Products />
      <FinalCta />
    </>
  ),
});
