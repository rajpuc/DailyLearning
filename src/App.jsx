import { anticipate, motion } from "motion/react";
import React from "react";

const App = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <motion.div
        whileHover={{
          backgroundColor:"green"
        }}
        whileTap={{
          scale:0.8
        }}
        className="bg-red-400 w-48 h-48 border-4 border-white"
      ></motion.div>

    </div>
  );
};

export default App;
