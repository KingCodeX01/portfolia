import Image from "next/image";
import { Experience } from "./pages/Experience";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection />
      </div>
      <div>
        <Experience />
      </div>s
    </main>
  );
}
