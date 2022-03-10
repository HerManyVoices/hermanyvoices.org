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
    <div className="px-4">
      <div
        ref={imageContainer}
        className="group relative mx-auto w-full max-w-lg select-none"
      >
        <img
          src="https://res.cloudinary.com/hmvf/image/upload/q_auto%2Cf_auto/hero_image_re8hmh"
          alt=""
          className="pointer-events-none rounded shadow"
        />
        <img
          style={{
            filter: 'grayscale(100%)',
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src="https://res.cloudinary.com/hmvf/image/upload/q_auto%2Cf_auto/hero_image_re8hmh"
          alt=""
          className="grayscale-100 pointer-events-none absolute inset-0 rounded shadow"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0 group-hover:opacity-100 sm:opacity-0"
        >
          <div className="relative h-full opacity-50 hover:opacity-100">
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
