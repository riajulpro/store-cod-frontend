export const bgImageStyle = {
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

export const renderNewLine = (text: string) => {
  return text.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
};

export const categorySliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 10,
  slidesToScroll: 10,
  initialSlide: 0,
  nextArrow: <span id="next" className="invisible" />,
  prevArrow: <span id="prev" className="invisible" />,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 5,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
