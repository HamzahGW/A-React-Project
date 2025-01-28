import { Footer } from "@tx/lib";
import { useLocation } from "react-router";

export default function GlobalFooter() {
  const { pathname } = useLocation();
  return (
    <div style={{ display: pathname == "/" ? "none" : "" }}>
      <Footer />
    </div>
  );
}
