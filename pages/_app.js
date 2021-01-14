import { useState } from 'react';

import Layout from '../components/layout';
import '../styles/global.css';
// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  let [alert, setAlert] = useState(false);
  let [messageAlert, setMessageAlert] = useState("")
  return (
    <Layout alert={alert}  setAlert={setAlert}  messageAlert={messageAlert} setMessageAlert={setMessageAlert} >
      <Component {...pageProps} alert={alert}  setAlert={setAlert} messageAlert={messageAlert} setMessageAlert={setMessageAlert}  />
      
    </Layout>
  )
}