function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}


const imagenes=document.querySelectorAll('.slide-in');

function checkSlide(){
  imagenes.forEach(img=>{
    //windows.scrolY me dice cuantos pixeles recorri en el eje Y
    //windows.innerHeight me dice la cantidad en pixeles que hay entre el punto actual y el top
    const scrollAmountByImage=(window.scrollY + window.innerHeight);

    const imgBottom=img.offsetTop+img.height;
    const isHalfShown=scrollAmountByImage>img.offsetTop;
    const isLessBottom=window.scrollY<imgBottom;

    if(isHalfShown && isLessBottom){
      img.classList.add('active')
    }else{
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll',debounce(checkSlide))