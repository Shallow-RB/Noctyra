import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import ModelAccordion from "~/components/Accordion/ModelAccordian";

export default async function Ducati() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "Ducati"));

  return (
    <>
      <Landing
        title="DUCATI"
        header="In Lightness My Strength"
        description="Ducati motorcycles blend breathtaking design, race-proven performance, and Italian soul to create a ride like no other."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHO63Jkpaio0SnakLNxV8hfWQd7MlczgTv954J"
        videoUrl={motorcyclesList[Math.floor(Math.random() * motorcyclesList.length)]?.videoUrl}
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"

      />

      <InfiniteText
        inputText="DUCATI"
        textColor="white"
        backgroundColor="black"
        slashColor="#e41f2d"
      />
      <div className="h-[100vh] w-full bg-gradient-to-b from-black to-white"></div>

      <div className="bg-white">
        <ModelAccordion
          texts={motorcyclesList.map((brand) => brand.modelName)}
          descriptions={motorcyclesList.map((brand) => brand.description)}
          navigateTo={motorcyclesList.map((brand) =>
            brand.modelName.toLowerCase().replace(/\s+/g, "-"),
          )}
          brandName="ducati"
        />
      </div>

      <TracingBeam beamColor="#e41f2d">
        <div className="bg-white">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="The Pinnacle of Two-Wheeled Luxury"
              text="Experience the fusion of cutting-edge performance and refined elegance with our handpicked selection of Yamaha, Kawasaki, and BMW motorcycles."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="black"
            />
            <TextReveal
              headerText="Crafted for the Bold and Elite"
              text="Every ride is a statement—our motorcycles embody precision engineering, power, and unmatched sophistication. "
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="black"
            />
            <TextReveal
              headerText="Iconic Machines, Legendary Performance"
              text="Our motorcycles are more than just machines; they are a celebration of design, power, and precision. Ride the world's most revered motorcycles, built for those who demand power, prestige, and perfection."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="black"
            />
            <TextReveal
              headerText="Elevate Your Ride, Redefine Your Journey"
              text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="black"
            />
          </div>
        </div>
      </TracingBeam>

      <InfiniteText
        inputText="DUCATI"
        textColor="black"
        backgroundColor="white"
        slashColor="#e41f2d"
      />
    </>
  );
}
