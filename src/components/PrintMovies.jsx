import { useContext } from "react";
import UserContext from "../context/user/UserContext";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PrintMovies = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="movie-cont">
      {userContext.movies.length ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {userContext.movies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="movie-cont__bgimg"
              style={{
                backgroundImage: `url("${userContext.img}${movie.backdrop_path}")`,
              }}
            >
              <div className="movie-cont__bginfo">
                <button
                  className="movie-cont__btnTrailer"
                  onClick={() => userContext.callTrailer(movie.id)}
                >
                  Play trailer
                </button>
                <h2> {movie.title} </h2>
                <div> {movie.overview} </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="movie-cont__error">
          <h1>{userContext.error}</h1>
        </div>
      )}
      <div className="movie-cont__list">
        {userContext.movies.map((movie) => (
          <div key={movie.id} className="movie-cont__print">
            <picture>
              <img src={`${userContext.img + movie.poster_path}`} />
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
    </div>
  );
};

export default PrintMovies;
