import { render } from "react-dom";
import { Stage, Container, Sprite, Graphics } from "@pixi/react";
import { useState, useEffect, useRef } from "react";
import maskImage from "./img/mask.png";
import filterImage from "./img/filter.png";
import logoImage from "./img/logo.png";
import * as helper from "./helper";

export function Intro() {
  const maskRef = useRef(null);

  const [screen_size, set_screen_size] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [filter_pos, set_filter_pos] = useState(-110);
  const [_scale, set_scale] = useState(2);
  const [_opacity, set_opacity] = useState(1);
  const [logo_o, set_logo_o] = useState(0);
  const [_pointerEvent, set_pointerEvent] = useState(true);
  const [scale_ratio, set_scale_ratio] = useState(1);

  useEffect(() => {
    const duration = 1000;
    const timeLine = helper.timeLine(3000);
    // timeLine.loop = true;

    function loop(time: number) {
      let _scale_ratio = window.innerWidth / 491;
      set_scale_ratio(_scale_ratio > 1 ? 1 : _scale_ratio);
      timeLine.animate(time);
      set_filter_pos(
        helper.keyrframe(
          -110,
          50,
          250,
          duration + 500,
          timeLine.currentTime,
          false,
        ),
      );
      set_scale(
        helper.keyrframe(
          4,
          2,
          0,
          800,
          timeLine.currentTime,
          false,
          helper.easings.easeInOutExpo,
        ),
      );
      if (timeLine.currentTime >= (duration + 800) / 2) {
        set_logo_o(1);
      } else {
        set_logo_o(0);
      }
      if (timeLine.currentTime >= 2000) {
        set_opacity(
          helper.keyrframe(1, 0, 2000, 2500, timeLine.currentTime, false),
        );
        set_pointerEvent(false);
      } else {
        set_opacity(1);
      }
      set_screen_size([window.innerWidth, window.innerHeight]);
      console.log("yee");
      if (!timeLine.done) {
        requestAnimationFrame(loop);
      }
    }
    requestAnimationFrame(loop);
    helper.loadAssets([logoImage, maskImage, filterImage], () => {
      timeLine.play();
    });
  }, []);

  return (
    <div
      className="fixed h-full w-full bg-white"
      style={{
        top: 0,
        left: 0,
        zIndex: 51,
        opacity: _opacity,
        pointerEvents: `${_pointerEvent ? "all" : "none"}`,
      }}
    >
      <Stage
        width={screen_size[0]}
        height={screen_size[1]}
        options={{ backgroundAlpha: 0 }}
      >
        <Container
          mask={maskRef?.current}
          width={100}
          height={100}
          position={[screen_size[0] / 2, screen_size[1] / 2]}
          pivot={[50, 50]}
          scale={_scale * scale_ratio}
        >
          <Graphics
            draw={(g) => {
              g.beginFill("#f1f1f1");
              g.drawRect(0, 0, 100, 100);
              g.endFill();
            }}
          />
          <Sprite
            ref={maskRef}
            image={maskImage}
            anchor={0.5}
            scale={0.35}
            x={50}
            y={50}
          ></Sprite>
          <Sprite
            image={logoImage}
            anchor={0.5}
            scale={0.35}
            x={50}
            y={50}
            alpha={logo_o}
          ></Sprite>
          <Sprite
            image={filterImage}
            anchor={0}
            x={filter_pos}
            y={filter_pos}
          ></Sprite>
        </Container>
      </Stage>
    </div>
  );
}
