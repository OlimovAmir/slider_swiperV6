window.addEventListener('resize', () => {

  if (window.innerWidth > 500) {

    document.getElementById('link').href = 'style2.css';
    document.getElementById('path').src = '#';
    document.getElementById('style').href = '#';



    document.getElementsByClassName('swiper-slide').style = '';

    document.querySelector('.slides_1').classList.add('hidden');
    document.body.childNodes[3].style.display = 'block';

 


  } else {

    

    document.getElementById('link').href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
    document.getElementById('path').src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    document.getElementById('style').href = 'style.css';
    document.getElementById('app').src = 'app.js';
    document.body.childNodes[3].style.display = 'none';
    document.body.childNodes[1].setAttribute('style', '');
  





  }
})

let popup = document.querySelector('.lenogo');
let popup1 = document.querySelector('.samsung');
let popup2 = document.querySelector('.apple');
let popup3 = document.querySelector('.apple2');
let openPopupButton = document.querySelector('.footer');
openPopupButton.addEventListener('click', () => {
  if (!popup.classList.contains('hidden')) {
    popup.classList.add('hidden');
    popup1.classList.add('hidden');
    popup2.classList.add('hidden');
    popup3.classList.add('hidden');
    document.querySelector('.button').value = 'Показать все';
    document.querySelector('#arrows').style.transform = 'rotate(360deg)';

  } else {
    popup.classList.remove('hidden')
    popup1.classList.remove('hidden')
    popup2.classList.remove('hidden');
    popup3.classList.remove('hidden');
    document.querySelector('.button').value = 'Скрыть';
    document.querySelector('#arrows').style.transform = 'rotate(180deg)';

  }

});


window.addEventListener('resize', () => {
  if (window.innerWidth < 769) {
    
    document.querySelector('.ViewSonic').classList.add('hidden');
    document.querySelector('.sony').classList.add('hidden');
    document.querySelector('.apple2').classList.add('hidden');
  } else {
    
    document.querySelector('.ViewSonic').classList.remove('hidden');
    document.querySelector('.sony').classList.remove('hidden');
    document.querySelector('.apple2').classList.remove('hidden');

  }

});

window.addEventListener('resize', () => {
  if ( window.innerWidth >768) {
    document.querySelector('.apple2').classList.remove('hidden');
  }
})