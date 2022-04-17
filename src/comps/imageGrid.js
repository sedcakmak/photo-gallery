import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  const testing = (e) => {
    console.log(docs.url);
  };
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => setSelectedImage(doc.url)}
            />
            <button
              className="btn-delete"
              onClick={() => console.log(doc.url + "ve de" + doc.id)}
            >
              Delete
            </button>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
