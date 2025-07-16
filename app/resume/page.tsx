import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and work experience",
};

export default function Resume() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Resume</h1>
      <button className="mb-4"></button>
        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </Link>
    </section>
  );
}
