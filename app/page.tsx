import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="text-center">
      <h1 className="font-serif mb-8 text-7xl font-bold tracking-tight">Apple Barrientos</h1>
      <h2 className="font-serif mb-8 text-3xl font-bold tracking-tight text-emerald-500">Full Stack Developer</h2>
      <div className="mx-auto">
        <p>
          I'm a Full-Stack Developer with a strong foundation in Lean Manufacturing and Japanese production systems.
          </p>
          <p>I specialize in mobile, web, and desktop applications — building systems that drive operational efficiency, 
          automation, and IoT integration.
        </p>
      </div>
    </section>
  );
}