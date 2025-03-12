import React from "react";
import { motion } from "framer-motion";
import GalleryContent from "./GalleryContent";

export default function GalleryKravmaga({ data }) {

  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-2xl mb-4">Gallery</h1>
      <div >
        {data.map((imgs) => (
          <div key={imgs.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="overflow-hidden rounded-lg"
            >
              <GalleryContent
                imgOne={imgs.gallery_one}
                imgTwo={imgs.gallery_two}
                imgThree={imgs.gallery_three}
                imgFour={imgs.gallery_four}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
