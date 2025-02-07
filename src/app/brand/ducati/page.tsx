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
          backgroundImages={motorcyclesList.map((brand) => brand.imageUrl)}
        />
      </div>

      <TracingBeam beamColor="#e41f2d">
        <div className="bg-white">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Exhilarating Performance"
              text="Ducati is known for its powerful V-twin and V4 engines, delivering aggressive acceleration and high-speed thrills on both road and track."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHkqWykVbLnpQB0UXfrMvZtulxaO6hJomP9Fbq"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="black"
            />
            <TextReveal
              headerText="Iconic Italian Design"
              text="Every Ducati motorcycle is a work of art, featuring sleek, aerodynamic designs, signature trellis frames, and premium components. "
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHSsqiXWBQk93YxZ0zD16lrNWeHUt4cvEfjTgh"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="black"
            />
            <TextReveal
              headerText="Racing Heritage"
              text="With a strong presence in MotoGP and Superbike racing, Ducati motorcycles are engineered for high performance and precision handling."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHa1K6wCsAgskdopnh0Ltr7bEv6BxjCPZlqIw8"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="black"
            />
            <TextReveal
              headerText="Exclusivity & Craftsmanship"
              text="Ducati bikes are built with high-end materials, ensuring exclusivity, attention to detail, and a truly premium riding experience."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHlTNq5nDPzqVwa71GRYC83rSodITEmi5J60OQ"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
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
