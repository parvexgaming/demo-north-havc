import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { legalPages } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = legalPages.find((p) => p.slug === params.slug);
    if (!page) throw notFound();
    return page;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Policy"} (Draft) — Northwest Services ATX` },
      { name: "description", content: "Draft policy document pending review before publication." },
      { property: "og:title", content: `${loaderData?.title ?? "Policy"} — Northwest Services ATX` },
      { property: "og:description", content: "Draft policy document pending review before publication." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const page = Route.useLoaderData();
  return (
    <section className="container-site max-w-3xl py-20">
      <p className="eyebrow">Draft for review</p>
      <h1 className="mt-3 text-4xl font-extrabold text-primary">{page.title}</h1>
      <div className="mt-8 space-y-4 border-l-4 border-accent bg-card p-6 text-muted-foreground shadow-card">
        <p>
          This is a placeholder draft. The final {page.title.toLowerCase()} for Northwest Services ATX, LLC must be written or
          reviewed by the business owner and appropriate legal counsel before publication.
        </p>
        <p>No company-specific legal terms have been written here.</p>
      </div>
      <Link to="/" className="mt-8 inline-block font-semibold text-primary underline underline-offset-4">Back to home</Link>
    </section>
  );
}
