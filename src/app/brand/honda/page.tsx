import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import ModelAccordion from "~/components/Accordion/ModelAccordian";

export default async function Honda() {
  const motorcyclesList = await db
    .select()
    .from(motorcycles)
    .where(eq(motorcycles.brandName, "Honda"));

  return (
    <>
      <Landing
        title="HONDA"
        header="The Power of Dreams"
        description="Honda motorcycles are engineered for adventure, speed, and reliability. Whether you're tearing up the track on a CBR or cruising the city streets, Honda is built for riders who dream big."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHZOnguykYPKjxoU1M9WF7gq0yrXJH3Ds4NOeb"
        videoUrl={motorcyclesList[Math.floor(Math.random() * motorcyclesList.length)]?.videoUrl}
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
      />

      <InfiniteText
        inputText="HONDA"
        textColor="white"
        backgroundColor="black"
        slashColor="#FF0000"
      />

      <ModelAccordion
        texts={motorcyclesList.map((brand) => brand.modelName)}
        descriptions={motorcyclesList.map((brand) => brand.description)}
        navigateTo={motorcyclesList.map((brand) =>
          brand.modelName.toLowerCase().replace(/\s+/g, "-"),
        )}
        brandName="honda"
        backgroundImages={motorcyclesList.map((brand) => brand.imageUrl)}
      />

      <TracingBeam beamColor="#FF0000">
        <div className="">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Unmatched Reliability"
              text="Honda motorcycles are built to last, offering durability, low maintenance, and trusted performance across all riding conditions."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHSic3wRKBQk93YxZ0zD16lrNWeHUt4cvEfjTg"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Beginner-Friendly Options"
              text="With models like the CB500X and Rebel 500, Honda provides excellent choices for new riders looking for an easy and accessible ride."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHKz1W2IgYqsOARCblfHXPUk09yzTEgadiQGhF"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Racing & Performance"
              text="Honda's involvement in MotoGP and other racing events has led to legendary sportbikes like the CBR1000RR-R Fireblade, known for precision engineering."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHY2nfBMLZXfIP3Wa7pJTresFv2Nzgyih9DV5k"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Wide Model Range"
              text="From sportbikes to touring, adventure, and commuter motorcycles, Honda offers something for every rider, making it one of the most versatile brands."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHc3t0ZthAzQf0g15xWGUu9bFvErAmt2IYicR3"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />
          </div>
        </div>
      </TracingBeam>

      <InfiniteText
        inputText="HONDA"
        textColor="white"
        backgroundColor="black"
        slashColor="#FF0000"
      />
    </>
  );
}
