import { Link } from "react-router-dom";
import anbLogo from "@/assets/images/AnbLogo.svg";
import awsLogo from "@/assets/images/aws_logo.png";
import oracle from "@/assets/images/oracle_logo.png";
import elm from "@/assets/images/elm_logo.png";
import firebase from "@/assets/images/firebase_logo.png";
import google from "@/assets/images/google_analytics_logo.png";
import unifonic from "@/assets/images/unifonic_logo.png";
import absher from "@/assets/images/absher_logo.png";
import zoho from "@/assets/images/zoho_logo.png";
import { InfiniteSlider } from "@tx/ui-components";

const images = [
  {
    src: anbLogo,
    alt: "",
  },
  {
    src: awsLogo,
    alt: "",
  },
  {
    src: oracle,
    alt: "",
  },
  {
    src: elm,
    alt: "",
  },
  {
    src: firebase,
    alt: "",
  },
  {
    src: google,
    alt: "",
  },
  {
    src: unifonic,
    alt: "",
  },
  {
    src: absher,
    alt: "",
  },
  {
    src: zoho,
    alt: "",
  },
];

export default function Solutions() {
  return (
    <div
      id="solutions"
      className="from-primary-highlight-900 to-primary-950 bg-gradient-to-r py-24 sm:py-32"
    >
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-[#9089fc] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              نقدم حلولًا سريعة للربط مع
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue.
            </p> */}
            <div className="mt-8 flex items-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Create account
              </a> */}
              <Link
                to={"/contact_us"}
                className="text-lg font-semibold text-white"
              >
                تواصل معنا
                <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
          <div className="py-10">
            <InfiniteSlider images={images} />
          </div>
          {/* <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-10 w-full object-contain object-right sm:max-h-12"
              src={anbLogo}
              alt="anb"
              width={105}
              height={48}
            />
            <img
              className="max-h-10 w-full object-contain object-right sm:max-h-12"
              src={awsLogo}
              alt="aws"
              width={105}
              height={48}
            />
            <img
              className="max-h-20 w-full object-contain object-right"
              src={oracle}
              alt="oracle"
              width={105}
              height={48}
            />
            <img
              className="max-h-16 w-full object-contain object-right"
              src={elm}
              alt="elm"
              width={105}
              height={48}
            />
            <img
              className="max-h-10 w-full object-contain object-right sm:max-h-12"
              src={firebase}
              alt="firebase"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-right sm:max-h-14"
              src={google}
              alt="google analytics"
              width={105}
              height={48}
            />
            <img
              className="max-h-20 w-full object-contain object-right sm:max-h-20"
              src={absher}
              alt="absher"
              width={105}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain object-right sm:max-h-14"
              src={zoho}
              alt="zoho"
              width={105}
              height={48}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
