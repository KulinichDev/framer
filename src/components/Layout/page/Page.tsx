import { motion, AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        exit={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
