import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import ModelAccordion from "~/components/Accordion/ModelAccordian";

export default async function Yamaha() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "Yamaha"));

  return (
    <>
      <Landing
        title="YAMAHA"
        header="Revs Your Heart"
        description="Yamaha motorcycles deliver a perfect balance of power and control. From the race-inspired YZF-R1 to the torque-packed MT series, every Yamaha is built for an exhilarating ride. Feel the rush—embrace the journey."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHZdVQ7ekYPKjxoU1M9WF7gq0yrXJH3Ds4NOeb"
        videoUrl={motorcyclesList[Math.floor(Math.random() * motorcyclesList.length)]?.videoUrl}
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <InfiniteText
        inputText="YAMAHA"
        textColor="white"
        backgroundColor="black"
        slashColor="#053aa6"
      />

      <ModelAccordion
        texts={motorcyclesList.map((brand) => brand.modelName)}
        descriptions={motorcyclesList.map((brand) => brand.description)}
        navigateTo={motorcyclesList.map((brand) =>
          brand.modelName.toLowerCase().replace(/\s+/g, "-"),
        )}
        brandName="yamaha"
        backgroundImages={motorcyclesList.map((brand) => brand.imageUrl)}
      />

      <TracingBeam beamColor="#053aa6">
        <div className="">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Cutting-Edge Technology"
              text="Yamaha integrates advanced electronics, such as ride modes, quick shifters, and traction control, into their motorcycles for enhanced performance."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHYxRSuO4LZXfIP3Wa7pJTresFv2Nzgyih9DV5"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Smooth & Refined Performance"
              text="Yamaha bikes are known for their balanced power delivery and smooth handling, making them a top choice for both beginners and experienced riders."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHGH25kiadwpQMy0WkeEoi5aTZILgU8cufHBSO"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Legendary Racing Heritage"
              text="With a rich history in MotoGP and Superbike racing, Yamaha motorcycles offer track-inspired performance and precision engineering."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHMsC5ewnKqDi1PW4RrIsEQztAVf8e0ylkh7co"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Diverse Model Range"
              text="From the powerful R1 sportbike to the versatile MT series and adventure-focused Tenere, Yamaha caters to every riding style."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBH6OojVoIvxwtTsdbC3fLNPm4DMJla9BZXYc8V"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />
          </div>
        </div>
      </TracingBeam>

      <InfiniteText
        inputText="YAMAHA"
        textColor="white"
        backgroundColor="black"
        slashColor="#053aa6"
      />
    </>
  );
}
