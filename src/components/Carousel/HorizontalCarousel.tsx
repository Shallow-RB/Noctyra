import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import brandLogoList from "../../data/brand-logo-list.json"; // Import the JSON data

const Example = () => {
  return <HorizontalCarousel />;
};

const HorizontalCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["55%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-b from-black to-white"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <motion.div style={{ x }} className="flex gap-36">
        <div className="flex items-center justify-center h-[450px] text-nowrap text-6xl font-light uppercase tracking-widest">
          our brands
        </div>

          {brandLogoList.map((logo) => (
            <Card
              card={{
                url: logo.url,
                title: logo.name.split("-")[0]?.toUpperCase() ?? "",
                id: logo.key,
              }}
              key={logo.key}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 z-0 bg-transparent transition-transform duration-300 scale-75 group-hover:scale-90 saturate-0   hover:saturate-100 backdrop-blur-2xl  hover:backdrop-blur-none"
      ></motion.div>


      {/* <div className="absolute inset-0 z-10 grid place-content-center bg-transparent ">
        <motion.p className="p-8 text-6xl uppercase text-white transition-opacity duration-300 group-hover:opacity-0">
          {card.title}
        </motion.p>
      </div> */}
    </motion.div>
  );
};

export default Example;

interface CardType {
  url: string;
  title: string;
  id: string;
}
