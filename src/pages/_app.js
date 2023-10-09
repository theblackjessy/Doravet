import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
    {/* <p>navigation</p> */}
    <Component {...pageProps} />
    {/* <p>footer</p> */}
  </div>
}
