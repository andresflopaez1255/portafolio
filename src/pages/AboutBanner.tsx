import AboutDetail from "../components/AboutDetail";

import { ToggleProps } from "../interfaces/app.props";
import video1 from "../assets/video.mp4";
export default function AboutBanner({ show }: ToggleProps) {
  return (
    <div className={show ? "banner-show" : "banner"}>
      <video className="banner-image" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>

    
      <div className="banner-text">
        <AboutDetail />
      </div>

      
    </div>
  );
}
