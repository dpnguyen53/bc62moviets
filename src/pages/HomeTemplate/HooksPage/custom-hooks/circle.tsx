import { useMagicColor } from "./useMagicColor";
import "./style.css";

export default function Circle() {
  const color = useMagicColor();
  return (
    <div>
      <h3>Circle</h3>
      <div className="square cirle" style={{ backgroundColor: color }}></div>
    </div>
  );
}
