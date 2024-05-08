import "./Swiper.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Preloader from "../Preloader/Preloader";

import "swiper/css";
import "swiper/css/navigation";

function Swiperr({ catImages, loading, catInfo }) {

  const filteredCats = catImages.filter(cat => cat.categories && cat.categories.length > 0);

  return (
    <section>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {filteredCats.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div>
                  <img src={cat.url} alt={`Котик ${cat.id}`} />
                </div>
                {cat.categories && cat.categories.length > 0 && (
                  <p>{cat.categories[0].name}</p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="container">
            <Link to={"/all-cats"} className="button">
              See all cats
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

export default Swiperr;
