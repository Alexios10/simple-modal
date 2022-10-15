import React from "react";
import { motion } from "framer-motion";

export const Modal = ({ open, onClose }) => {
  if (open === false) return null;

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.3,
        },
      }}
      className="overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          scale: 0,
          transition: {
            delay: 0.3,
          },
        }}
        className="container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <motion.h1
          initial={{
            x: 70,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.4,
            },
          }}
          exit={{
            x: 90,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
        >
          Modal
        </motion.h1>
        <button className="closebtn" onClick={onClose}>
          X
        </button>
        <motion.p
          initial={{
            x: 70,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.4,
            },
          }}
          exit={{
            x: 90,
            opacity: 0,
            transition: {
              duration: 0.2,
            },
          }}
          className="content"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          praesentium repudiandae molestias, incidunt quibusdam soluta commodi{" "}
          <br />
          harum enim culpa maxime amet fugiat similique libero ad ratione
          nostrum aliquam doloribus quod.
        </motion.p>
        <button className="submitBtn" onClick={onClose}>
          OK !
        </button>
      </motion.div>
    </motion.div>
  );
};
