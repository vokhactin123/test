import React from "react";
import "react-owl-carousel2/lib/OwlCarousel";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel2";
import "./TabFilmShowing.scss";
import ListFilm from "../ListFilm";
import format from "date-format";

function TabFilmShowing(props) {
  let rows = [];
  let { listMovie } = props;
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    dots: false,
    autoplay: false,
    smartSpeed: 500,
    autoplayTimeout: 20000,
  };
  // console.log(listMovie[0]);
  if (listMovie?.length > 0) {
    let datekhoichieu = format(
      "dd/MM/yyyy",
      new Date(listMovie[0]?.ngayKhoiChieu)
    );
  }

  let dem = 0;
  dem++;
  function showPageSlider() {
    if (listMovie?.length > 0) {
      let totalPage = Math.ceil(listMovie.length / 8);
      // console.log(totalPage);
      for (let i = 1; i <= totalPage; i++) {
        rows.push(
          <ListFilm
            key={i + "keyABD" + dem}
            pageItem={i}
            listMovie={listMovie}
            totalPage={totalPage}
          />
        );
      }
      return <OwlCarousel options={options}>{rows}</OwlCarousel>;
    }
  }
  return (
    <div className="tab-pane fade show active" id="Showing" role="tabpanel">
      {showPageSlider()}
    </div>
  );
}

export default TabFilmShowing;
