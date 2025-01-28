import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { cn } from "@tx/util-helpers";
import Text from "../Text/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./ExpandableList.css";
import { TOptions } from "@tx/util-models";
import regexifyString from "regexify-string";
import HyperLink from "../HyperLink/HyperLink";

interface Props {
  list: TOptions[];
}

let regexpression = /\[([^\[]+)\](\(.*\))/gm;

export const ExpandableList = ({ list }: Props) => (
  <Accordion.Root
    className="ring-primary rounded-lg ring-1"
    type="single"
    defaultValue={list[0].label}
    collapsible
  >
    {list.map((item, index) => (
      <Accordion.AccordionItem
        className={cn(
          "ring-primary mt-px overflow-hidden first:mt-0  first:rounded-t-lg last:rounded-b-lg focus-within:relative focus-within:z-10 focus-within:ring-1",
        )}
        key={index}
        value={item.label}
      >
        <Accordion.AccordionHeader className="flex">
          <Accordion.AccordionTrigger
            className={cn(
              "text-primary shadow-primary/25 hover:bg-primary-50 group flex flex-1 cursor-pointer items-center justify-between bg-white px-5 py-4 text-start leading-none shadow-[0_1px_0] outline-none",
            )}
          >
            <Text color="primary" size="xl">
              {item.label}
            </Text>
            <FontAwesomeIcon
              icon={faChevronUp}
              className="text-primary ease-[cubic-bezier(0.87,_0,_0.13,_1)] block transition-transform duration-300 group-data-[state=open]:rotate-180 md:text-lg"
            />
          </Accordion.AccordionTrigger>
        </Accordion.AccordionHeader>
        <Accordion.AccordionContent
          className={cn("accordionAnimate overflow-hidden ")}
        >
          <Text color="Accent" className="px-5 py-5" size="lg">
            {regexifyString({
              pattern: regexpression,
              decorator: (match, index, result) => {
                if (!result) return <>{match}</>;
                const link = result?.[2]?.substring(1, result?.[2]?.length - 1);
                if (!link) return <>{match}</>;
                return (
                  <HyperLink
                    target={link?.[0] === "/" ? "_self" : "_blank"}
                    label={result?.[1]}
                    type="link"
                    link={link}
                  />
                );
              },
              input: item.value,
            })}
          </Text>
        </Accordion.AccordionContent>
      </Accordion.AccordionItem>
    ))}
  </Accordion.Root>
);

export default ExpandableList;
