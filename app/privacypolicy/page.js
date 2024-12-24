import Container from "@/components/container";
import Navbar from "@/components/navbar";
export default async function About() {
  const menuItems = [
    {
      name: "BEATS",
      href: "/#contact",
      target: "_self"
    },
    {
      name: "ABOUT",
      href: "/#about",
      target: "_self"
    },
    {
      name: "FAQ",
      href: "/#faq",
      target: "_self"
    },
    {
      name: "CONTACT",
      href: "/#contact",
      target: "_self"
    },
    {
      name: "DTH⛓️",
      href: "https://dth.rokefela.com/",
      ref: null,
      target: "_blank"
    }
  ];
  return (
    <Container>
      <Navbar menuItems={menuItems} />
      <main className="mx-auto max-w-3xl px-6 md:px-16 lg:max-w-7xl">
        <h1>Hello</h1>
      </main>
    </Container>
  );
}
