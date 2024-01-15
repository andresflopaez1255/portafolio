import AboutDetail from '../components/AboutDetail';
import banner from "../assets/banner.png"

export default function AboutBanner() {
    return (
        <div className="banner">
          <img
            className="banner-image"
            src={banner}
            alt="Descripción de la imagen"
          />
          <div className="banner-text">
           <AboutDetail/>
          </div>
        </div>
      );
}
