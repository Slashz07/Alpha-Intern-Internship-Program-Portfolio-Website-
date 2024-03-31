const sections=document.querySelectorAll('.section')
const btnBox=document.querySelectorAll('.controls')
const secBtns = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('body')

// for color change in menubar buttons-->
function pageTransition() {
  for (i = 0; i < secBtns.length; i++){
    secBtns[i].addEventListener('click' ,function(){//'this' keyword does not exist in arrow function  
      let currentPage = document.querySelector('.active-button');
      currentPage.classList.remove('active-button');
      this.classList.add('active-button');
    })
  }
  // for transitiions in between pages-->
  allSections[0].addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      let currentPage = document.querySelector('.active');
      currentPage.classList.remove('active');
      const element = document.getElementById(id);
      console.log(element);
      element.classList.add('active')
    }
  })

  // themebutton-->
  const themeBtn = document.querySelector(".theme-btn")
  const element = document.body;
  themeBtn.addEventListener('click', () => {
  element.classList.toggle("light-mode")
  })
  
}

pageTransition()

