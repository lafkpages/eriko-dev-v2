import { useState } from "react";

export default function Tldr() {
  const [showTldr, setShowTldr] = useState(false);
  return (
    <>
      <a
        href="/#"
        className="underline mb-2"
        onClick={() => {
          setShowTldr(!showTldr);
        }}
      >
        {showTldr ? "Hide" : "Read"} TL:DR
      </a>

      {showTldr ? (
        <ul className="list-disc flex flex-col gap-2 pt-2">
          <li className="ml-5">
            Fullstack Developer, Digital Artist and Student
          </li>
          <li className="ml-5">Javascript (Node.js, React, Next.js, Astro)</li>
          <li className="ml-5">Strong passion for design and development</li>
        </ul>
      ) : (
        <>
          <p className="sm:w-5/6 pb-8">
            I am a digital designer, full-stack JavaScript developer and
            student. I have a strong passion for both design and development. I
            specialize in creating dynamic and engaging digital experiences that
            seamlessly combine form and function.
          </p>
          <p className="sm:w-5/6 pb-8">
            Whether working on a design project or developing a full-stack
            application, I bring a unique perspective and a commitment to
            excellence to every project. I believe in the importance of user
            experience and usability, and I always strive to create designs that
            meet the specific needs and goals.
          </p>
        </>
      )}
    </>
  );
}
