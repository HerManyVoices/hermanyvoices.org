export default function Projects() {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 w-full text-green-600 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 w-full text-green-600 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
        </svg>
      </div>
      <div className="radius-for-skewed bg-green-600 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-wrap items-center justify-center md:justify-between">
            <div className="text-center lg:text-left">
              <span className="font-bold text-green-400">
                Dolor sit amet consectutar
              </span>
              <h2 className="font-heading text-4xl font-bold text-white lg:text-5xl">
                Featured Projects
              </h2>
            </div>
            <a
              className="hidden rounded-l-xl rounded-t-xl bg-white py-2 px-6 font-bold leading-loose transition duration-200 hover:bg-gray-50 md:inline-block"
              href="#"
            >
              View More Projects
            </a>
          </div>
          <div className="-mx-4 mb-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
              <a href="#">
                <img
                  className="mx-auto h-80 w-full rounded object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                ></img>
              </a>
            </div>
            <div className="relative mb-4 w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="relative mx-auto mb-5 h-80 rounded-lg">
                <img
                  className="relative h-full w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80"
                  alt=""
                ></img>
                <div className="absolute inset-0 rounded-lg bg-gray-900 opacity-75"></div>
                <div className="absolute inset-0 flex flex-col items-start p-6">
                  <span className="text-gray-400">2021</span>
                  <p className="mb-auto text-xl font-bold text-white lg:text-2xl">
                    Lorem ipsum dolor sit amet consectutar
                  </p>
                  <a
                    className="inline-block rounded-l-xl rounded-t-xl border-2 border-gray-400 bg-transparent py-2 px-4 font-bold leading-loose text-gray-50 transition duration-200 hover:border-white hover:bg-white hover:text-gray-900"
                    href="#"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
              <a href="#">
                <img
                  className="mx-auto h-80 w-full rounded object-cover"
                  src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=968&amp;q=80"
                  alt=""
                ></img>
              </a>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
              <a href="#">
                <img
                  className="mx-auto h-80 w-full rounded object-cover"
                  src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1127&amp;q=80"
                  alt=""
                ></img>
              </a>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
              <a href="#">
                <img
                  className="mx-auto h-80 w-full rounded object-cover"
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                ></img>
              </a>
            </div>
            <div className="mb-8 w-full px-4 md:w-1/2 lg:w-1/3">
              <a href="#">
                <img
                  className="mx-auto h-80 w-full rounded object-cover"
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
          <div className="text-center">
            <a
              className="inline-block rounded-l-xl rounded-t-xl bg-green-600 py-2 px-6 font-bold leading-loose text-gray-50 transition duration-200 hover:bg-green-700 md:hidden"
              href="#"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 w-full text-green-600 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 w-full text-green-600 md:h-12 lg:h-20"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
        </svg>
      </div>
    </section>
  )
}
