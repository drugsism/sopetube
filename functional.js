// functional Js Test
function repeat(times, value) {
  return [...Array(times).keys()];
  //   return [...Array(times).keys()].map(i => value);
}

function repeatedly(times, fn) {
  return [...Array(times).keys()].map(fn);
}

export const results = {
  1: repeat(3, "foo"),
  2: repeatedly(3, () => "foo"),
  3: repeatedly(3, i => `foo${i}`)
};

repeat(3, "foo");
repeatedly(3, () => "foo");
repeatedly(3, i => `foo${i}`);
