/** @format */

import FooterComponent from "../UtilityComponents/FooterComponent";
import HeadarComponent from "../UtilityComponents/HeadarComponent";


const HomePageComponent = () => {
  return (
    <div className=''>
      <HeadarComponent />
      <section className='relative bg-black text-white'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('https://betterstack.com/assets/v2/homepage/hero-bg-3a1adb9be5d3a524fe6108c9346d27e84707509449529c0e3070909f56bef100.jpg')`,
          }}></div>
        <div className='relative mx-auto max-w-screen-xl px- py-32 lg:flex lg:h-screen lg:items-center'>
          <div className='mx-auto max-w-3xl text-center'>
            <h1 className='text-9xl radar-white-text-color font-bold'>
              Prevent
              <br />
              <span className='font-light'>Downtime</span>
            </h1>

            <p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed'>
              Radar lets you track every single api hit <br />
              and resolve issue before clients esclate
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <a
                className='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
                href='/signup'>
                Try Now
              </a>

              <a
                className='block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
                href='/docs'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='radar-dark-slate-bg'>
          <div className='sm:px-6 sm:py-32 lg:px-8'>
            <div className='relative isolate overflow-hidden radar-dark-slate-bg  px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
              <svg
                viewBox='0 0 1024 1024'
                aria-hidden='true'
                className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'>
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                  fillOpacity='0.7'
                />
                <defs>
                  <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                    <stop stopColor='#7775D6' />
                    <stop offset={1} stopColor='#6D7580' />
                  </radialGradient>
                </defs>
              </svg>
              <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  Host Enterprise ready APIs
                  <br />
                  with confidence
                </h2>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla.
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                  <a
                    href='/signup'
                    className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                    Get started
                  </a>
                  <a
                    href='/docs'
                    className='text-sm font-semibold leading-6 text-white'>
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
              <div className='relative mt-16 h-80 lg:mt-8'>
                <img
                  alt='App screenshot'
                  src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                  width={1824}
                  height={1080}
                  className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='mx-auto radar-dark-slate-bg px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white'>
            Trusted by Developers
          </h2>

          <p className='mt-4 text-gray-500 sm:text-xl dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <dl className='mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-gray-900'>
          <div className='flex flex-col px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500 dark:text-gray-400'>
              Total APIs
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              48k
            </dd>
          </div>

          <div className='flex flex-col px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500 dark:text-gray-400'>
              Total Projects
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              240
            </dd>
          </div>

          <div className='flex flex-col px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500 dark:text-gray-400'>
              Incidents Reported
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              129
            </dd>
          </div>

          <div className='flex flex-col px-4 py-8 text-center'>
            <dt className='order-last text-lg font-medium text-gray-500 dark:text-gray-400'>
              Downloads
            </dt>

            <dd className='text-4xl font-extrabold text-blue-600 md:text-5xl'>
              60k
            </dd>
          </div>
        </dl>
      </div>
      <FooterComponent />
    </div>
  );
};

export default HomePageComponent;
