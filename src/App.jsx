import { anticipate, motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <motion.div
        initial={{
          x:200,
        }}
        animate={{
          x: 1000,
          rotate:40
        }}
        transition={{
          duration: 3,
          delay: 3,
          repeat:4,
          ease:anticipate
        }}
        className="bg-red-400 w-48 h-48 border-4 border-white"
      ></motion.div>
      <motion.div
        animate={{
          x: 1000,
          scale: 0.5,
        }}
        transition={{
          duration: 3,
          delay: 3,
        }}
        className="bg-amber-400 rounded-full w-48 h-48 border-4 border-white"
      ></motion.div>
    </div>
  );
};

export default App;
