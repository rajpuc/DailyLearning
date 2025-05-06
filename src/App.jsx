import { anticipate, motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <motion.div
        initial={{
          x:0,
          y:0
        }}
        animate={{
          x: [0,800,800,0,0],
          y: [0,0,300,300,0],
        }}
        transition={{
          duration: 3,
          delay: 2,
          repeat:2,
        }}
        className="bg-red-400 w-48 h-48 border-4 border-white"
      ></motion.div>

    </div>
  );
};

export default App;
