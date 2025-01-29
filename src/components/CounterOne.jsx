"use client";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const CounterOne = () => {
  return (
    <section className='counter py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div
            className='col-xl-3 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={200}
          >
            <div className='counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
              <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                <i className='animate__wobble ph ph-users' />
              </span>

              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h2 className='display-four mb-16 text-neutral-700 counter'>
                    {isVisible ? <CountUp end={10} /> : null}K
                  </h2>
                )}
              </VisibilitySensor>
              <span className='text-neutral-500 text-lg'>
                Successfully Trained
              </span>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={400}
          >
            <div className='counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
              <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                <i className='animate__wobble ph ph-video-camera' />
              </span>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h2 className='display-four mb-16 text-neutral-700 counter'>
                    {isVisible ? <CountUp end={22} /> : null}K
                  </h2>
                )}
              </VisibilitySensor>
              <span className='text-neutral-500 text-lg'>
                Courses Completed
              </span>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={600}
          >
            <div className='counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-25 border border-neutral-30'>
              <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-600 text-40 rounded-circle box-shadow-md mb-24'>
                <i className='animate__wobble ph ph-thumbs-up' />
              </span>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h2 className='display-four mb-16 text-neutral-700 counter'>
                    {isVisible ? <CountUp end={45} /> : null}K
                  </h2>
                )}
              </VisibilitySensor>
              <span className='text-neutral-500 text-lg'>
                Satisfaction Rate
              </span>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6 col-xs-6'
            data-aos='fade-up'
            data-aos-duration={800}
          >
            <div className='counter-item animation-item h-100 text-center px-16 py-32 rounded-12 bg-main-two-25 border border-neutral-30'>
              <span className='w-80 h-80 flex-center d-inline-flex bg-white text-main-two-600 text-40 rounded-circle box-shadow-md mb-24'>
                <i className='animate__wobble ph ph-users-three' />
              </span>
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <h2 className='display-four mb-16 text-neutral-700 counter'>
                    {isVisible ? <CountUp end={55} /> : null}K
                  </h2>
                )}
              </VisibilitySensor>
              <span className='text-neutral-500 text-lg'>
                Students Community
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterOne;
