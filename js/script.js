'use strict'

const btns = document.querySelectorAll('button')

// classList.length bu belgilangan elementda nechta element bor ekanligini bildiradi
console.log(btns[0].classList.length)
// classList.item(1) bu belgilangan elementda classlari qanaqaligi haqida malumot beradi qavs ichidagi nechanchi element ekanligini bildiradi
console.log(btns[0].classList.item(0))

btns[1].classList.add('red')
btns[0].classList.remove('red')

// toggle bu tanlangan element classida blue bor bo'lsa olib tashlaydi yoq bo'lsa qo'shib qo'yadi yani teskarisini qiladi

btns[2].classList.toggle('blue')

// contains bu elementda tanlangan class bormi yoqmi shuni bizga aniqlab beradi
if(btns[1].classList.contains('red')){
  console.log('button  2-elementida red classi bor')
}


btns[0].addEventListener('click', ()=>{
  if(!btns[1].classList.contains('red')){
    btns[1].classList.add('red')
  }else{
    btns[1].classList.remove('red')
  }
  // btns[1].classList.toggle('red')
})