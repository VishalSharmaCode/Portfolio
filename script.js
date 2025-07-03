const navItems = document.querySelectorAll('.navbar li');
const contents = document.querySelectorAll('.content-section');
const highlightBox = document.getElementById('highlight-box');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Activate nav item
    navItems.forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Show content
    const targetId = item.getAttribute('data-target');
    contents.forEach(c => c.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');

    // Move highlight box
    const rect = item.getBoundingClientRect();
    const navRect = item.parentElement.getBoundingClientRect();
    highlightBox.style.width = rect.width + 'px';
    highlightBox.style.left = (rect.left - navRect.left) + 'px';
  });
});

window.addEventListener('load', () => {
  const activeItem = document.querySelector('.navbar li.active');
  const rect = activeItem.getBoundingClientRect();
  const navRect = activeItem.parentElement.getBoundingClientRect();
  highlightBox.style.width = rect.width + 'px';
  highlightBox.style.left = (rect.left - navRect.left) + 'px';
});

// console.log(navItems);
// console.log(contents);
// console.log(highlightBox);