import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
/* Tell Font Awesome to skip adding the CSS automatically since it's being imported above */
config.autoAddCss = false

library.add(fab, faEnvelope)
export default function App({Component,pageProps}){
    return <Component {...pageProps} />
}