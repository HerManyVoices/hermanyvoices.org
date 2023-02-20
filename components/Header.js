export default function Header() {
  return (
    <section>
      <div className="relative w-full">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-b from-gray-600 to-transparent"></div>
        <div className="absolute z-10 flex h-full w-full min-w-[340px] flex-col items-center justify-start pt-4">
          <h1 className="mx-3 font-heading text-4xl leading-snug md:text-5xl lg:text-6xl lg:leading-tight">
            <span className="text-white">Grassroots Activism,</span>
            <br></br>
            <span className="text-green-400">Driven By </span>
            <span className="text-green-400">Indigenous Wisdom,</span>
            <br></br>
            <span className="text-white">To Protect All Of </span>
            <span className="text-white">Earth&apos;s Children.</span>
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="right-10 absolute bottom-0 mb-10 mr-4 mt-4 h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <img
          className="h-160 w-full object-cover object-center sm:h-[620px]"
          src="https://res.cloudinary.com/hmvf/image/upload/q_auto/v1649961674/Row_1_Image_TCC_school_sccdq3.jpg" alt=""
        />
      </div>
    </section>
  )
}
