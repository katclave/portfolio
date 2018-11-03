const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (() => {
  console.log('HERE I AM')
}))

window.addEventListener('resize', (() => {
  if(window.innerWidth > 600){
    console.log('small screen')
  }
}))
