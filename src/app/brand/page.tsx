import Accordion from "~/components/Accordion/Accordion";
import Landing from "~/components/Landing/Landing";
import { TextReveal } from "~/components/TextReveal/TextReveal";
import { TracingBeam } from "~/components/ui/tracing-beam";
import brandLogoList from "~/data/brand-logo-list.json";

export default async function Brand() {
  return (
    <>
      <Landing
        title="BRANDS"
        videoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHmArwGqK4ZU37XDiQBO8v2JYV9Kduz1GhrPIM"
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHSi0iI4qBQk93YxZ0zD16lrNWeHUt4cvEfjTg"
        header="OUR FINEST SELECTION"
        description="Explore our collection and find your perfect ride today."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBH7U73qvfOmCi1GFTqYsZKy8IW6pBQuJrgS95w"
      />

      <TracingBeam beamColor="#FFFFFF">
        <div>
          <div className="mx-auto w-[80%]">
            <TextReveal
              headerText="Yamaha"
              text="Yamaha motorcycles deliver a perfect balance of power and control. From the race-inspired YZF-R1 to the torque-packed MT series, every Yamaha is built for an exhilarating ride. Feel the rush—embrace the journey."

              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHYxRSuO4LZXfIP3Wa7pJTresFv2Nzgyih9DV5"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Kawasaki"
              text="Kawasaki is all about raw power and bold design. From the supercharged Ninja H2 to the street-conquering Z series, every Kawasaki bike is engineered for riders who crave adrenaline and dominance. The thrill starts here—unleash your beast with Kawasaki."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHOQ6ep7io0SnakLNxV8hfWQd7MlczgTv954JR"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />

            <TextReveal
              headerText="Ducati"
              text="Ducati isn't just a machine, it's a masterpiece. With the fierce Panigale V4, the rebellious Diavel, and the pure thrill of the Streetfighter V4, Ducati motorcycles bring passion and precision to every turn. Ride the legend, own the road."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHFyzSiucPN0SOvwsxAjZ9YmJW5dhXPL4akBHf"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="BMW"
              text="BMW Motorrad is where innovation meets adventure. From the precision of the S 1000 RR to the endurance of the R 1250 GS, every BMW motorcycle is crafted for performance, luxury, and limitless journeys. The road is yours—embrace the ride."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHguHjQrs71hzIFYDriOtT59MCGAcXBLaxdjEv"
              clipPath="polygon(10% 0, 90% 0, 100% 100%, 20% 100%)"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Honda"
              text="Honda motorcycles are engineered for adventure, speed, and reliability. Whether you're tearing up the track on a CBR, conquering trails with an Africa Twin, or cruising the city streets, Honda is built for riders who dream big."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHSic3wRKBQk93YxZ0zD16lrNWeHUt4cvEfjTg"
              clipPath="polygon(10% 0%, 90% 0%, 80% 100%, 0% 100%)"
              textColor="white"
            />
          </div>
        </div>

        <Accordion
          texts={brandLogoList.map((brand) => brand.name)}
          headerImageSrcs={brandLogoList.map((brand) => brand.url)}
          navigateTo={brandLogoList.map((brand) =>
            brand.name.toLowerCase().replace(/\s+/g, "-"),
          )}
          descriptions={[
            "Yamaha motorcycles deliver a perfect balance of power and control. From the race-inspired YZF-R1 to the torque-packed MT series, every Yamaha is built for an exhilarating ride. Feel the rush—embrace the journey.",
            "Kawasaki is all about raw power and bold design. From the supercharged Ninja H2 to the street-conquering Z series, every Kawasaki bike is engineered for riders who crave adrenaline and dominance. The thrill starts here—unleash your beast with Kawasaki.",
            "Ducati isn’t just a machine, it’s a masterpiece. With the fierce Panigale V4, the rebellious Diavel, and the pure thrill of the Streetfighter V4, Ducati motorcycles bring passion and precision to every turn. Ride the legend, own the road.",
            "BMW Motorrad is where innovation meets adventure. From the precision of the S 1000 RR to the endurance of the R 1250 GS, every BMW motorcycle is crafted for performance, luxury, and limitless journeys. The road is yours—embrace the ride.",
            "Honda motorcycles are engineered for adventure, speed, and reliability. Whether you’re tearing up the track on a CBR, conquering trails with an Africa Twin, or cruising the city streets, Honda is built for riders who dream big.",
          ]}
          backgroundImages={[
            "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHYxRSuO4LZXfIP3Wa7pJTresFv2Nzgyih9DV5",
            "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHOQ6ep7io0SnakLNxV8hfWQd7MlczgTv954JR",
            "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHFyzSiucPN0SOvwsxAjZ9YmJW5dhXPL4akBHf",
            "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHguHjQrs71hzIFYDriOtT59MCGAcXBLaxdjEv",
            "https://db6v27veh0.ufs.sh/f/9qjypOe04JBHSic3wRKBQk93YxZ0zD16lrNWeHUt4cvEfjTg",
          ]}
        />
      </TracingBeam>



      <div className="h-[25vh] w-full"></div>
    </>
  );
}
