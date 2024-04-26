import { useMagicColor } from "./useMagicColor";
import "./style.css";

export default function Square() {
  const color = useMagicColor();

  return (
    <div>
      <h3>Square</h3>
      <div className="square" style={{ backgroundColor: color }}></div>
    </div>
  );
}
