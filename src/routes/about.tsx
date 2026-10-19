import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PageHero";
import { About, ServiceArea, Vendors, FinalCta } from "@/components/site/sections";
import img from "@/assets/truck.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: meta("About Us — Northwest Services ATX", "A faith-based local HVAC, air quality, and excavation contractor serving North Austin and the Texas Hill Country.") }),
  component: () => (
    <>
      <PageHero eyebrow="About Us" title="A Local Texas Contractor" text="Serving the greater North Austin and Texas Hill Country areas with HVAC, indoor air quality, and excavation services." image={img} alt="Stocked service truck" />
      <About />
      <ServiceArea />
      <Vendors />
      <FinalCta />
    </>
  ),
});
