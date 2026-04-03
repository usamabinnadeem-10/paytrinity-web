export function generateBreadcrumbs(
  path: string,
  labels: Record<string, string>,
) {
  const segments = path.split("/").filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://paytrinity.co",
      },
      ...segments.map((segment, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: labels[segment] ?? segment,
        item: `https://paytrinity.co/${segments.slice(0, i + 1).join("/")}`,
      })),
    ],
  };
}
