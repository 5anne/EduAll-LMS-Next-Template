"use client";
import Slider from "react-slick";

const BrandOne = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 900,
    dots: false,
    pauseOnHover: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1399,
        settings: { slidesToShow: 6, arrows: false },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 5, arrows: false },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 4, arrows: false },
      },
      {
        breakpoint: 424,
        settings: { slidesToShow: 2, arrows: false },
      },
      {
        breakpoint: 359,
        settings: { slidesToShow: 2, arrows: false },
      },
    ],
  };
  return (
    <div
      className='brand wow fadeInUpBig'
      data-wow-duration='1s'
      data-wow-delay='.5s'
    >
      <div className='container container--lg'>
        <div className='brand-box py-80 px-16 bg-main-25 border border-neutral-30 rounded-16'>
          <h5 className='mb-40 text-center text-neutral-500'>
            TRUSTED BY OVER 17,300 GREAT TEAMS
          </h5>
          <div className='container'>
            <Slider {...settings} className='brand-slider'>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/TD1v98Gg/college-logo-design-template-vector-illustration-university-college-logo-badges-emblems-signs-stock.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/PZLcRCYz/college-logo-design-template-vector-illustration-university-college-logo-badges-emblems-signs-stock.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/qMpHTQdW/education-logo-university-logo-vector-1029473-591904.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/53jk8TQ/university-education-logo-design-vector-template-1029473-591381.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/TxxsRdPR/education-logo-university-logo-vector-1029473-591920.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/4nNqBMd9/school-crest-logo-template-1029469-89230.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/PZXSCZqp/university-education-logo-design-vector-template-1029473-591388.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/qMpHTQdW/education-logo-university-logo-vector-1029473-591904.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/TD1v98Gg/college-logo-design-template-vector-illustration-university-college-logo-badges-emblems-signs-stock.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/PZLcRCYz/college-logo-design-template-vector-illustration-university-college-logo-badges-emblems-signs-stock.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/qMpHTQdW/education-logo-university-logo-vector-1029473-591904.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/53jk8TQ/university-education-logo-design-vector-template-1029473-591381.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/TxxsRdPR/education-logo-university-logo-vector-1029473-591920.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/4nNqBMd9/school-crest-logo-template-1029469-89230.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/PZXSCZqp/university-education-logo-design-vector-template-1029473-591388.jpg' alt='' />
              </div>
              <div className='brand-slider__item px-24'>
                <img src='https://i.ibb.co.com/qMpHTQdW/education-logo-university-logo-vector-1029473-591904.jpg' alt='' />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;
