import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

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
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <h1 className="text-5xl pl-12 font-light tracking-widest text-nowrap uppercase">our brands</h1>
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <motion.div
      key={card.id}
      className="duration-300 overflow-hidden group relative h-[450px] w-[450px] bg-neutral-950 saturate-0 transition-all hover:saturate-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
      ></motion.div>
      <div className="absolute inset-0 z-10 grid place-content-center backdrop-blur-2xl hover:backdrop-blur-none transition-all duration-300">
        <motion.p
          className="p-8 text-6xl uppercase text-white transition-opacity duration-300 group-hover:opacity-0"
        >
          {card.title}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxI0LSR5c9JSiRTPpHOIu5ytfakXLs61eElhv",
    title: "Yamaha",
    id: 1,
  },
  {
    url: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxI0LSR5c9JSiRTPpHOIu5ytfakXLs61eElhv",
    title: "Honda",
    id: 2,
  },

  {
    url: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxI0LSR5c9JSiRTPpHOIu5ytfakXLs61eElhv",
    title: "Kawasaki",
    id: 3,
  },

  {
    url: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxI0LSR5c9JSiRTPpHOIu5ytfakXLs61eElhv",
    title: "BMW",
    id: 4,
  },

  {
    url: "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHxI0LSR5c9JSiRTPpHOIu5ytfakXLs61eElhv",
    title: "Ducati",
    id: 5,
  },


];
