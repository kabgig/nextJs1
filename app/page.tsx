import { Metadata } from "next";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1 className="heading">Heading</h1>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("https://api.example.com");
  return {
    title: "product.name",
    description: "Description",
  };
}
