import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen sm:pt-16 justify-evenly bg-monako-2">
      <div className="px-10  sm:self-end animate-tranDTU">
        <h1 className="font-bold text-monako-5 text-shadow sm:text-9xl text-8xl font-Takhte">
          موناکو
        </h1>
      </div>

      <div className=" animate-show">
        <Image
          priority
          src={"/image/Wristwatch-bro.png"}
          height="250"
          width="250"
          alt="asdgfa"
        />
      </div>

      <h1 className="px-10 text-7xl font-bold  sm:self-start text-shadow animate-tranUTD text-monako-5 sm:text-8xl font-abril">
        Monako
      </h1>
    </div>
  );
}
