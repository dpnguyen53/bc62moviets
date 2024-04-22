import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
}
