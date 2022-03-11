import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { IoCall } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

const AboutUs = () => {
  return (
    <section className="h-screen p-10 md:pt-24 pt-10 text-sm md:text-xl min-h-min font-Yekan bg-monako-2">
      <AnimationOnScroll
        className="flex flex-wrap-reverse items-center justify-around w-full h-full "
        animateIn="animate__backInDown"
      >
        <div className="relative w-11/12 overflow-hidden border-4 rounded-md shadow-md md:w-3/6 bg-monako-1 h-3/6 md:h-4/6 shadow-monako-1 bg-none border-monako-5">
          <iframe
            className="w-full h-full "
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=33.49619120076433,%2049.04922779018&t=&z=19&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginWidth="0"
            marginHeight="0"
          ></iframe>
        </div>
        <div className="flex flex-col justify-around h-60">
          <a
            href="tel:09122773594"
            className="flex justify-around p-3 rounded-full shadow-md cursor-pointer hover:bg-green-400 shadow-monako-1 md:p-7 text-monako-2 bg-monako-3"
          >
            <IoCall className="text-lg md:text-2xl text-monako-5" />
            <h3>09122773594 :شماره تماس</h3>
          </a>
          <a
            href="https://www.google.com/maps?ll=33.496191,49.049228&z=19&t=m&hl=en-US&gl=US&mapclient=embed&q=33%C2%B029%2746.3%22N+49%C2%B002%2757.2%22E+33.496191,+49.049228@33.4961912,49.0492278"
            className="flex justify-between p-3 rounded-full shadow-md cursor-pointer md:p-7 hover:bg-green-400 shadow-monako-1 text-monako-2 bg-monako-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLocation2 className="mr-2 text-lg md:text-2xl text-monako-5" />
            <h3>آدرس: لرستان دورود خ 45 متری</h3>
          </a>
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default AboutUs;
