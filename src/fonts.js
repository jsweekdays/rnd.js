import { injectGlobal } from 'styled-components'

import black from '../fonts/GothamPro-Black.woff'
import bold from '../fonts/GothamPro-Bold.woff'
import medium from '../fonts/GothamPro-Medium.woff'
import regular from '../fonts/GothamPro.woff'

injectGlobal`
  @font-face { 
    font-family: Gotham Pro; 
    src: local("GothamPro-Black"), local("Gotham Pro Black"),
        url(${black});
    font-weight: 900;
  }

  @font-face { 
    font-family: Gotham Pro; 
    src: local("GothamPro-Bold"), local("Gotham Pro Bold"),
        url(${bold});
    font-weight: 800; 
  }
  
  @font-face { 
    font-family: Gotham Pro; 
    src: local("GothamPro-Medium"), local("Gotham Pro Medium"),
        url(${medium});
    font-weight: 500; 
  } 

  @font-face { 
    font-family: Gotham Pro; 
    src: local("GothamPro"), local("Gotham Pro"),
        url(${regular});
    font-weight: 400; 
  } 
`
