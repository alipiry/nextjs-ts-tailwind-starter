"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";

export default function HeroContentContainer() {
  return (
    <Container>
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
      >
        <motion.h1
          className="text-3xl font-bold uppercase md:text-5xl"
          variants={fadeUpAnimationVariants}
        >
          NextJS Starter
        </motion.h1>
      </motion.div>
    </Container>
  );
}
