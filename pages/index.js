import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-col w-screen min-h-screen pt-10 bg-monako-2">
      <div className="flex justify-end pr-16 animate-tranDTU ">
        <h1 className="pt-8 font-bold text-monako-5 text-shadow text-9xl font-Takhte">
          موناکو
        </h1>
      </div>

      <div className="flex justify-center animate-show -z-10">
        <Image
          priority
          src={"/image/Wristwatch-bro.png"}
          height="250"
          width="250"
          alt="asdgfa"
        />
      </div>

      <h1 className="pb-5 pl-20 font-bold text-shadow animate-tranUTD text-monako-5 text-8xl font-abril">
        Monako
      </h1>
    </div>
  );
}
