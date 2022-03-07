
export default function Header() {

  return (
    <section>
      <div className="relative w-full">
        <div className="bg-gray-500/60 absolute top-0 left-0 z-10 h-full w-full"></div>
        <div className="absolute z-20 flex h-full w-full flex-col items-center justify-center">
          <h1 className="mx-3 font-heading md:text-2xl text-4xl font-bold lg:text-5xl">
          <span className="text-white">Grassroots Activism,</span>
                <br></br>
                <span className="text-green-400">
                  Driven by <br></br> Indigenous Wisdom,
                </span>
                <br></br>
                <span className="text-white">
                  To Protect All of <br></br> Earth&apos;s Children.
                </span>
          </h1>
        </div>
        <img className="object-cover object-center h-128 sm:h-[590px] w-full" src="https://res.cloudinary.com/hmvf/image/upload/q_auto%2Cf_auto/hero_image_re8hmh" alt=""/>
      </div>
    </section>
  )
}
