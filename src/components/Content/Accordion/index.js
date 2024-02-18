"use client";
import { motion } from "framer-motion";

export default function Accordion(props) {
  return (
    <motion.div className="border rounded-md mb-1 bg-secondary text-white text-2xl">
      <button
        className="w-full p-4 text-left bg-gray-200  
                           hover:bg-gray-300 transition duration-300"
        onClick={props.toggleAccordion}>
        {props.title}
        <span
          className={`float-right transform ${
            props.isOpen ? "rotate-180" : "rotate-0"
          }  
                                 transition-transform duration-300`}>
          &#9660;
        </span>
      </button>
      {props.isOpen && (
        <div className="bg-white text-secondary pt-5 border">
          {props.children}
        </div>
      )}
    </motion.div>
  );
}
