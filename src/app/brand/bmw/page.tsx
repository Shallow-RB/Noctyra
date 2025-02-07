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
          backgroundImages={motorcyclesList.map((brand) => brand.imageUrl)}
        />
      </div>

      <TracingBeam beamColor="#0166B1">
        <div className="bg-white">
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Innovation & Technology"
              text="BMW leads in motorcycle innovation, integrating advanced electronics, rider aids, and adaptive suspension. Their bikes feature cutting-edge safety and performance technologies."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHgduTLI71hzIFYDriOtT59MCGAcXBLaxdjEvm"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="black"
            />
            <TextReveal
              headerText="Luxury & Comfort"
              text="Renowned for premium materials and ergonomic designs, BMW motorcycles excel in long-distance touring. Models like the R 1250 GS offer superior comfort and refinement."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHKbbctEgYqsOARCblfHXPUk09yzTEgadiQGhF"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="black"
            />

            <TextReveal
              headerText="Performance & Power"
              text="BMW engines deliver a balance of power and efficiency, with high-performance models like the S 1000 RR setting benchmarks in speed and handling."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHCkIhscNbl7SmAgV5iqkTZEUd4DhneXR69cuz"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="black"
            />
            <TextReveal
              headerText="Adventure & Touring"
              text="With legendary adventure bikes like the GS series, BMW dominates the touring and off-road market, offering versatility and rugged durability."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHudwy2lXKhdFEwzr9vAMlnioybOQm0Ikj7taH"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
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
