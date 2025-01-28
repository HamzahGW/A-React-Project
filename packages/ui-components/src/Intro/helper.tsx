function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}
function getProgress(start: number, end: number, current: number) {
  let rslt = (current - start) / (end - start);
  rslt = rslt < 0 ? 0 : rslt;
  return rslt;
}

export function loadAssets(assets: string[] = [], func: Function) {
  let loadedAssets = 0;
  let total = assets.length;
  function loadAsset(src: string) {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      loadedAssets++;
      if (loadedAssets == total) {
        func();
      }
    };
  }
  for (let i in assets) {
    loadAsset(assets[i]);
  }
}

export function timeLine(duration: number) {
  return {
    beginTimeSetted: false,
    beginTime: 0,
    duration: duration,
    loop: false,
    currentTime: 0,
    paused: true,
    done: false,
    play: function () {
      this.paused = false;
    },
    animate: function (time: number) {
      if (this.paused) return;
      if (!this.beginTimeSetted) {
        this.beginTimeSetted = true;
        this.beginTime = time;
      }
      this.currentTime = time - this.beginTime;
      if (!this.loop && this.currentTime >= duration) {
        this.currentTime = duration;
        this.done = true;
      } else if (this.loop && this.currentTime >= duration) {
        this.currentTime = this.currentTime % duration;
      }
    },
  };
}
export const easings = {
  easeInOutExpo: (x: number) => {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5
      ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
  },
};
export function keyrframe(
  start: number,
  end: number,
  from: number,
  to: number,
  time: number,
  loop = false,
  easeingFunc = (x: number) => {
    return x;
  },
) {
  let _time = time;
  if (_time >= to && loop) {
    _time = _time % to;
  } else if (_time >= to) {
    _time = to;
  }
  return lerp(start, end, easeingFunc(getProgress(from, to, _time)));
}
