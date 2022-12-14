import '../styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../app/store'


const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
