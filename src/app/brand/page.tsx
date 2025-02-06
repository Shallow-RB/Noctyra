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
        header="Our finest selection"
        description="Explore our collection and find your perfect ride today."
        logoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBH7U73qvfOmCi1GFTqYsZKy8IW6pBQuJrgS95w"
        videoUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBHELwLau0OqkQpbD2P8WGj7cw5UT3NvagxAyVX"
        preloadImgUrl="https://db6v27veh0.ufs.sh/f/9qjypOe04JBH7U73qvfOmCi1GFTqYsZKy8IW6pBQuJrgS95w"
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
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  ",
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.  ",

            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
          ]}
        />
      </TracingBeam>

      <div className="h-[25vh] w-full"></div>
    </>
  );
}
