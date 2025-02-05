import { motion } from "framer-motion";

export default function InfiniteText() {
  const text = "GALLERY //";

  return (
    <>
      <div className="mx-auto flex h-auto w-full flex-row bg-white overflow-hidden">
        {Array.from({length: 6}).map((_, index) => (
          <motion.div
            key={`left-${index}`}
            className="flex flex-shrink-0 text-8xl font-normal uppercase tracking-widest text-black"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
            {text}&nbsp;
          </motion.div>
        ))}
      </div>

      <div className="mx-auto flex h-auto w-[200vw] flex-row bg-white overflow-hidden -translate-x-[42rem]">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={`right-${index}`}
            className="flex flex-shrink-0 text-8xl font-normal uppercase tracking-widest text-black"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
            {text}&nbsp;
          </motion.div>
        ))}
      </div>


      <div className="mx-auto flex h-auto w-full flex-row bg-white overflow-hidden">
        {Array.from({length: 6}).map((_, index) => (
          <motion.div
            key={`left-${index}`}
            className="flex flex-shrink-0 text-8xl font-normal uppercase tracking-widest text-black mb-72"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
            {text}&nbsp;
          </motion.div>
        ))}
      </div>
    </>
  );
}
