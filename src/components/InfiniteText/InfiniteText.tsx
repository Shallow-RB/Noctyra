import { motion } from "framer-motion";

export default function InfiniteText() {
  const text = "GALLERY //";

  return (
    <>
      <div className="mx-auto flex h-auto w-full flex-row overflow-hidden bg-white pb-72">
        {Array.from({ length: 6 }).map((_, index) => (
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
{/* 
      <div className="mx-auto flex h-auto w-full flex-row overflow-x-hidden bg-white">
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
      <div className="mx-auto flex h-auto w-full flex-row overflow-x-hidden bg-transparent -translate-y-[6rem] -translate-x-[41.5rem]">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={`right-${index}`}
            className="flex flex-shrink-0 text-8xl font-normal uppercase tracking-widest text-black bg-transparent z-50"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 5, ease: "linear", repeat: Infinity }}
          >
            {text}&nbsp;
          </motion.div>
        ))}
      </div> */}

    </>
  );
}
