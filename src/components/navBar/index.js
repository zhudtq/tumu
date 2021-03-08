import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/config">配置页</Link>
      <Link to="/result">结果页</Link>
    </div>
  );
}
