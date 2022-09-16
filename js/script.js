'use strict'

const wrapper = document.querySelector('.btn-block')
const btns = document.querySelectorAll('.button')
wrapper.addEventListener('click', (event)=>{
  if(event.target && event.target.tagName==='BUTTON'){
    console.log('clicked')
  }
})
wrapper.addEventListener('click', (event)=>{
  if(event.target && event.target.matches('button.blue')){
    console.log('clicked')
  }
})
wrapper.addEventListener('click', (event)=>{
  if(event.target && event.target.contains('blue')){
    console.log('clicked')
  }
})

const btn = document.createElement('button')
btn.classList.add('blue')
wrapper.append(btn)


btns.forEach((item) => {
  item.addEventListener('click', ()=>{
      console.log('clicked')
  })
});