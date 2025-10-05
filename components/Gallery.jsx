import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery({ images }) {
  return (
    <section className="max-w-4xl mx-auto my-8 p-4">
      <h3 className="font-heading text-2xl mb-4">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-lg overflow-hidden">
            <img
              loading="lazy"
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
