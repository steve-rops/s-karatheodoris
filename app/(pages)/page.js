import CarouselHomePage from "./_components/Carousel";
import DoreesHomePage from "./_components/Dorees-homePage";
import DrastiriotitesHomePage from "./_components/Drastiriotites-homePage";
import EkdiloseisHomePage from "./_components/Ekdiloseis-homePage";
import OsilogosHomePage from "./_components/Osilogos-homePage";

export default function Home() {
  return (
    <div className="p-2 w-full space-y-10 lg:mx-auto">
      <CarouselHomePage opts={{ loop: true }} />

      <div className="lg:w-[65%] mx-auto space-y-10 ">
        <OsilogosHomePage />

        <EkdiloseisHomePage />

        {/* <DoreesHomePage /> */}

        <DrastiriotitesHomePage />
      </div>
    </div>
  );
}
