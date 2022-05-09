const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box')

//Dark Mode Styles 
function darkMode () {
   nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
   textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
   toggleIcon.children[0].textContent = 'dark mode';
  //  toggleIcon.children[1].classList.remove('fa-sun');
  //  toggleIcon.children[1].classList.add('fa-moon');
  toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
   image1.src = 'img/undraw_proud_coder_dark.svg';
   image2.src = 'img/undraw_feeling_proud_dark.svg';
   image3.src = 'img/undraw_conceptual_idea_dark.svg';
   //window.localstorage element
   localStorage.setItem('theme','dark')
}

//Light Mode Styles 
function lightMode () {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'light mode';
  //toggleIcon.children[1].classList.remove('fa-moon');
  //toggleIcon.children[1].classList.add('fa-sun');
  toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
  image1.src = 'img/undraw_proud_coder_light.svg';
  image2.src = 'img/undraw_feeling_proud_light.svg';
  image3.src = 'img/undraw_conceptual_idea_light.svg';
  //window.localstorage element
  localStorage.setItem('theme','light')


}

// Switch theme Dynamicly
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
    //document.documentElement returns the main <html> element.
    ///* The data-* attribute is used to store custom data private to the page or application. */

    darkMode();

  }
  else {
    document.documentElement.setAttribute('data-theme', 'light')
    //light is just a word with no meaning just to disable  dark theme attribute
    lightMode();

  }
}

// Event listner 
toggleSwitch.addEventListener('change', switchTheme)

//local storage
const getLocalStorage = localStorage.getItem('theme');
if (getLocalStorage) {
  document.documentElement.setAttribute('data-theme',getLocalStorage);
  if (getLocalStorage==='dark') {
    toggleSwitch.checked =true;
    darkMode();
  }
  else{
    lightMode();
  }
}





