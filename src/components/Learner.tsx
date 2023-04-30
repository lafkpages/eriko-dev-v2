import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectImages from "./ProjectImages";

export default function Learner() {
  const section = useRef(null);

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.25, 0.6], [0, 1]);

  return (
    <div
      ref={section}
      id="learner"
      className="h-[350vh] relative bg-dark text-light w-full"
    >
      <div className="sticky top-0">
        <div className=" relative h-screen w-full flex justify-center items-center">
          <p className="text-6xl font-black absolute z-10 text-center">
            <span className="stroke">
              ...and I'm<br></br>always learning.
            </span>
          </p>
          <motion.div style={{ scale }} className="w-full h-screen">
            <ProjectImages></ProjectImages>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
