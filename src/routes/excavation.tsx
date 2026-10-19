import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, meta } from "@/components/site/PageHero";
import { Pricing, Process, FinalCta } from "@/components/site/sections";
import { Button } from "@/components/ui/button";
import img from "@/assets/excavation.jpg";

export const Route = createFileRoute("/excavation")({
  head: () => ({ meta: meta("Excavation & Site Preparation — Northwest Services ATX", "Trenching, cut and fill, rockscaping, and topsoil clearing across North Austin and the Hill Country.") }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Excavation" title="Excavation & Site Preparation" text="Practical excavation and site preparation services for projects that require careful planning, equipment, and skilled work." image={img} alt="Excavator trenching on a rocky lot" />
      <section className="py-20">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={img} alt="Compact excavator digging a trench" width={1200} height={912} loading="lazy" className="reveal aspect-[4/3] w-full rounded-sm object-cover" />
          <div className="reveal">
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary">Outdoor Work, Done Carefully</h2>
            <ul className="mt-6 space-y-3">
              {["Trenching", "Cut and fill", "Rockscaping", "Topsoil clearing"].map((i) => (
                <li key={i} className="flex gap-3 text-lg"><Check className="mt-1 size-5 text-accent" aria-hidden />{i}</li>
              ))}
            </ul>
            <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/contact">Discuss Your Project</Link></Button>
          </div>
        </div>
      </section>
      <Pricing />
      <Process />
      <FinalCta />
    </>
  );
}
