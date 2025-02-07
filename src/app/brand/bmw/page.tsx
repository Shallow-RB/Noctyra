import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import ModelAccordion from "~/components/Accordion/ModelAccordian";

export default async function BMW() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "BMW"));

  return (
    <>
      <Landing
        title="BMW"
        header="Sheer Driving Pleasure"
        description="BMW Motorrad is where innovation meets adventure. every BMW motorcycle is crafted for performance, luxury, and limitless journeys. The road is yours—embrace the ride."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHpNlP25RxZcGVh43KvCJ091ySznEOusW6a7tj"
        videoUrl={motorcyclesList[Math.floor(Math.random() * motorcyclesList.length)]?.videoUrl}
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <InfiniteText
        inputText="BMW"
        textColor="white"
        backgroundColor="black"
        slashColor="#0166B1"
      />
      <div className="h-[100vh] w-full bg-gradient-to-b from-black to-white"></div>

      <div className="bg-white">
        <ModelAccordion
          texts={motorcyclesList.map((brand) => brand.modelName)}
          descriptions={motorcyclesList.map((brand) => brand.description)}
          navigateTo={motorcyclesList.map((brand) =>
            brand.modelName.toLowerCase().replace(/\s+/g, "-"),
          )}
          brandName="bmw"
        />
      </div>


      <TracingBeam beamColor="#0166B1">
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
        inputText="BMW"
        textColor="black"
        backgroundColor="white"
        slashColor="#0166B1"

      />
    </>
  );
}
