import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { socialLinks } from "../lib/config";


export const metadata: Metadata = {
  title: "About",
  description: "About me and my work",
};

export default function About() {
  return (
      <section>
        <a href={socialLinks.linkedin} target="_blank">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-lg block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
            unoptimized
            width={250}
            height={250}
            priority
          />
        </a>
        <h1 className="mb-8 text-2xl font-medium">About me</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p>
            Hi, I'm Apple Barrientos, a Software Developer eager to bridge the gap between technology and operational excellence. 
            My journey from manufacturing floors in the Philippines to software engineering in Japan 
            has given me deep expertise in Lean Manufacturing and Japanese production systems, 
            which I now apply to full-stack development using JavaScript, React, and Python. 
            </p>
            <p>Based in Calgary, Alberta and seeking new opportunities, I create efficient digital solutions by 
            combining my technical skills with real-world understanding of how systems impact people and processes. 
            Whether building mobile apps or IoT solutions, I'm driven by developing technology that eliminates waste 
            and optimizes workflows—just like the Lean principles I've practiced on factory floors.
          </p>
          </div>
      </section>
    );
}
