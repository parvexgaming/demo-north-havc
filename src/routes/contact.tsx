import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PageHero";
import { Contact, ServiceArea } from "@/components/site/sections";
import img from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: meta("Contact & Free Estimates — Northwest Services ATX", "Call or request a free HVAC or excavation estimate from Northwest Services ATX.") }),
  component: () => (
    <>
      <PageHero eyebrow="Contact" title="Request a Free Estimate" text="Tell us about your HVAC, air quality, or excavation needs and we'll discuss the next steps." image={img} alt="HVAC technician at work" />
      <Contact />
      <ServiceArea />
    </>
  ),
});
