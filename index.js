var swiper = new Swiper('.swiper', {

    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    keyboard: { enable: true },
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

    breakpoints: {

       640: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        728: {
          slidesPerView: 1,
          spaceBetween: 40,
        
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },

    },
});

var swipertwo = new Swiper('.swiper2',{
 
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  keyboard: { enable: true },
  loop: true,
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
  },

  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },


  breakpoints: {

     640: {
        slidesPerView: 1,
        spaceBetween: 20,

      },
      728: {
        slidesPerView: 1,
        spaceBetween: 40,
      
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

  },



})

var qlength = document.getElementsByClassName("questions").length;
var qus = document.getElementsByClassName("questions");


console.log(qlength);
console.log(qus);

for (let i = 0; i < qlength; i++) { // Use let instead of var for block scope
  qus[i].addEventListener("click", function () {
    // Collapse all other items
    for (let j = 0; j < qus.length; j++) {
      if (j !== i) {
        let otherAnswer = qus[j].nextElementSibling;
        let otherIcon=qus[j].querySelector("#add");
        otherAnswer.style.display = "none"; // Collapse other answers
        otherIcon.src="./public/images/add.svg"
        
      }
    }

    // Toggle the current answer
    const answers = this.nextElementSibling;
    const icon=this.querySelector("#add");
    if (answers.style.display === "block") {
      answers.style.display = "none"; // Hide if already visible
      icon.src="./public/images/add.svg"
    } else {
      answers.style.display = "block"; // Show if hidden
      icon.src="./public/images/minus.svg"
    }
  });
}

var expand=document.querySelector(".rm")
var col=document.querySelector(".right-column")
console.log(col)
expand.addEventListener("click", function(){
  if(col.style.display==="none"){
    col.style.display="flex"
    expand.innerHTML="Collapse"
  }
  else{
    col.style.display="none"
    expand.innerHTML="Expand"
  }

})