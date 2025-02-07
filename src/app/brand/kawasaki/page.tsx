import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
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
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHFk9f7IPN0SOvwsxAjZ9YmJW5dhXPL4akBHf2"
        videoUrl={motorcyclesList[Math.floor(Math.random() * motorcyclesList.length)]?.videoUrl}
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <InfiniteText
        inputText="KAWASAKI"
        textColor="white"
        backgroundColor="black"
        slashColor="#00c951"
      />

      <ModelAccordion
        texts={motorcyclesList.map((brand) => brand.modelName)}
        descriptions={motorcyclesList.map((brand) => brand.description)}
        navigateTo={motorcyclesList.map((brand) =>
          brand.modelName.toLowerCase().replace(/\s+/g, "-"),
        )}
        brandName="kawasaki"
        backgroundImages={motorcyclesList.map((brand) => brand.imageUrl)}
      />

      <TracingBeam beamColor="#00c951">
        <div className="">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Raw Power & Speed"
              text="Kawasaki motorcycles are known for their high-revving engines and aggressive power delivery, with the Ninja H2 being a prime example of extreme performance."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="white"
            />
            <TextReveal
              headerText="Bold & Aggressive Design"
              text="With sharp lines, striking colors, and an aggressive stance, Kawasaki motorcycles stand out for their bold aesthetics and aerodynamic styling."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Racing DNA"
              text="From World Superbike championships to MotoGP, Kawasaki's racing success translates into cutting-edge performance for street and track riders."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="white"
            />
            <TextReveal
              headerText="Versatile Lineup"
              text="Offering sportbikes, cruisers, adventure, and off-road models, Kawasaki has a motorcycle for every riding style and preference."
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
    </>
  );
}
