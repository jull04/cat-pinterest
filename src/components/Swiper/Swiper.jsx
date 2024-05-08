import "./Swiper.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Preloader from '../Preloader/Preloader';

import 'swiper/css';
import 'swiper/css/navigation';

function Swiperr({catImages, loading}) {
  return (
    <section>
    {loading ? (
      <Preloader/>
    ) : (
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {catImages.map(cat => (
            <SwiperSlide key={cat.id}>
              <div>
                <img src={cat.url} alt={`Котик ${cat.id}`} />
              </div>
            <p>Информация о котике</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <Link to={"/all-cats"} className="button">
            Смотреть всех
          </Link>
        </div>
      </div>
    )}
  </section>
  );
}

export default Swiperr;
