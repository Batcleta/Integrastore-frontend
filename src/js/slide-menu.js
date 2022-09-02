
window.onload = function () {

  const toggle = getDomIdElement('nav-toggle')
  const navbar = getDomIdElement('navbar')
  const bodyPadding = getDomIdElement('body-pd')
  const expandedName = queryAll('.nav__name')
  const expandedLogo= queryAll('.nav__logo')
  const expandedCollapse = queryAll('.collapse__link')
  const expandedCollapsedMenu = queryAll('.collapse__nav')
  
  // Expander menu
  const showMenu = () => {
      if(toggle && navbar && bodyPadding){
          toggle.addEventListener('click', () => {
              navbar.classList.toggle('expander')
              expandedName.forEach(n => n.classList.toggle('expanded-name'))
              expandedLogo.forEach(n => n.classList.toggle('expanded-name'))
              expandedCollapse.forEach(c => c.classList.toggle('expanded-arrow'))
              bodyPadding.classList.toggle('body-pd')
          })
      }    
  }
  
  showMenu()
  
  // Link active
  const linkColor = queryAll('.nav__active')
  function colorLink(){
      linkColor.forEach(l => l.classList.remove('active'))
      this.classList.add('active')
      if(
          !this.classList.contains('collapse__nav')){
          expandedCollapsedMenu.forEach(n => n.lastElementChild.classList.remove('showCollapse'))
      }
  }
  linkColor.forEach(l => l.addEventListener('click', colorLink))
  
  /*===== COLLAPSE MENU  =====*/ 
  const navCollapse = getDomClass('collapse__nav')
  var i
  
  for(i=0;i<navCollapse.length;i++){
    navCollapse[i].addEventListener('click', function(){
      
      const collapseMenu = this.lastElementChild
      collapseMenu.classList.toggle('showCollapse')
  
      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }
}
