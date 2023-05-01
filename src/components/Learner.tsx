import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectImages from "./ProjectImages";

export default function Learner() {
  const section = useRef(null);

  return (
    <div
      ref={section}
      id="learner"
      className="h-[300vh] relative bg-dark text-light w-full"
    >
      <div className="sticky top-0">
        <div className=" relative h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-black absolute z-10 text-center">
            <span className="stroke">
              ...and I'm<br></br>always learning.
            </span>
          </p>

          <ProjectImages ref={section}></ProjectImages>
        </div>
      </div>
    </div>
  );
}
