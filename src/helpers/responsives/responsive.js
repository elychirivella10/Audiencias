export const detecterDispositivo = () => {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /windows phone/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        return true
    } else {
        return false
    }
}

export const mediaQueries = (media, document) =>{
    let retorno =  null
    const  myFunction = (mql) => {
        if (mql.matches) { // If media query matches
            
            retorno = true
          
        } else{
            retorno = false
        }
      }

      let mql = window.matchMedia(`(${media})`)
      mql.addListener(myFunction)
      document.addEventListener('DOMContentLoaded', myFunction(mql))
      if (retorno !== null) {
          return retorno
      }
}