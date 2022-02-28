import Image from 'next/image'
import { buildUrl } from 'cloudinary-build-url'
import GreenDarkUp from 'public/assets/elements/GreenDarkUp.js'
import ImageContainer from 'styles/ImageContainer.module.css'
import WingGreenDown from 'public/assets/elements/WingGreenDown.js'
import BulletsGrayRight from 'public/assets/elements/BulletsGrayRight.js'
import BulletsGrayLeft from 'public/assets/elements/BulletsGrayLeft.js'

export default function Header() {
  const url = buildUrl('hero-image_cwpmq8', {
    cloud: {
      cloudName: 'hmvf'
    }
  })

  return (
    <section className="skewed-bottom-right">
      <div className="radius-for-skewed bg-gray-50 pt-12 pb-20 lg:pt-20">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-12 flex w-full items-center px-4 md:mb-20 lg:mb-0 lg:w-1/2">
              <div className="w-full text-center">
                <div className="mx-auto max-w-prose lg:mx-0">
                  <h1 className="mb-3 font-heading text-4xl font-bold lg:text-5xl">
                    <span>Grassroots Activism,</span>
                    <br></br>
                    <span className="text-green-600">
                      Driven by <br></br> Indigenous Wisdom,
                    </span>
                    <br></br>
                    <span>
                      To Protect All of <br></br> Earth&apos;s Children.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center px-4 lg:w-1/2">
              <div className={ImageContainer.herocontainer}>
                <Image
                  className={ImageContainer.heroimage}
                  src={url}
                  alt=""
                  width="1000"
                  height="1000"
                  unoptimized={true}
                />
                <div className={ImageContainer.imagecontainer1}>
                  <GreenDarkUp className="text-2xl" alt="" />
                </div>

                <div className={ImageContainer.imagecontainer2}>
                  <WingGreenDown className="text-2xl" alt="" />
                </div>

                <div className={ImageContainer.imagecontainer3}>
                  <BulletsGrayRight className="text-2xl" alt="" />
                </div>

                <div className={ImageContainer.imagecontainer4}>
                <BulletsGrayLeft className="text-2xl" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  )
}



