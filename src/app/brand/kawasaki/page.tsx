import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import { AnimatedNumberInView } from "~/components/AnimatedNumberInView/AnimatedNumberInView";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import ModelAccordion from "~/components/Accordion/ModelAccordian";


export default async function Kawasaki() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "Kawasaki"));

  return (
    <>
      <Landing
        title="KAWASAKI"
        header="Let the Good Times Roll"
        description="Kawasaki motorcycles are built for thrill-seekers who crave raw power, aggressive styling, and high-performance dominance on any road."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHm8ggMT4ZU37XDiQBO8v2JYV9Kduz1GhrPIMq"
        videoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <TracingBeam beamColor="#00c951">
        <div className="">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="The Pinnacle of Two-Wheeled Luxury"
              text="Experience the fusion of cutting-edge performance and refined elegance with our handpicked selection of Yamaha, Kawasaki, and BMW motorcycles."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="white"
            />
            <TextReveal
              headerText="Crafted for the Bold and Elite"
              text="Every ride is a statement—our motorcycles embody precision engineering, power, and unmatched sophistication. "
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Iconic Machines, Legendary Performance"
              text="Our motorcycles are more than just machines; they are a celebration of design, power, and precision. Ride the world's most revered motorcycles, built for those who demand power, prestige, and perfection."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="white"
            />
            <TextReveal
              headerText="Elevate Your Ride, Redefine Your Journey"
              text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="white"
            />
          </div>
        </div>
      </TracingBeam>

      <InfiniteText
        inputText="KAWASAKI"
        textColor="white"
        backgroundColor="black"
        slashColor="#00c951"
      />

      <ModelAccordion
        texts={motorcyclesList.map((brand) => brand.modelName)}
        descriptions={motorcyclesList.map((brand) => brand.description)}
        navigateTo={motorcyclesList.map((brand) => brand.modelName.toLowerCase().replace(/\s+/g, '-'))}
        brandName="kawasaki"
      />


      <div className="mx-auto w-[60%]">
        {motorcyclesList.map((brand) => (
          <div key={brand.id} className="flex flex-col pb-8">
            <p>{brand.modelName}</p>
            <p>{brand.description}</p>
            <p>{brand.price}</p>
            <AnimatedNumberInView prefix="€" getal={brand.price} />
          </div>
        ))}
      </div>
    </>
  );
}
