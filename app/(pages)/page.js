import CarouselHomePage from "./_components/Carousel";
import DrastiriotitesHomePage from "./_components/Drastiriotites-homePage";
import EkdiloseisHomePage from "./_components/Ekdiloseis-homePage";
import OsilogosHomePage from "./_components/Osilogos-homePage";

const images = [
  "/main-1.webp",
  "/plateia.jpg",
  "/main-3.webp",
  "/main-4.webp",
  "/mouseio.webp",
];

export default function Home() {
  return (
    <div className="p-2 w-full space-y-10 lg:mx-auto">
      <CarouselHomePage opts={{ loop: true }} images={images} />

      <div className="lg:w-[65%] mx-auto space-y-10 ">
        <OsilogosHomePage />

        <EkdiloseisHomePage />

        {/* <DoreesHomePage /> */}

        <DrastiriotitesHomePage />
      </div>
    </div>
  );
}
