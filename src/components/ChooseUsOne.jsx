"use client";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const ChooseUsOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className='choose-us pt-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape one animation-scalation'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-6'>
            <div className='choose-us__content'>
              <div className='mb-40'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='w-8 h-8 bg-main-600 rounded-circle' />
                  <h5 className='text-main-600 mb-0'>Why Choose Us</h5>
                </div>
                <h2 className='mb-24  wow bounceIn'>
                  Our Commitment to Excellence, Learn, Grow &amp; Success.
                </h2>
                <p className='text-neutral-500 text-line-2  wow bounceInUp'>
                  We are passionate about transforming lives through education.
                  Founded with a vision to make learning accessible to all, we
                  believe in the power of knowledge to unlock opportunities and
                  shape the future.
                </p>
              </div>
              <ul>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={200}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    9/10 Average Satisfaction Rate
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    96% Completitation Rate
                  </span>
                </li>
                <li
                  className='flex-align gap-12 mb-16'
                  data-aos='fade-up-left'
                  data-aos-duration={500}
                >
                  <span className='flex-shrink-0 text-xl text-main-600 d-flex'>
                    <i className='ph-bold ph-checks' />
                  </span>
                  <span className='flex-grow-1 text-neutral-500'>
                    Friendly Environment &amp; Expert Teacher
                  </span>
                </li>
              </ul>
              <div className='pt-24 border-top border-neutral-50 mt-28 border-dashed border-0'>
                <Link
                  href='/about'
                  className='btn btn-main rounded-pill flex-align d-inline-flex gap-8'
                >
                  Read More
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='choose-us__thumbs position-relative'>
              <div className='offer-message style-two px-24 py-12 rounded-12 bg-white fw-medium flex-align d-inline-flex gap-16 box-shadow-lg animation-upDown'>
                <span className='flex-shrink-0 w-48 h-48 bg-dark-yellow text-white text-2xl flex-center rounded-circle'>
                  <img src='assets/images/icons/stars.png' alt='' />
                </span>
                <div>
                  <span className='text-lg text-neutral-700 d-block'>
                    4.6
                    <span className='text-neutral-100'>(2.4k)</span>
                  </span>
                  <span className='text-neutral-500'>AVG Reviews</span>
                </div>
              </div>
              <div
                className='banner-box one style-two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg d-inline-block'
                data-aos='fade-left'
              >
                <span className='text-main-600'>36k+</span> Enrolled Students
                <div className='enrolled-students mt-12'>
                  <img
                    src='https://i.ibb.co.com/6cKNzXmB/young-asian-student-with-notebooks-standing-orange-sweatshirt-looking-camera-posing-blue-1258-168657.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                  <img
                    src='https://i.ibb.co.com/k6v9kjQ8/portrait-young-handsome-smiling-businessman-holding-laptop-hands-typing-browsing-web-pages-isolated.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                  <img
                    src='https://i.ibb.co.com/ynKR3FHV/good-looking-caucasian-female-with-blonde-straight-hair-wearing-glasses-denim-shirt-smiles-happily-h.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                  <img
                    src='https://i.ibb.co.com/v4JQ1GDn/portrait-charming-cheerful-guy-enjoying-free-time-staring-isolated-grey-color-wall-274222-19705.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                  <img
                    src='https://i.ibb.co.com/Y6BTF0H/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair-285396-896.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                  <img
                    src='https://i.ibb.co.com/zgdmr4B/positive-male-youngster-with-curly-hair-176532-8174.jpg'
                    alt=''
                    className='w-48 h-48 rounded-circle object-fit-cover transition-2'
                  />
                </div>
              </div>
              <div className='text-end' data-aos='zoom-out'>
                <div className='d-sm-inline-block d-block position-relative'>
                  <img
                    src='https://i.ibb.co.com/twx6gj3M/target-achievement-teamwork-business-concept-107791-16.jpg'
                    alt=''
                    className='choose-us__img rounded-12'
                    data-tilt=''
                    data-tilt-max={16}
                    data-tilt-speed={500}
                    data-tilt-perspective={5000}
                    data-tilt-full-page-listening=''
                  />
                  <span className='shadow-main-two w-80 h-80 flex-center bg-main-two-600 rounded-circle position-absolute inset-block-start-0 inset-inline-start-0 mt-40 ms--40 animation-upDown'>
                    <img src='assets/images/icons/book.png' alt='' />
                  </span>
                </div>
              </div>
              <div className='animation-video' data-aos='zoom-in'>
                <img
                  src='https://i.ibb.co.com/rfzpFgwb/graduation-card-male-hands-holding-card-with-graduate-cutout-601748-38929.jpg'
                  alt=''
                  className='border border-white rounded-circle border-3'
                  data-tilt=''
                  width={280}
                  height={300}
                />
                <span
                  onClick={() => setIsOpen(true)}
                  className='play-button w-48 h-48 flex-center bg-main-600 text-white rounded-circle text-xl position-absolute top-50 start-50 translate-middle'
                >
                  <i className='ph-fill ph-play' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </section>
  );
};

export default ChooseUsOne;
