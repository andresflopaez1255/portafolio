import AboutDetail from '../components/AboutDetail';
import banner from "../assets/banner.png"
import { ToggleProps } from '../interfaces/app.props';

export default function AboutBanner({ show }: ToggleProps) {
    return (
        <div className={show ? "banner-show": "banner"}>
          <img
            className="banner-image"
            src={banner}
            alt="Descripción de la imagen"
          />
          <div className="banner-text">
           <AboutDetail show={show} />
          </div>
        </div>
      );
}
