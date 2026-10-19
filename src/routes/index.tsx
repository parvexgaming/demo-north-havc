import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight, Building2, Check, Clock, FileBadge, Fan, Mail, MapPin, Phone, Shovel, Wind,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/config/business";
import hero from "@/assets/hero.jpg";
import excavation from "@/assets/excavation.jpg";
import airQuality from "@/assets/air-quality.jpg";
import truck from "@/assets/truck.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwest Services ATX — HVAC, Indoor Air Quality & Excavation in Austin" },
      { name: "description", content: "HVAC service, indoor air quality solutions, and excavation for homes and businesses across North Austin and the Texas Hill Country." },
      { property: "og:title", content: "Northwest Services ATX — HVAC, Air Quality & Excavation" },
      { property: "og:description", content: "Reliable comfort, cleaner air, and expert excavation across North Austin and the Texas Hill Country." },
    ],
  }),
  component: Index,
});

const CallBtn = ({ variant = "brand" as const }: { variant?: "brand" | "navy" }) => (
  <Button asChild variant={variant} size="lg">
    <a href={business.phoneHref}><Phone aria-hidden /> Call {business.phone}</a>
  </Button>
);

function Index() {
  return (
    <div id="top">
      <Hero />
      <InfoBar />
      <Services />
      <Pricing />
      <Products />
      <About />
      <Process />
      <ServiceArea />
      <Vendors />
      <Contact />
      <FinalCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative bg-ink text-ink-foreground">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <div className="container-site flex flex-col justify-center py-16 lg:max-w-none lg:py-24 lg:pl-[max(1.25rem,calc((100vw-76rem)/2+1.25rem))] lg:pr-12">
          <p className="eyebrow">Texas HVAC &amp; Excavation Services</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] md:text-5xl">
            Reliable Comfort. Cleaner Air. Expert Excavation.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-foreground/75">
            Northwest Services ATX, LLC provides HVAC service, indoor air quality solutions, and excavation services for residential and commercial properties across North Austin and the Texas Hill Country.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallBtn />
            <Button asChild variant="outlineLight" size="lg"><Link to="/" hash="contact">Request a Free Estimate</Link></Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-xs text-ink-foreground/60">
            <FileBadge className="size-4" aria-hidden /> {business.license} (demonstration placeholder — not a valid license)
          </p>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[600px]">
          <img src={hero} alt="HVAC technician checking refrigerant pressures on an outdoor condenser beside a limestone Hill Country home" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function InfoBar() {
  const items = [
    { icon: Wind, t: "HVAC & indoor air quality" },
    { icon: Building2, t: "Residential & commercial" },
    { icon: Shovel, t: "Excavation & site preparation" },
    { icon: MapPin, t: "North Austin & Hill Country" },
    { icon: FileBadge, t: "TX-DEMO-0000 (placeholder)" },
  ];
  return (
    <section aria-label="Service overview" className="border-b border-border bg-card">
      <ul className="container-site grid grid-cols-2 gap-x-6 gap-y-4 py-6 text-sm font-semibold md:grid-cols-5">
        {items.map(({ icon: I, t }) => (
          <li key={t} className="flex items-center gap-2.5 text-foreground/80"><I className="size-5 shrink-0 text-accent" aria-hidden />{t}</li>
        ))}
      </ul>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />{i}</li>
      ))}
    </ul>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Our Services" title="One Local Team. Multiple Essential Services." text="From indoor comfort and cleaner air to outdoor site preparation, our team provides practical solutions for residential and commercial properties." />

        <article id="hvac" className="mt-14 grid scroll-mt-28 gap-10 border-t border-border pt-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <img src={hero} alt="Technician servicing a residential air conditioner" width={1600} height={1008} loading="lazy" className="aspect-[16/10] w-full rounded-sm object-cover" />
          <div>
            <p className="font-display text-sm font-bold text-muted-foreground">01</p>
            <h3 className="mt-2 text-2xl font-extrabold">Heating &amp; Air Conditioning</h3>
            <p className="mt-3 text-muted-foreground">Keep your property comfortable throughout the year with heating and cooling diagnostics, maintenance, and related HVAC services.</p>
            <List items={["No-cool and no-heat diagnostics", "Cooling and heating tune-ups", "HVAC system assessments", "Residential and commercial HVAC service"]} />
            <Button asChild variant="outlineDark" size="lg" className="mt-7"><Link to="/" hash="pricing">Explore HVAC Services <ArrowRight /></Link></Button>
          </div>
        </article>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article id="air-quality" className="scroll-mt-28 bg-card p-8 shadow-card">
            <img src={airQuality} alt="Technician installing a pleated 4-inch filter into an air handler" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
            <p className="mt-6 font-display text-sm font-bold text-muted-foreground">02</p>
            <h3 className="mt-2 text-2xl font-extrabold">Indoor Air Quality</h3>
            <p className="mt-3 text-muted-foreground">Explore indoor air quality products and solutions designed to support cleaner indoor environments, ventilation, humidity management, and HVAC system performance.</p>
            <List items={["Whole-home air purification", "Air filtration", "UV air treatment systems", "Dehumidification", "Exhaust ventilation", "Attic insulation & ductwork solutions"]} />
            <Button asChild variant="outlineDark" size="lg" className="mt-7"><Link to="/" hash="products">Explore Air Quality Solutions <ArrowRight /></Link></Button>
          </article>
          <article id="excavation" className="flex scroll-mt-28 flex-col bg-primary p-8 text-primary-foreground">
            <img src={excavation} alt="Compact excavator trenching on a rocky Hill Country lot" width={1200} height={912} loading="lazy" className="aspect-[4/3] w-full rounded-sm object-cover" />
            <p className="mt-6 font-display text-sm font-bold text-primary-foreground/60">03</p>
            <h3 className="mt-2 text-2xl font-extrabold">Excavation &amp; Site Preparation</h3>
            <p className="mt-3 text-primary-foreground/80">Practical excavation and site preparation services for projects that require careful planning, equipment, and skilled work.</p>
            <List items={["Trenching", "Cut and fill", "Rockscaping", "Topsoil clearing"]} />
            <Button asChild variant="brand" size="lg" className="mt-7 self-start"><Link to="/" hash="contact">Discuss Your Project <ArrowRight /></Link></Button>
          </article>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const rows = [
    { name: "No-Cool & No-Heat Diagnostic", price: "$95", cta: "Call for Service", tel: true },
    { name: "After 5 PM & Weekend Diagnostic", price: "$125", note: `After-hours: ${business.afterHours}`, cta: "Call for Service", tel: true },
    { name: "Cooling or Heating Tune-Up", price: "$195", cta: "Request a Tune-Up" },
    { name: "Excavator & Travel Fee", price: "$675", cta: "Discuss an Excavation Project" },
    { name: "Excavator Labor", price: "$325", unit: "per hour", cta: "Discuss an Excavation Project" },
  ];
  return (
    <section id="pricing" className="scroll-mt-28 bg-secondary py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHead eyebrow="Pricing" title="Straightforward Service Pricing" text="Review our published service rates and contact us if you need help choosing the right service." />
          <div className="mt-8 border-l-4 border-accent bg-card p-6 shadow-card">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-accent">HVAC System &amp; Excavation Estimates</p>
            <p className="mt-2 font-display text-4xl font-extrabold text-primary">Free</p>
            <Button asChild variant="navy" size="lg" className="mt-5"><Link to="/" hash="contact">Request an Estimate</Link></Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Please confirm any service conditions with our team when you call.</p>
        </div>
        <ul className="divide-y divide-border border-y border-border bg-card">
          {rows.map((r) => (
            <li key={r.name} className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg font-bold">{r.name}</p>
                {r.note && <p className="mt-1 text-sm text-muted-foreground">{r.note}</p>}
              </div>
              <div className="flex items-center gap-5">
                <p className="font-display text-2xl font-extrabold text-primary">{r.price}{r.unit && <span className="ml-1 text-sm font-semibold text-muted-foreground">{r.unit}</span>}</p>
                {r.tel ? (
                  <a href={business.phoneHref} className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">{r.cta}</a>
                ) : (
                  <Link to="/" hash="contact" className="text-sm font-semibold text-primary underline underline-offset-4 hover:text-accent">{r.cta}</Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Products() {
  const products = [
    { name: "Honeywell 4-Inch Air Filter", d: "Media filtration for HVAC systems.", icon: Wind },
    { name: "RGF REME HALO", d: "Whole-home air purification system.", icon: Fan },
    { name: "Panasonic Exhaust Fan", d: "Exhaust fan with humidity sensor.", icon: Fan },
    { name: "Aprilaire E070", d: "Dehumidifier system.", icon: Wind },
    { name: "ProCat Attic Insulation", d: "Listed as 16–20 inches in supplied content.", icon: Building2 },
    { name: "Supply & Return Plenums", d: "Ductwork components for HVAC systems.", icon: Building2 },
    { name: "RGF Coil & Blower UV Light", d: "Indoor coil and blower motor UV light.", icon: Wind },
    { name: "RGF Package / RTU UV System", d: "UV air purification for package units and RTUs.", icon: Fan },
  ];
  return (
    <section id="products" className="scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHead eyebrow="Products" title="Indoor Air Quality Solutions" text="Explore filtration, purification, ventilation, and humidity-control products for residential and commercial environments." />
          <img src={airQuality} alt="Air handler with a new pleated filter installed" width={1200} height={912} loading="lazy" className="aspect-[21/9] w-full rounded-sm object-cover" />
        </div>
        <ul className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ name, d, icon: I }) => (
            <li key={name} className="flex flex-col border-b border-r border-border bg-card p-6">
              <I className="size-6 text-accent" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-bold">{name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
              <Link to="/" hash="contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">Ask About This Product <ArrowRight className="size-4" /></Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-card py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
        <img src={truck} alt="Fully stocked service truck parked in a North Austin driveway" width={1200} height={1008} loading="lazy" className="aspect-[6/5] w-full rounded-sm object-cover" />
        <div>
          <SectionHead eyebrow="About Us" title="A Local Team Focused on Comfort, Air Quality & Site Work" />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Northwest Services ATX, LLC is a faith-based HVAC contractor serving the greater North Austin and Texas Hill Country areas. The company provides residential and commercial air conditioning, heating, ventilation, indoor air quality, and excavation services.</p>
            <p>With a dedicated team of seasoned professionals and fully stocked trucks, Northwest Services ATX works to provide efficient, cost-conscious solutions tailored to each property's needs.</p>
            <p>The company's priority is indoor air quality and outdoor comfort, with a commitment to helping homes and businesses operate safely and efficiently.</p>
          </div>
          <Button asChild variant="navy" size="lg" className="mt-8"><Link to="/" hash="contact">Get in Touch</Link></Button>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Tell Us What You Need", "Call or submit an estimate request."],
    ["Discuss the Next Steps", "Share the issue or describe your project."],
    ["Arrange the Service", "Coordinate the appropriate technician or excavation service with the company."],
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Process" title="Getting Started Is Simple" />
        <ol className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-primary pt-6">
              <span className="font-display text-4xl font-extrabold text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Service Area</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Proudly Serving North Austin &amp; the Texas Hill Country</h2>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">Northwest Services ATX, LLC serves customers across the greater North Austin and Texas Hill Country areas.</p>
          <div className="mt-8"><CallBtn /></div>
          <p className="mt-3 text-sm text-primary-foreground/60">Call to discuss your location.</p>
        </div>
        <div className="border border-primary-foreground/20 p-8">
          <MapPin className="size-8 text-accent" aria-hidden />
          <p className="mt-4 font-display text-xl font-bold">{business.location}</p>
          <p className="mt-1 text-primary-foreground/70">Postal code: {business.postal}</p>
          <p className="mt-4 text-xs text-primary-foreground/50">Demonstration location — not a physical business address.</p>
        </div>
      </div>
    </section>
  );
}

function Vendors() {
  const vendors = [
    ["Lone Star Paint & Finish", "3101"], ["Hill Country Flooring Studio", "3102"], ["Cedar Ridge Electrical", "3103"],
    ["Bluebonnet Plumbing Co.", "3104"], ["Summit Roofing Group", "3105"], ["Texas Heritage Remodeling", "3106"],
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHead eyebrow="Preferred Vendors" title="Local Businesses We Work Alongside" text="Fictional demonstration entries only — these do not represent real partners or endorsements." />
        <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {vendors.map(([n, x]) => (
            <li key={n} className="bg-background p-6">
              <p className="font-display font-bold">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">Austin, TX</p>
              <a href={`tel:+1555010${x}`} className="mt-3 inline-block text-sm font-semibold text-primary hover:text-accent">(555) 010-{x} <span className="font-normal text-muted-foreground">· demo</span></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

type Errors = Partial<Record<"name" | "phone" | "email" | "service" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "demo">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Please enter your full name.";
    if (!/^[\d\s()+.-]{7,}$/.test(v("phone"))) next.phone = "Please enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "Please enter a valid email address.";
    if (!v("service")) next.service = "Please choose a service type.";
    if (v("message").length < 10) next.message = "Please describe your issue or project (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) setStatus("demo");
  };

  const field = "mt-1.5 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm";
  const Err = ({ k }: { k: keyof Errors }) => errors[k] ? <p id={`${k}-error`} className="mt-1 text-sm text-destructive">{errors[k]}</p> : null;

  return (
    <section id="contact" className="scroll-mt-28 bg-secondary py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHead eyebrow="Contact" title="Let's Talk About Your Project" text="Need HVAC service, an indoor air quality solution, or excavation work? Contact Northwest Services ATX, LLC to discuss your needs and the next steps." />
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex gap-3"><Phone className="size-5 text-accent" aria-hidden /><a href={business.phoneHref} className="font-semibold hover:text-primary">{business.phone}</a></li>
            <li className="flex gap-3"><Mail className="size-5 text-accent" aria-hidden /><a href={`mailto:${business.email}`} className="break-all font-semibold hover:text-primary">{business.email}</a></li>
            <li className="flex gap-3"><MapPin className="size-5 text-accent" aria-hidden /><span>{business.location}<br />Postal code: {business.postal}</span></li>
            <li className="flex gap-3"><Clock className="size-5 text-accent" aria-hidden /><span>Regular hours: {business.hours}<br />After-hours/weekend: {business.afterHours}</span></li>
          </ul>
        </div>
        <form name="estimate-request" method="POST" noValidate onSubmit={onSubmit} className="bg-card p-6 shadow-card md:p-8">
          <p className="mb-6 border-l-4 border-accent bg-secondary px-4 py-3 text-sm text-muted-foreground">Demo form — this preview is not yet accepting live inquiries. Please use test information only.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="text-sm font-semibold">Full name *</label>
              <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              <Err k="name" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-semibold">Phone number *</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
              <Err k="phone" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold">Email address *</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              <Err k="email" />
            </div>
            <div>
              <label htmlFor="service" className="text-sm font-semibold">Service type *</label>
              <select id="service" name="service" defaultValue="" className={field} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-error" : undefined}>
                <option value="" disabled>Select a service</option>
                {["HVAC Repair", "HVAC Tune-Up", "Indoor Air Quality", "Excavation", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
              <Err k="service" />
            </div>
            <fieldset>
              <legend className="text-sm font-semibold">Preferred contact method</legend>
              <div className="mt-2.5 flex gap-5 text-sm">
                {["Phone", "Email"].map((m) => (
                  <label key={m} className="flex items-center gap-2"><input type="radio" name="contactMethod" value={m} defaultChecked={m === "Phone"} className="accent-primary" />{m}</label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold">Describe the issue or project *</label>
              <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
              <Err k="message" />
            </div>
          </div>
          <Button type="submit" variant="navy" size="lg" className="mt-6 w-full sm:w-auto">Request an Estimate</Button>
          <div aria-live="polite">
            {status === "demo" && (
              <p className="mt-5 border border-border bg-secondary p-4 text-sm">
                Thanks — your entry looks complete. This is a demonstration form, so <strong>nothing was sent</strong>. For now, please call {business.phone} (demo number).
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-accent py-16 text-accent-foreground">
      <div className="container-site flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold">Ready to Get Started?</h2>
          <p className="mt-3 text-accent-foreground/85">Whether you need HVAC service, better indoor air quality, or excavation support, our team is ready to discuss your next steps.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <CallBtn variant="navy" />
          <Button asChild variant="outlineLight" size="lg" className="border-accent-foreground/60 text-accent-foreground"><Link to="/" hash="contact">Request an Estimate</Link></Button>
        </div>
      </div>
    </section>
  );
}
