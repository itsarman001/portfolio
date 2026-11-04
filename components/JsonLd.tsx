import { about } from "@/data/about";
import { experiences } from "@/data/experience";

export function JsonLd() {
  const currentExp = experiences[0];
  const sameAs = [
    about.social.github,
    about.social.linkedin,
    about.social.twitter,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: about.name,
    url: "https://mdarman.in",
    jobTitle: about.role,
    ...(currentExp
      ? {
          worksFor: {
            "@type": "Organization",
            name: currentExp.company.name,
            url: currentExp.company.website,
          },
        }
      : {}),
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
