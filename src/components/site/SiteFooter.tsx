import { Link } from "@tanstack/react-router";
import { business } from "@/config/business";
import { navItems } from "./SiteHeader";
import logo from "@/assets/northwest-logo.png.asset.json";

export const legalPages = [
  { slug: "privacy-policy", title: "Privacy Policy" },
  { slug: "accessibility", title: "Accessibility Statement" },
  { slug: "terms", title: "Terms & Conditions" },
  { slug: "refund-policy", title: "Refund Policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="inline-block rounded-sm bg-card p-2">
            <img src={logo.url} alt={`${business.name} logo`} width={504} height={188} loading="lazy" className="h-12 w-auto" />
          </div>
          <p className="mt-4 font-display font-bold">{business.name}</p>
          <p className="mt-2 max-w-sm text-sm text-ink-foreground/70">
            HVAC, indoor air quality, and excavation services for residential and commercial properties across North Austin and the Texas Hill Country.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.slice(1).map((n) => (
              <li key={n.to}><Link to={n.to} className="text-ink-foreground/80 hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="text-sm">
          <p className="eyebrow">Contact (demo)</p>
          <ul className="mt-4 space-y-2 text-ink-foreground/80">
            <li><a href={business.phoneHref} className="hover:text-accent">{business.phone}</a></li>
            <li><a href={`mailto:${business.email}`} className="break-all hover:text-accent">{business.email}</a></li>
            <li>Austin, Texas</li>
            <li>Regular hours: {business.hours}</li>
            <li>After-hours/weekend: {business.afterHours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs text-ink-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalPages.map((l) => (
              <li key={l.slug}><Link to="/legal/$slug" params={{ slug: l.slug }} className="hover:text-accent">{l.title}</Link></li>
            ))}
          </ul>
        </div>
        <p className="container-site pb-6 text-xs text-ink-foreground/50">Website preview — business contact details are placeholders.</p>
      </div>
    </footer>
  );
}
