import "./Swiper.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

function Swiperr({catImages}) {
  return (
    <section>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {catImages.map(cat => (
          <SwiperSlide key={cat.id}>
            <div >
              <img src={cat.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container">
        <Link to={"/all-cats"} className="button">
          Смотреть всех
        </Link>
      </div>
    </section>
  );
}

export default Swiperr;
