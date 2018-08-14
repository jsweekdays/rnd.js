import { injectGlobal } from 'styled-components'

import black from '../fonts/GothamPro-Black.woff'
import bold from '../fonts/GothamPro-Bold.woff'
import medium from '../fonts/GothamPro-Medium.woff'
import regular from '../fonts/GothamPro.woff'

injectGlobal`
  @font-face { 
    font-family: Gotham Pro;
    font-weight: 900;
    src: url(${black});
  }

  @font-face { 
    font-family: Gotham Pro; 
    src: url(${bold});
    font-weight: 700; 
  }
  
  @font-face { 
    font-family: Gotham Pro; 
    src: url(${medium});
    font-weight: 500; 
  } 

  @font-face { 
    font-family: Gotham Pro; 
    src: url(${regular});
    font-weight: 400; 
  } 
`
