import HomePage from "./home";
import {
  getAllHeros,
  getAllPricing,
  getAllFaq,
  getAllTestimonials
} from "@/lib/sanity/client";

export default async function IndexPage() {
  const hero = await getAllHeros();
  const pricing = await getAllPricing();
  const faq = await getAllFaq();
  const testimonials = await getAllTestimonials();
  return (
    <HomePage
      hero={hero}
      pricing={pricing}
      faq={faq}
      testimonials={testimonials}
    />
  );
}
