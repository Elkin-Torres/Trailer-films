import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user/UserContext";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import noAvailabe from "../../public/img/no-available.png";

const PrintMovies = () => {
  const [showArrows, SetShowArrows] = useState();

  const userContext = useContext(UserContext);
  const arrows = document.querySelector(".movie-cont__arrows");

  //Move forward or backward in movies that are being shown
  const positionPages = (numb) => {
    const pages = userContext.numberPages[0];
    let actualPage = userContext.actualPage;

    if (numb) {
      actualPage < pages
        ? userContext.callMovies(userContext.requestMovie, actualPage + 1)
        : userContext.callMovies(userContext.requestMovie, actualPage);
    } else {
      actualPage > 1
        ? userContext.callMovies(userContext.requestMovie, actualPage - 1)
        : userContext.callMovies(userContext.requestMovie, actualPage);
    }

    window.scrollTo({
      behavior: "smooth",
      top: 850,
    });
  };

  //sets the vertical location information of the page
  window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop || window.scrollY;
    SetShowArrows(scroll);
  });

  //show or hide arrows, depending on the vertical location of the page
  useEffect(() => {
    if (arrows) {
      showArrows > 900
        ? arrows.classList.remove("hidden")
        : arrows.classList.add("hidden");
    }
  }, [showArrows]);

  return (
    <div className="movie-cont">
      {userContext.movies.length ? (
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {userContext.movies.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="movie-cont__bgimg"
              >
                <div className="movie-cont__bginfo">
                  <picture>
                    <img
                      src={
                        movie.poster_path
                          ? `${userContext.img + movie.poster_path}`
                          : `${noAvailabe}`
                      }
                    />
                  </picture>
                  <div className="movie-cont__bgdata">
                    <button
                      className="movie-cont__btnTrailer"
                      onClick={() => userContext.callTrailer(movie.id)}
                    >
                      Play trailer
                    </button>
                    <h2> {movie.title} </h2>
                    <div> {movie.overview} </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="movie-cont__numeration-one">
            <p>
              {userContext.actualPage} / {userContext.numberPages[0]}
            </p>
          </div>
          <div className="movie-cont__arrows hidden">
            <button
              className="movie-cont__arrowLeft material-symbols-outlined"
              onClick={() => positionPages()}
            >
              arrow_back_ios
            </button>
            <button
              className="movie-cont__arrowRight material-symbols-outlined"
              onClick={() => positionPages(1)}
            >
              arrow_forward_ios
            </button>
          </div>
        </div>
      ) : (
        <div className="movie-cont__error">
          <h1>{userContext.error}</h1>
        </div>
      )}
      <div className="movie-cont__list">
        {userContext.movies.map((movie) => (
          <div key={movie.id} className="movie-cont__print">
            <picture>
              <img
                src={
                  movie.poster_path
                    ? `${userContext.img + movie.poster_path}`
                    : `${noAvailabe}`
                }
              />
            </picture>
            <div className="movie-cont__options">
              <button
                className="movie-cont__data"
                onClick={() => userContext.dataSheet(movie.id)}
              >
                Data sheet
              </button>
              <button
                className="movie-cont__trailer"
                onClick={() => userContext.callTrailer(movie.id)}
              >
                Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="movie-cont__numeration-two">
        <p>
          {userContext.actualPage} / {userContext.numberPages[0]}
        </p>
      </div>
    </div>
  );
};

export default PrintMovies;
