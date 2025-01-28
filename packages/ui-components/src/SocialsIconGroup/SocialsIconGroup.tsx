import React from "react";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { ESocials } from "@tx/util-models";
import type { TSocial } from "@tx/util-models";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@tx/util-helpers";

interface Props {
  className?: string;
  isCircle?: boolean;
  isSquared?: boolean;
  links: TSocial[];
  color?: "primary" | "primary-highlight";
  handleClick?: (link: TSocial) => void;
}
const iconsMap = {
  [ESocials.TWITTER]: faTwitter,
  [ESocials.INSTAGRAM]: faInstagram,
  [ESocials.LINKED_IN]: faLinkedin,
  [ESocials.FACEBOOK]: faFacebook,
  [ESocials.YOUTUBE]: faYoutube,
  [ESocials.TIKTOK]: faTiktok,
};

export function SocialsIconGroup({ links, isSquared, className }: Props) {
  return (
    <>
      {links.map(({ name, url }, index) => {
        if (!url) return null;
        return (
          <a
            key={index}
            href={url}
            target={"_blank"}
            className={cn(
              " hover:text-primary-200 focus:outline-primary-50 relative cursor-pointer text-xl text-white transition-colors focus:outline-offset-2",
              isSquared &&
                "bg-primary hover:bg-primary-highlight h-10 w-10 items-center justify-center rounded-lg text-center text-base hover:text-white ",
              className,
            )}
          >
            <FontAwesomeIcon
              className={cn(isSquared && "center-absolute absolute")}
              icon={iconsMap[name]}
            />
          </a>
        );
      })}
    </>
  );
}

export default SocialsIconGroup;
