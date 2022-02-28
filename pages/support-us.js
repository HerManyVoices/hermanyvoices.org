import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import Image from 'next/image'

function SupportUs() {
    return (
    <div>
      <Navigation />
      <section>
        <h1>Support Us</h1>
        <div className="rounded shadow bg-cover w-full"> 
                <Image src="https://res.cloudinary.com/hmvf/image/upload/v1645671663/hero-image_cwpmq8.jpg" alt=""
                  width="1000"
                  height="1000"
                  unoptimized={true} />
        </div>
      </section>
      <Footer />
    </div>)
  }
  
  export default SupportUs