import { EtxProduct, type TSocial } from "@tx/util-models";
import SocialsIconGroup from "../SocialsIconGroup/SocialsIconGroup";
import { Link } from "react-router-dom";
import { cn } from "@tx/util-helpers";
import { APP_CONFIG } from "@tx/configs";

export type TFooterItem = {
  title: string;
  links: {
    label: string;
    link: string;
  }[];
};

interface IProps {
  links: {
    firstRow: TFooterItem[];
    secondRow: TFooterItem[];
  };
  socials: TSocial[];
  paymentsImages?: {
    url: string;
    link: string;
    className?: string;
  }[];
}

export function Footer({ links, socials, paymentsImages }: IProps) {
  return (
    <div className="bg-primary py-14 text-white md:text-lg">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="from-primary-950 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr to-[#9089fc] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container mx-auto flex flex-col-reverse justify-between gap-16 px-4 md:flex-row md:px-2">
        {/* FIRST COLUMN */}
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            {links.firstRow.map((item, index) => (
              <FooterItem key={index} title={item.title} links={item.links} />
            ))}
          </div>
          <div className="flex gap-10">
            {links.secondRow.map((item, index) => (
              <FooterItem key={index} title={item.title} links={item.links} />
            ))}
          </div>
        </div>
        {/* SECOND COLUMN ==> LOGO AND SOCIALS */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <img
              className={cn(
                "mx-auto w-1/2 max-w-xs",
                APP_CONFIG.CHANNEL === EtxProduct.SUKUK && "w-20",
              )}
              src={"/images/WhiteLogo.png"}
            />
            {/* TODO: REFACTOR TO SLOGAN PROP */}
            {/* TEMP */}
          </div>
          <div className="my-4 flex gap-10">
            <SocialsIconGroup links={socials} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface IFooterItemProps {
  title: string;
  links: {
    label: string;
    link: string;
  }[];
}

function FooterItem({ title, links }: IFooterItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>{title}</div>
      {links.map(({ label, link }, index) => {
        return (
          <Link
            key={index}
            to={link}
            className="text-primary-100 hover:text-primary-50 w-fit cursor-pointer font-normal transition-colors"
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default Footer;
