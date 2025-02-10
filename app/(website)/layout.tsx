import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "ROKEFELA | I AM THE BEATS. Industry Quality Rap Beats | Dark, Hard, Detroit & Female Rap Type Beats. Trap & Hip-Hop Instrumentals",
      template: "%s | Stablo"
    },
    description:
      settings?.description ||
      "ROKEFELA | I AM THE BEATS. Industry Quality Rap Beats | Dark, Hard, Detroit & Female Rap Type Beats. Trap & Hip-Hop Instrumentals",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Rokefela" }],
    canonical: settings?.url,
    openGraph: {
      title: 'Rokefela',
      description: 'ROKEFELA | I AM THE BEATS. Industry Quality Rap Beats | Dark, Hard, Detroit & Female Rap Type Beats. Trap & Hip-Hop Instrumentals',
      url: 'https://www.rokefela.com',
      siteName: 'Rokefela',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "ROKEFELA | I AM THE BEATS. Industry Quality Rap Beats | Dark, Hard, Detroit & Female Rap Type Beats. Trap & Hip-Hop Instrumentals",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {

  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
