import { motion, useScroll, useTransform } from "framer-motion";

import img1 from "../assets/projectsimg/img1.png";
import img2 from "../assets/projectsimg/img2.png";
import img3 from "../assets/projectsimg/img3.png";
import img4 from "../assets/projectsimg/img4.png";
import img5 from "../assets/projectsimg/img5.png";
import { useRef } from "react";

export default function ProjectImages() {
  const section = useRef(null);

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0.45, 0.7], ["0vw", "8vw"]);
  const xOuter = useTransform(scrollYProgress, [0.45, 0.7], ["0vw", "16vw"]);

  const mx = useTransform(scrollYProgress, [0.45, 0.7], ["-0vw", "-8vw"]);
  const mxOuter = useTransform(scrollYProgress, [0.45, 0.7], ["-0vw", "-16vw"]);

  return (
    <div
      className="relative flex justify-center items-center w-full h-screen"
      ref={section}
    >
      <motion.img
        src={img4}
        className="w-[50vw] h-auto absolute opacity-50"
        style={{ x: mxOuter }}
      ></motion.img>
      <motion.img
        src={img2}
        className="w-[50vw] h-auto absolute opacity-50"
        style={{ x: mx }}
      ></motion.img>
      <motion.img
        src={img5}
        className="w-[50vw] h-auto absolute opacity-50"
      ></motion.img>
      <motion.img
        src={img1}
        className="w-[50vw] h-auto absolute opacity-50"
        style={{ x: x }}
      ></motion.img>
      <motion.img
        src={img3}
        className="w-[50vw] h-auto absolute opacity-50"
        style={{ x: xOuter }}
      ></motion.img>
    </div>
  );
}
