import React from "react";
import { HexColorPicker } from "react-colorful";
import { useProxy } from "valtio/utils";
import state from "../contexts/State";
import "../App.css";

export default function Picker() {
  const snap = useProxy(state);

  return (
    <div
      style={{ display: snap.current ? "block" : "none" }}
      className="color-picker"
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}
