import Link from 'next/link'

export default function SupportersCard() {
  return (
    <section className="py-20 bg-gray-50">
      <h3 className="mb-16 font-heading text-2xl text-center">
          Our Supporters
        </h3>
    
    <div className="md:flex md:flex-row justify-center ">
    <div className="m-auto p-4 w-full lg:w-1/2">
      <div className="flex flex-wrap items-start overflow-hidden rounded bg-white shadow shadow-purple-600">
          <img
            className="h-[22rem] w-full object-cover"
            src="https://res.cloudinary.com/hmvf/image/upload/w_1000,h_1000,c_fill,g_face/v1655838303/lauryn-hill_j4jy4p.jpg"
            alt=""
          ></img>
        <div className="flex flex-col p-4 md:px-4 md:pt-2 lg:w-1/2">
          <h4 className="mb-2 text-2xl font-bold">Ms Lauryn Hill</h4>
          <p className="mb-4 text-xs leading-loose text-gray-500">JEFF KRAVITZ VIA GETTY IMAGES</p>
          <Link href="https://mslaurynhill.com/" passHref>
          <a>mslaurynhill.com</a>
          </Link>
        </div>
      </div>
    </div>
    <div className="mb-auto p-4 w-full lg:w-1/2">
      <div className="flex flex-wrap items-start overflow-hidden rounded bg-white shadow shadow-purple-600">
          <img
            className="h-[22rem] w-full object-cover"
            src="https://res.cloudinary.com/hmvf/image/upload/v1655841374/HAZEL-MILLER_vpnihc.jpg"
            alt=""
          ></img>
        <div className="flex flex-col p-4 md:px-4 md:pt-2 lg:h-[7rem] lg:w-1/2">
          <h4 className="mb-2 text-2xl font-bold">Hazel Miller</h4>
          <p className="mb-4 text-xs leading-loose text-gray-500"> </p>

          <Link href="https://www.hazelmiller.biz/" passHref>
          <a>hazelmiller.biz</a>
          </Link>
          {/* <p className="mb-4 text-xs leading-loose text-gray-500"></p> */}
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
