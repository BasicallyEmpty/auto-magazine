const menuWrapper = document.querySelector('.header__menu-wrapper');
const menuButton = document.querySelector('.header__menu-button');
const closeMenuButton = document.querySelector('.header__close-menu-button');
const engadgetButton = document.querySelector('#button__engadget');
const driveButton = document.querySelector('#button__drive');
const engadgetArticle = document.querySelector('#press__engadget');
const driveArticle = document.querySelector('#press__drive');
const articleLink = document.querySelector('.press__article-link');

menuButton.addEventListener('click', function() {
  menuWrapper.classList.add('header__menu-wrapper_visible')
})

closeMenuButton.addEventListener('click', function() {
  menuWrapper.classList.remove('header__menu-wrapper_visible')
})

engadgetButton.addEventListener('click', function() {
  driveArticle.classList.remove('press__article_visible');
  engadgetArticle.classList.add('press__article_visible');
  driveButton.classList.remove('press__button_active');
  engadgetButton.classList.add('press__button_active');
  articleLink.setAttribute('href', 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html')
})

driveButton.addEventListener('click', function() {
  driveArticle.classList.add('press__article_visible');
  engadgetArticle.classList.remove('press__article_visible');
  driveButton.classList.add('press__button_active');
  engadgetButton.classList.remove('press__button_active');
  articleLink.setAttribute('href', 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html')
})
