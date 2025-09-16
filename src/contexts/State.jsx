import { proxy } from "valtio";

const state = proxy({
  current: null,
  items: {
    wingToeBodyMaterial: "#000000",
    wingToeMaterial: "#000000",
    wingToeSideParts: "#000000",
    laces: "#000000",
    mesh: "#000000",
    caps: "#000000",
    inner: "#000000",
    sole: "#000000",
    stripes: "#000000",
    band: "#000000",
    patch: "#000000",
  },
});

export default state;
