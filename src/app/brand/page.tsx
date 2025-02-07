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
              text="Experience the fusion of cutting-edge performance and refined elegance with our handpicked selection of Yamaha, Kawasaki, and BMW motorcycles."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              clipPath="polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)"
              textColor="white"
            />
            <TextReveal
              headerText="Kawasaki"
              text="Every ride is a statement—our motorcycles embody precision engineering, power, and unmatched sophistication. "
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              clipPath="polygon(0 0, 48% 0, 100% 100%, 50% 100%)"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Ducati"
              text="Our motorcycles are more than just machines; they are a celebration of design, power, and precision. Ride the world's most revered motorcycles, built for those who demand power, prestige, and perfection."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              textColor="white"
            />
            <TextReveal
              headerText="BMW"
              text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
              textColor="white"
            />
            <TextReveal
              headerText="Honda"
              text="From exhilarating speed to timeless design, discover motorcycles that transcend the ordinary and embrace the extraordinary."
              imageUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
              inverted={true}
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
        />
      </TracingBeam>


      <div className="h-[25vh] w-full"></div>
    </>
  );
}
