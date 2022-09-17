import Script from 'next/script'
import Layout from '@components/Layout'
import '../public/images/EarthDay-2022-Hero.png'

function Ukraine() {
    return (
        <section className="bg-gray-50">
            <div className='w-full bg-gradient-to-b from-[#0057B8] to-[#FFD700]'>
            <div className="p-6 md:w-3/5 m-auto">
                <Script src="https://fast.wistia.com/embed/medias/m4v2iuosuh.jsonp" async></Script><Script src="https://fast.wistia.com/assets/external/E-v1.js" async></Script>
                <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative", }}>
                    <div className="wistia_responsive_wrapper" style={{ height: "100%", left: "0", position: "absolute", top: "0", width: "100%" }}><div className="wistia_embed wistia_async_m4v2iuosuh videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }}>
                        <div className="wistia_swatch" style={{ height: "100%", left: "0", opacity: "0", overflow: "hidden", position: "absolute", top: "0", transition: "opacity 200ms", width: "100%" }}>
                            <img src="https://fast.wistia.com/embed/medias/m4v2iuosuh/swatch" style={{ filter: "blur(5px)", height: "100%", "object-fit": "contain", width: "100%" }} alt="" aria-hidden="true" />
                        </div>
                    </div>
                    </div>
                    </div>
                    <p className='text-right text-sm'>Video by <a className='underline'href="https://www.staccatoproductions.com/">Staccato Productions</a></p>
                </div>
            </div>
            <div className="container relative mx-auto px-4 md:pt-10 lg:-mb-16 -mb-16 bg-gray-50">
                <div className="mb-16 text-center">
                    <h1 className="my-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
                    Ukraine needs our help now
                    </h1>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    The amount of destruction and loss of life Putin has decided to cause in Ukraine is undeniably amongst the worst European atrocities since World War II. Families have been ripped apart since February of 2022. The ripple effect will cause hunger and hardship worldwide.
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    <span className='text-green-600'>We need your help to fight back by raising as much money as we can.</span> Money is desperately needed to assist all of Ukraine in rebuilding their war-torn country and to provide food and shelter for so many innocent people.  
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    Together, we can provide hope and encouragement to the millions of people of Ukraine. You can make a donation for our sisters and brothers in Ukraine, and share this video with everyone you know to help us raise awareness.
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    Every single dollar donated and share of this powerful song helps us empower our Ukrainian sisters and brothers. We thank you for your willingness to get involved and help us spread this message.
                    </p>
                    <p className="my-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
                    How we&apos;re distributing the money raised
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    We&apos;re evenly distributing 100% of all money raised directly to Ukrainian farmers and hemp farmers. Make a secure, tax-free donation here.
                    </p>

                    <div className='m-auto h-auto pl-16 pt-6'>
                        <Script src="https://donorbox.org/widget.js" paypalExpress="true"></Script><iframe src="https://donorbox.org/embed/hmvf-ukraine" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameBorder="0" scrolling="no" height="900px" width="100%" className="max-w-[500px] min-w-[250px] m-auto"></iframe> 
                    </div>

                    <p className="my-4 text-3xl leading-tight tracking-tighter text-green-600 md:text-5xl md:font-thin">
                    The story behind the video
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    In March of this year, during the awards dinner of an international hemp conference, <a className='text-green-600 underline' href="https://www.nocohempexpo.com/2022-nocohempexpo/">NOCO Hemp Expo</a>, an award was presented to an innovative farmer from Ukraine.
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 text-left">
                    During his five-minute acceptance speech, this compassionate hemp farmer let the audience know that he had just flown in that day from Kiev to accept this award. He held the award up and dedicated the award to all the people of Ukraine. Towards the end of his compassionate and emotional speech, he stated that he was flying back to Ukraine “tomorrow” to join his brothers in the pending invasion of Kiev and the rest of Ukraine.
                    </p>
                    <p className="text-xl font-normal text-gray-600 md:text-2xl md:px-8 pb-4 md:pb-14 text-left">
                    That next evening, this short but powerful speech motivated one of the attendees to write lyrics, and later music, to a song with the purpose of raising money for the war-torn country. This songwriter worked with like-minded musicians and recorded this song during July and August of 2022. The song was made into the video using public domain and paid-for video content in September. Her Many Voices Foundation has graciously agreed to be the host for this campaign in both raising money for Ukraine and ensuring all funds are distributed to the worthy recipients.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Ukraine

Ukraine.getLayout = function getLayout(Ukraine) {
    return <Layout>{Ukraine}</Layout>
}
