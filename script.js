let btn = document.querySelector('.changeButton')
function randomColor(){
  return Math.ceil(Math.random() * 255)
}
btn.addEventListener("click", function() {
  let squares = document.querySelectorAll('.squares-item');
  for(let item of squares){
    item.style.background = `rgb(${randomColor()},${randomColor()},${randomColor()})`
  }
})