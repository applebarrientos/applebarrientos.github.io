import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Contact</h1>
      <ul>
        <li>
            email
        </li>
        <li>
            phone
        </li>
      </ul>
    </section>
  );
}
