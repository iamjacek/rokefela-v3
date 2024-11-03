import HomePage from "./home";
import { getAllHeros, getAllPricing } from "@/lib/sanity/client";

export default async function IndexPage() {
  const hero = await getAllHeros();
  const pricing = await getAllPricing();
  return <HomePage hero={hero} pricing={pricing} />;
}
