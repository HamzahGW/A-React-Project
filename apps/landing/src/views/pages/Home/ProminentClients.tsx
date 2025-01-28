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
import proptech from "@/assets/images/proptech.png";
import pa from "@/assets/images/paLogo.png";

export default function ProminentClients() {
  return (
    <div id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            أبرز العملاء
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              فريق العمل لدينا يتمتع بمجموعة واسعة من المشاريع والخبرات السابقة
              في مجال تطوير البرمجيات. لقد عملنا على مشاريع متنوعة تشمل تطبيقات
              الويب والهواتف المحمولة والبرامج المخصصة.
            </p> */}
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-12 w-full object-contain object-center"
              src={trh}
              alt="trh"
              loading="lazy"
              width={140}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={aljaber}
              loading="lazy"
              alt="aljaber finance"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={crimson}
              loading="lazy"
              alt="crimson"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={athlath}
              loading="lazy"
              alt="athlath"
              width={147}
              height={48}
            />
            {/* <img
              className="max-h-12 w-full col-span-2 object-contain object-center"
              src={zeroOne}
              loading="lazy"
              alt="zero one"
              width={147}
              height={48}
            /> */}
            <img
              className="max-h-12 w-full object-contain object-center"
              src={zeroOne}
              loading="lazy"
              alt="zero one"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-center"
              src={proptech}
              loading="lazy"
              alt="zero one"
              width={147}
              height={48}
            />
            <img
              className="max-h-12 w-full col-span-2 object-contain object-center"
              src={pa}
              loading="lazy"
              alt="zero one"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
