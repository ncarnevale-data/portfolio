import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  id: string;
  animation?: boolean;
  bgColor?: "blue" | "black";
  textColor?: "lavender" | "white" | "orange";
}

const Section = ({
  children,
  id,
  animation = true,
  bgColor,
  textColor,
}: Props) => {
  const bgColorVariants = {
    blue: "bg-brand-blue",
    black: "bg-brand-black",
  };

  const textColorVariants = {
    lavender: "text-brand-lavender",
    white: "text-brand-white",
    orange: "text-brand-orange",
  };

  return (
    <section
      className={`${bgColor ? bgColorVariants[bgColor] : ""} ${textColor ? textColorVariants[textColor] : ""}`}
      id={id}
    >
      {animation && (
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      )}
      {!animation && <div className="mx-auto max-w-7xl">{children}</div>}
    </section>
  );
};

export default Section;
