import HomePage from "./home";
import {
  getAllHeros,
  getAllPricing,
  getAllFaq,
  getAllTestimonials,
  getAllAbout
} from "@/lib/sanity/client";

export default async function IndexPage() {
  const hero = await getAllHeros();
  const pricing = await getAllPricing();
  const faq = await getAllFaq();
  const testimonials = await getAllTestimonials();
  const about = await getAllAbout();
  return (
    <HomePage
      hero={hero}
      pricing={pricing}
      faq={faq}
      testimonials={testimonials}
      about={about}
    />
  );
}
