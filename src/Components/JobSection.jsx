import { FaArrowRightLong } from "react-icons/fa6";

const JobSection = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50">
      <div className="w-[80rem] py-10">
        <div className="flex justify-between">
          {" "}
          <div className="text-left mb-8">
            <p className="text-sm flex gap-2 items-center font-medium text-gray-500 py-10">
              Find a remote job <FaArrowRightLong />
            </p>
            <h1 className="text-3xl font-bold mb-4">
              Explore 40,000+ remote job opportunities
            </h1>
            <p className="text-gray-500">
              Personalized filters make it quick and easy to find the jobs you
              care about.
            </p>
          </div>
          <button className="my-20 py-3 px-6 bg-[#553C9A] text-white font-medium rounded-md">
            Search jobs
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-500"
                  aria-labelledby="a2hxsq6v49wxng1kzsh23162aj6t9cil"
                >
                  <path
                    d="M12 2l10 6.5M12 2L2 8.5M12 2v6.5m10 0v7m0-7l-10 7m10 0L12 22m10-6.5l-10-7M12 22L2 15.5M12 22v-6.5m-10 0v-7m0 7l10-7m-10 0l10 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote developer jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like EquipmentShare, Eurofins,
              and Affinity
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-red-500"
                  aria-labelledby="aib9s2kjkhsia1xit7h5i9pvkhx2ynrh"
                >
                  <path
                    d="M7.556 15.333v2.223M12 10.889v6.667m4.444-11.112v11.112M4.222 2h15.556C21.006 2 22 2.994 22 4.222v15.556A2.222 2.222 0 0119.778 22H4.222A2.222 2.222 0 012 19.778V4.222C2 2.994 2.994 2 4.222 2z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote product jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like Cloudflare, Kardo, and
              Included Health
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-lavender-500"
                  aria-labelledby="a534u7fb3v5uptye1y2900ngv9iorej8"
                >
                  <path
                    d="M16.5 9.4l-9-5.19M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12m9 4V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>

              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote marketing jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like Boulevard, LifeStance
              Health, and Emburse
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-500"
                  aria-labelledby="arzhb4tbfysjqtvqgc861fizis71vsuo"
                >
                  <path
                    d="M16.123 11.307v-3.43h-3.43m6.689-3.259l1.086-1.086m-8.69 0H4.172C2.973 3.532 2 4.504 2 5.705V18.74c0 1.2.972 2.173 2.173 2.173h14.123c1.2 0 2.172-.973 2.172-2.173v-5.432m0-5.432H22m-5.877-4.345V2M2 12.896c8.69 1.952 12.765-3.66 12.765-3.66"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote design jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like Wikimedia Foundation,
              Motive, and Binance
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-primary-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-primary-500"
                  aria-labelledby="abrtt5rk2ckkg06d4bkzvpfr2aq3f62m"
                >
                  <path
                    d="M19.155 15.233v-1.024a7.162 7.162 0 00-5.109-6.86m-9.2 7.884v-1.024a7.162 7.162 0 015.107-6.86m4.094-.302h5.372m-9.466 0H4.582M10.977 5h2.046c.565 0 1.024.458 1.024 1.023V8.07c0 .565-.459 1.023-1.024 1.023h-2.046A1.024 1.024 0 019.953 8.07V6.023c0-.565.459-1.023 1.024-1.023zm6.14 13.314v-2.07c0-.558.453-1.011 1.011-1.011h2.07c.558 0 1.011.453 1.011 1.012v2.07c0 .557-.453 1.01-1.012 1.01h-2.07a1.012 1.012 0 01-1.01-1.011zm-10.233 0v-2.07c0-.558-.454-1.011-1.012-1.011h-2.07c-.558 0-1.011.453-1.011 1.012v2.07c0 .557.453 1.01 1.012 1.01h2.07c.557 0 1.01-.453 1.01-1.011zM22.475 5.78a1.79 1.79 0 11-2.532 2.533 1.79 1.79 0 012.532-2.533zm-18.418 0a1.79 1.79 0 11-2.532 2.533A1.79 1.79 0 014.057 5.78z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote sales jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like Wiz, INFUSE, and Angi
            </p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="flex justify-between pb-8">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full md:h-12 md:w-12 bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-gray-500"
                  aria-labelledby="atsgshvlu3cyrju0pnosne8pkdzb23w5"
                >
                  <path
                    d="M12 2v9.714l-7.071 7.357m0 0c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zM3 7.644l9 4.067"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="flex">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/v5ma5vptclz6n1v19uzyhmscyqc4"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mrd4glbvb4z6gurbd16trnxzrt7z"
                  alt=""
                />
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://cdn-images.himalayas.app/mp4azhk8vk3wr7lv1dawbm0oi33n"
                  alt=""
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold">Remote finance jobs</h2>
            <p className="text-sm text-gray-500">
              Explore remote jobs at companies like Creative Chaos, Bluelight
              Consulting, and more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
