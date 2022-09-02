import Script from 'next/script'
import Layout from '@components/Layout'
import '../public/images/EarthDay-2022-Hero.png'

function EarthDay() {
    return (
        <section className="bg-gray-50">
            <div className='w-full bg-[#663F1B]'>
            <div className="p-6 md:w-3/5 m-auto">
                <Script src="https://fast.wistia.com/embed/medias/wjg7un2k45.jsonp" async></Script><Script src="https://fast.wistia.com/assets/external/E-v1.js" async></Script>
                <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative", }}>
                    <div className="wistia_responsive_wrapper" style={{ height: "100%", left: "0", position: "absolute", top: "0", width: "100%" }}><div className="wistia_embed wistia_async_wjg7un2k45 videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }}>
                        <div className="wistia_swatch" style={{ height: "100%", left: "0", opacity: "0", overflow: "hidden", position: "absolute", top: "0", transition: "opacity 200ms", width: "100%" }}>
                            <img src="https://fast.wistia.com/embed/medias/wjg7un2k45/swatch" style={{ filter: "blur(5px)", height: "100%", "object-fit": "contain", width: "100%" }} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className="container relative mx-auto px-4 md:pt-10 lg:-mb-10">
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
                        Earth Day 2023: A Celebration of Indigenous Wisdom to Face Modern
                        Challenges
                    </h1>
                    <p className="text-lg font-medium text-gray-600 md:text-xl">
                    Imagine a world in balance- abundant food, cohesive communities- a secure future for all beings. That&apos;s the dream we&apos;re working to make real.  Indigenous People are 5% of the world population and steward 80% of the Earth&apos;s resources. Yet their knowledge is left out of larger discussions and decision making regarding climate change action and public policies to preserve natural resources. Celebrating Indigenous Wisdom to Face Modern Challenges, created by the Her Many Voices Foundation (HMVF), addresses this. Founded by Alicia Fall, HMVF has been addressing humanitarian issues through the power of art and community partnerships since 2009.    Located on Očhéthi Šakówiŋ (​​Sioux Nation), Núu-agha-tʉvʉ-pʉ̱ (Ute), Tséstho&apos;e (Cheyenne), hinono&apos;eino&apos; biito&apos;owu&apos; (Arapaho) land, Comanche, and 48+ other tribes sacred land (the Denver/FrontRange area), HMVF partners with Indigenous People and their champions to present wisdom and knowledge critical to the planet&apos;s rejuvenation. We invite artistic expression across disciplines- and that has resulted in everything from traditional medicine to dance to storytelling and more. Through the power of art to inspire action, we will heal our mother earth.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default EarthDay

EarthDay.getLayout = function getLayout(EarthDay) {
    return <Layout>{EarthDay}</Layout>
}
