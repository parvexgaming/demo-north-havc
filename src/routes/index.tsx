import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site/PageHero";
import { Hero, InfoBar, Services, Process, FinalCta } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta(
      "Northwest Services ATX — HVAC, Indoor Air Quality & Excavation in Austin",
      "HVAC service, indoor air quality solutions, and excavation for homes and businesses across North Austin and the Texas Hill Country.",
    ),
  }),
  component: () => (
    <>
      <Hero />
      <InfoBar />
      <Services />
      <Process />
      <FinalCta />
    </>
  ),
});
