import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "My Profile",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">About me</h1>
    </section>
  );
}
