const sections=document.querySelectorAll('.section')
const btnBox=document.querySelectorAll('.controls')
const secBtns = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.all')

function pageTransition() {
  for (i = 0; i < secBtns.length; i++){
    secBtns[i].addEventListener('click' ,function(){//'this' keyword does not exist in arrow function  
      let currentPage = document.querySelector('.active-button');
      currentPage.classList.remove('active-button');
      this.classList.add('active-button');
    })
  }
  
  allSections[0].addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      btnBox.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active');

      sections.forEach((section) => {
        section.classList.remove('active');
      })
      const element = document.getElementById(id);
      element.classList.add('active')
    }

})
}

pageTransition()