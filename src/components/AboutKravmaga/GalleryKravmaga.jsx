import React from "react";
import { motion } from "framer-motion";

export default function GalleryKravmaga({ data }) {
  return (
    <div className="p-4">
      <h1 className="text-white font-bold text-2xl mb-4">Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {data.map((imgs,id ) => (
          <React.Fragment  key={id}>
            {[imgs.galery_one, imgs.galery_two, imgs.galery_three, imgs.galery_four].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="overflow-hidden rounded-lg"
              >
                <img src={img} alt="gallery" className="w-full h-[300px] object-cover" />
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}