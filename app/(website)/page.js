import HomePage from "./home";
import { getAllHeros } from "@/lib/sanity/client";

export default async function IndexPage() {
  const data = await getAllHeros();
  return <HomePage data={data} />;
}
