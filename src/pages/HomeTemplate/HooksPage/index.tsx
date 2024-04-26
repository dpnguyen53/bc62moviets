import { useState } from "react";

export default function HooksPage() {
  const [number, setNumber] = useState<number>(0);

  return (
    <div>
      <h3>HooksPage</h3>
      <h4>Number: {number}</h4>
      <button className="btn btn-success">Increment Number</button>
    </div>
  );
}
