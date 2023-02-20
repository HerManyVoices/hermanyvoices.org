import { useState, useRef } from 'react'

const ImageSlider = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5)
  const imageContainer = useRef(undefined)

  const slide = (xPosition) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect()
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0
      } else if (xPosition > containerBoundingRect.right) {
        return 1
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        )
      }
    })
  }

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX)
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleMouseMove = (event) => {
    slide(event.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = undefined
    window.onmouseup = undefined
  }

  return (
    <div className="m-2 rounded">
      <div
        ref={imageContainer}
        className="group relative mx-auto w-full max-w-xl2 select-none overflow-hidden rounded bg-gradient-to-r from-white via-black"
      >
        <img
          src="https://res.cloudinary.com/hmvf/image/upload/q_auto/v1647379636/Row_4_Why_we_Succeed_2_djuco2.jpg"
          alt=""
          className="pointer-events-none shadow translate-x-20 md:translate-x-24"
        />
        <img
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src="https://res.cloudinary.com/hmvf/image/upload/q_auto/v1649962520/Row_4_Why_we_succeed_1_yy1lwb.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 shadow md:-translate-y-12"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0"
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 -ml-px w-0.5 bg-white"></div>
            <div
              style={{ touchAction: 'none' }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="absolute top-1/2 -ml-6 -mt-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 rotate-90 transform text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
