import '../styles/tailwind.css'

export default function Application({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <>
      <Component {...pageProps} />
    </>
  )
}
