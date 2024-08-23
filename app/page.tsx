import Image from "next/image";
import trees from "@/public/images/1.jpg";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://bit.ly/react-cover"
        alt="Trees"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
      ></Image>
    </main>
  );
}
