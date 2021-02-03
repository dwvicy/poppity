/* eslint-disable react/prop-types */
import '../styles/globals.css'
import Nav from '../src/components/nav'
import Foot from '../src/components/foot'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
      <Foot />
    </div>
  )
}

export default MyApp
