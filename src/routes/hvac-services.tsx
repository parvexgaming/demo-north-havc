import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PageHero";
import { Pricing, Process, FinalCta } from "@/components/site/sections";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/hvac-services")({
  head: () => ({ meta: meta("HVAC Services & Pricing — Northwest Services ATX", "Heating and cooling diagnostics, tune-ups, and HVAC assessments with published service rates.") }),
  component: () => (
    <>
      <PageHero eyebrow="HVAC Services" title="Heating & Air Conditioning" text="Keep your property comfortable throughout the year with heating and cooling diagnostics, maintenance, and related HVAC services." image={hero} alt="Technician servicing an outdoor condenser" />
      <Pricing />
      <Process />
      <FinalCta />
    </>
  ),
});
