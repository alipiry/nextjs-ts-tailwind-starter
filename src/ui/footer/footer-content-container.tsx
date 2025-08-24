"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { currentYear, fadeUpAnimationVariants } from "@/consts";

export default function FooterContentContainer() {
  return (
    <Container>
      <div className="text-center">
        <motion.div
          className="text-sm font-semibold md:text-base"
          whileInView="show"
          initial="hidden"
          viewport={{
            once: true,
          }}
          variants={fadeUpAnimationVariants}
        >
          © {currentYear} NextJS Starter
        </motion.div>
      </div>
    </Container>
  );
}
