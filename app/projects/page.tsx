import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Apple Barrientos Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      {/* <ul className="list-disc pl-5">
        <li>Personal</li>        
        <li>Coursework</li>
      </ul> */}
    </section>
  );
}
