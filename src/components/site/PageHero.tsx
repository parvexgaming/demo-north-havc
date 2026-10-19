import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, text, image, alt }: { eyebrow: string; title: string; text: string; image: string; alt: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <img src={image} alt={alt} width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-30 animate-in fade-in duration-1000" />
      <div className="container-site relative py-20 md:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-ink-foreground/70">
          <Link to="/" className="hover:text-accent">Home</Link><ChevronRight className="size-3" aria-hidden /><span>{eyebrow}</span>
        </nav>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl animate-in fade-in slide-in-from-bottom-4 duration-700">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-1000">{text}</p>
      </div>
    </section>
  );
}

export const meta = (title: string, description: string) => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
];
