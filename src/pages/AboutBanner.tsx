import AboutDetail from '../components/AboutDetail';

export default function AboutBanner() {
    return (
        <div className="banner">
          <img
            className="banner-image"
            src="assets/banner.png"
            alt="Descripción de la imagen"
          />
          <div className="banner-text">
           <AboutDetail/>
          </div>
        </div>
      );
}
