import React from "react";
import * as RUMenuBar from "@radix-ui/react-menubar";
// import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';

export const MenuBar = () => {
  return (
    <RUMenuBar.Root className="">
      <RUMenuBar.Menu>
        <RUMenuBar.Trigger className=""></RUMenuBar.Trigger>
        {/* <RUMenuBar.Portal> */}
        <RUMenuBar.Content
          // className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
          className="min-w-[220px] rounded-md bg-white p-[5px] will-change-[transform,opacity] [animation-duration:_400ms] [animation-timing-function:_cubic-bezier(0.16,_1,_0.3,_1)]"
          align="start"
          sideOffset={5}
          alignOffset={-3}
        >
          <RUMenuBar.Item className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
            New Window{" "}
            <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
              ⌘ N
            </div>
          </RUMenuBar.Item>
          <RUMenuBar.Item
            className="text-violet11 data-[state=open]:bg-violet4 data-[state=open]:text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[highlighted]:data-[state=open]:text-violet1 data-[disabled]:text-mauve8 relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br"
            disabled
          >
            New Incognito Window
          </RUMenuBar.Item>
          <RUMenuBar.Separator className="bg-violet6 m-[5px] h-[1px]" />
          <RUMenuBar.Item className="text-violet11 data-[highlighted]:from-violet9 data-[highlighted]:to-violet10 data-[highlighted]:text-violet1 data-[disabled]:text-mauve8 group relative flex h-[25px] select-none items-center rounded px-[10px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-gradient-to-br">
            Print…{" "}
            <div className="text-mauve9 group-data-[disabled]:text-mauve8 ml-auto pl-5 group-data-[highlighted]:text-white">
              ⌘ P
            </div>
          </RUMenuBar.Item>
        </RUMenuBar.Content>
        {/* </RUMenuBar.Portal> */}
      </RUMenuBar.Menu>
    </RUMenuBar.Root>
  );
};

export default MenuBar;
