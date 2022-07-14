	document.querySelector(".hamburger").onclick = ()=> {
		document.querySelector(".main-nav-mob").classList.toggle("move");
		document.querySelector(".hamburger").classList.toggle("close-menu"); 
		
	};

	var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "flex"; 
}



const FIO = document.querySelector('.FIO');
const mail = document.querySelector('.mail');
const textarea = document.querySelector('textarea');
const tel = document.querySelector('.tel');
const form = document.querySelector('#form');

form.addEventListener('submit', function(evt) {
  
  if ( (FIO.value.length > 2) && (mail.value.length > 2) 
    && ( mail.value.search('@') != -1 )  
    && ( mail.value.search('.com') != -1 ) 
    && ( tel.value.search('375') != -1 ) 
    && (textarea.value.length > 2)
    ) {

     FIO.classList.remove('plcl');
     FIO.placeholder = 'Фамилия Имя';

     
     mail.classList.remove('plcl');
     mail.placeholder = 'example@gmail.com';

     
     textarea.classList.remove('plcl');
     textarea.placeholder = 'Текст сообщения';

    
     tel.classList.remove('plcl');
     tel.placeholder = '+375(--)-- -- ---';

     
     btnClick();

  } else {

    evt.preventDefault();

    if ((FIO.value.length <= 2 )) {
      FIO.value='';
      FIO.classList.add('plcl');
      FIO.placeholder = 'Введите более 2 символов!'; 
    }

    if ((textarea.value.length <= 2 )) {
      textarea.value='';
      textarea.classList.add('plcl');
      textarea.placeholder = 'Введите более 2 символов!'; 
    }

    if ((mail.value.search('@') == -1 ) 
    || ( mail.value.search('.com') == -1 ) 
    || (mail.value.length <= 2) ) {
      mail.value='';
      mail.classList.add('plcl');
      mail.placeholder = 'Неверный e-mail адрес!';
    }

    if (( tel.value.search('375') == -1 ) ) {
      tel.value='';
      tel.classList.add('plcl');
      tel.placeholder = 'Неверный номер!';
    }    
  }

});


  
 
    
  