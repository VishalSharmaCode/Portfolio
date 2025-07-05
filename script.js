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

const projectTabs = document.querySelectorAll('.project-nav li');
const projectSections = document.querySelectorAll('.pp-slide');

projectTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and sections
    projectTabs.forEach(t => t.classList.remove('active'));
    projectSections.forEach(sec => sec.classList.remove('active'));

    // Add active to selected tab and its content
    tab.classList.add('active');
    const target = tab.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
  });
});