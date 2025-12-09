import { Helmet } from "react-helmet-async";

function SEO({ title, description, keywords, url }) {
  return (
    <Helmet>
      <title>{title || "وصل - منصة ربط مقدمي الخدمات بالعملاء"}</title>
      <meta
        name="description"
        content={
          description ||
          "منصة وصل تربط مقدمي الخدمات المستقلين والمحليين بالعملاء"
        }
      />
      <meta name="keywords" content={keywords || "وصل, خدمات, مستقلين"} />
      <link rel="canonical" href={url || " https://waselp.com"} />
    </Helmet>
  );
}

export default SEO;
