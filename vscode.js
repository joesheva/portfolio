

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

const dropdownToggle1 = document.querySelector('.dropdown-toggle1');
const dropdownMenu1 = document.querySelector('.dropdown-menu1');

dropdownToggle1.addEventListener('click', () => {
  dropdownMenu1.style.display = dropdownMenu1.style.display === 'none' ? 'block' : 'none';
});

function openLanguage(languageName) {
    var i;
    var x = document.getElementsByClassName("language");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(languageName).style.display = "block";  
  }

