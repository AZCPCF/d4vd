import { createPortal } from "react-dom";
import { DotLoader} from "react-spinners";

export default function Loading() {
  return createPortal(
    <div style={{ width: "100%", height: "100vh",display:'flex',justifyContent:'center',alignItems:'center' }}>
      <DotLoader size={120} color="#747bff"/>
    </div>,
    document.getElementById("loading") || document.body
  );
}
