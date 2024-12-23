import React from "react";
import { motion } from "framer-motion";

const FadeInComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // 1-second fade-in
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "#4caf50",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "8px",
      }}
    >
      Fade In
    </motion.div>
  );
};

export default FadeInComponent;
