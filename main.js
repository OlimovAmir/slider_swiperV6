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

 

// Добавление класса
let button = document.querySelector('input');

button.addEventListener('ckick', () => {
  console.log('test')
});
 