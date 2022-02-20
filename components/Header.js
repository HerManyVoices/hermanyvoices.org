import Image from 'next/image'
import heroImage from 'public/images/hero-image.jpeg'
import greenDarkUp from '/public/assets/elements/green-dark-up.svg'
import ImageContainer from 'styles/ImageContainer.module.css'
import wingGreenDown from '/public/assets/elements/wing-green-down.svg'
import bulletsGrayRight from '/public/assets/elements/bullets-gray-right.svg'
import bulletsGrayLeft from '/public/assets/elements/bullets-gray-left.svg'

export default function Header() {
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
                  src={heroImage}
                  alt=""
                />
                <div className={ImageContainer.imagecontainer1}>
                  <Image src={greenDarkUp} alt="" />
                </div>

                <div className={ImageContainer.imagecontainer2}>
                  <Image src={wingGreenDown} alt="" />
                </div>
                <div className={ImageContainer.imagecontainer3}>
                  <Image src={bulletsGrayRight} alt="" />
                </div>
                <div className={ImageContainer.imagecontainer4}>
                  <Image src={bulletsGrayLeft} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
