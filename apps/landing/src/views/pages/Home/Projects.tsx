import scopeer from "@/assets/images/scopeer_logo.png";
import hoplay from "@/assets/images/hoPlay.jpeg";
import trh from "@/assets/images/trh.png";
import atheer from "@/assets/images/atheer_logo.png";
import myStc from "@/assets/images/stc.png";
import stcPlay from "@/assets/images/stc_play.png";
import rateel from "@/assets/images/rateel_logo.png";
import tamini from "@/assets/images/tamini_logo.png";
import hamoola from "@/assets/images/homoola_logo.svg";
import legendsGaming from "@/assets/images/legends_gaming.jpeg";
import zeroOne from "@/assets/images/zero-one.png";
import crimson from "@/assets/images/crimson.png";
import athlath from "@/assets/images/athlath.png";
import aljaber from "@/assets/images/aljaber.png";
import mal from "@/assets/images/mal.jpeg";
import mnadi from "@/assets/images/mnadi.png";

export default function Projects() {
  return (
    <div className="mx-auto my-20 max-w-7xl px-6 text-center lg:px-8">
    <h2 className="mt-10 text-3xl font-bold text-gray-900 sm:text-4xl">
      خبرة في بناء حلول متوافقة مع متطلبات الجهات التشريعية
    </h2>
    <p className="mt-5 text-lg leading-8 text-gray-600">
              فريق العمل لدينا يتمتع بمجموعة واسعة من المشاريع والخبرات السابقة
              في مجال تطوير البرمجيات. لقد عملنا على مشاريع متنوعة تشمل تطبيقات
              الويب والهواتف المحمولة والبرامج المخصصة.
            </p>
    <div className="grid items-center gap-16 pt-8 md:grid-cols-4 grid-cols-2">
    <img
              className="max-h-14 w-full object-contain object-center"
              src={scopeer}
              loading="lazy"
              alt="scopeer"
              width={145}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={hoplay}
              loading="lazy"
              alt="hoplay"
              width={104}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={mal}
              alt="mal"
              loading="lazy"
              width={140}
              height={48}
            />
            <img
              className="max-h-8 w-full object-contain object-center"
              src={atheer}
              alt="atheer"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              loading="lazy"
              src={myStc}
              alt="stc"
              width={158}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={stcPlay}
              alt="stc play"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={rateel}
              alt="rateel"
              loading="lazy"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={tamini}
              loading="lazy"
              alt="tamini"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center pr-14 lg:pr-14"
              src={hamoola}
              alt="hamoola"
              loading="lazy"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={legendsGaming}
              loading="lazy"
              alt="legends gaming"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full md:col-span-1  col-span-2 object-contain object-center"
              src={mnadi}
              alt="mnadi"
              width={147}
              height={48}
            />
    </div>
  </div>
  );
}
