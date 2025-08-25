"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants } from "@/consts";

export default function HeaderContentContainer() {
  return (
    <Container>
      <div className="flex items-center justify-center py-10">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{
            once: true,
          }}
          variants={fadeUpAnimationVariants}
        >
          <h1 className="text-center text-4xl font-bold">Header</h1>
        </motion.div>
      </div>
    </Container>
  );
}
