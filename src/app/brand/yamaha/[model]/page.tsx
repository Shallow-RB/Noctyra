import { db } from "~/db";
import { motorcycles } from "~/db/schema";
import { eq } from "drizzle-orm";
import Landing from "~/components/Landing/Landing";
import { TracingBeam } from "~/components/ui/tracing-beam";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import { PerformanceStats } from "~/components/PerformanceStats/PerformanceStats";
import { EngineStats } from "~/components/EngineStats/EngineStats";
import { SpecificationsStats } from "~/components/SpecificationsStats/SpecificationsStats";
import InfiniteText from "~/components/InfiniteText/InfiniteText";
import { ZoomParallax } from "~/components/ZoomParallax/ZoomParallax";

export default async function YamahaModel({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const formattedModel = (await params).model.split("-").join(" ");
  const model = formattedModel.toUpperCase();

  function getThemeColor(brandName: string): string {
    switch (brandName.toLowerCase()) {
      case "ducati":
        return "#e41f2d";
      case "yamaha":
        return "#053aa6";
      case "kawasaki":
        return "#00c951";
      case "bmw":
        return "#0166B1";
      case "honda":
        return "#FF0000";
      default:
        return "#ffffff";
    }
  }

  try {
    const result = await db
      .select()
      .from(motorcycles)
      .where(eq(motorcycles.modelName, model));

    const motorcycle = result.length > 0 ? result[0] : null;

    if (!motorcycle) {
      return <div>Motorcycle not found</div>;
    }

    const performanceStats = [
      { id: 1, name: "Price", value: motorcycle.price, prefix: "€" },
      {
        id: 2,
        name: "Max Power",
        value: parseInt(motorcycle.maxPower),
        suffix: "HP",
      },
      { id: 3, name: "Top Speed", value: motorcycle.topSpeed, suffix: "KMH" },
    ];

    const engineStats = [
      { id: 4, name: "Engine Type", value: motorcycle.engineType },
      {
        id: 5,
        name: "Engine Capacity",
        value: motorcycle.engineCapacity,
        suffix: "CC",
      },
      {
        id: 6,
        name: "Max Torque",
        value: parseInt(motorcycle.maxTorque),
        suffix: "Nm",
      },
    ];

    const specificationsStats = [
      { id: 7, name: "Weight", value: motorcycle.weight, suffix: "KG" },
      {
        id: 8,
        name: "Fuel Capacity",
        value: motorcycle.fuelCapacity,
        suffix: "L",
      },
      { id: 9, name: "Type", value: motorcycle.type },
    ];

    const zoomParallaxImages: string[] = [
      motorcycle.imageUrl,
      motorcycle.imageUrl6!,
      motorcycle.imageUrl7!,
      motorcycle.imageUrl8!,
      motorcycle.imageUrl9!,
    ];

    return (
      <>
        <Landing
          title={motorcycle.modelName}
          logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHZdVQ7ekYPKjxoU1M9WF7gq0yrXJH3Ds4NOeb"
          description={motorcycle.description}
          videoUrl={motorcycle.videoUrl}
          preloadImgUrl={motorcycle.preloadImgUrl}
        />

        <TracingBeam beamColor={getThemeColor(motorcycle.brandName)}>
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText={motorcycle.header2}
              imageUrl={motorcycle.imageUrl2!}
              text={motorcycle.description2}
            />

            <PerformanceStats
              stats={performanceStats}
              textColor={getThemeColor(motorcycle.brandName)}
            />

            <TextReveal
              headerText={motorcycle.header3}
              imageUrl={motorcycle.imageUrl3!}
              text={motorcycle.description3}
              inverted={true}
            />

            <EngineStats
              stats={engineStats}
              textColor={getThemeColor(motorcycle.brandName)}
            />

            <TextReveal
              headerText={motorcycle.header4}
              imageUrl={motorcycle.imageUrl4!}
              text={motorcycle.description4}
            />

            <SpecificationsStats
              stats={specificationsStats}
              textColor={getThemeColor(motorcycle.brandName)}
            />

            <TextReveal
              headerText={motorcycle.header5}
              imageUrl={motorcycle.imageUrl5!}
              text={motorcycle.description5}
              inverted={true}
            />
          </div>
        </TracingBeam>

        <InfiniteText
          slashColor={getThemeColor(motorcycle.brandName)}
          inputText={motorcycle.modelName}
          textColor="white"
          backgroundColor="black"
        />

        <div className="mt-24 h-[100vh] w-full bg-gradient-to-b from-black to-white"></div>
        <ZoomParallax imageUrls={zoomParallaxImages} />
      </>
    );
  } catch (error) {
    console.error("Error fetching motorcycle data:", error);
    return <div>Failed to load motorcycle data. Please try again later.</div>;
  }
}
