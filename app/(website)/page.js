import Home from "./home";
import {
  getAllHeros,
  getAllPricing,
  getAllFaq,
  getAllTestimonials,
  getAllAbout,
  getSettings
} from "@/lib/sanity/client";

import "@/node_modules/animate.css/animate.min.css";

export default async function IndexPage() {
  const hero = await getAllHeros();
  const pricing = await getAllPricing();
  const faq = await getAllFaq();
  const testimonials = await getAllTestimonials();
  const about = await getAllAbout();
  const settings = await getSettings();
  return (
    <Home
      hero={hero}
      pricing={pricing}
      faq={faq}
      testimonials={testimonials}
      about={about}
      settings={settings}
    />
  );
}
