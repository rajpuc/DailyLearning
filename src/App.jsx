import { anticipate, motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <motion.div
        initial={{
          cursor:"grab"
        }}
        drag
        whileDrag={{
          scale:0.7,
          cursor:"grabbing"
        }}
        dragConstraints={{
          left:0,
          right:700,
          bottom:300,
          top:0

        }}
        dragDirectionLock={true}
        className="bg-red-400 w-48 h-48 border-4 border-white"
      ></motion.div>

    </div >
  );
};

export default App;
