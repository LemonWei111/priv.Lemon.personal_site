// utils.js
function makeCollapsible(toggleId, listId) {
  const toggle = document.getElementById(toggleId);
  const list = document.getElementById(listId);

  if (!toggle || !list) return;

  list.classList.add('collapsed');
  toggle.classList.add('collapsed');

  toggle.addEventListener('click', () => {
    list.classList.toggle('collapsed');
    toggle.classList.toggle('collapsed');
  });
}

// 使用
document.addEventListener('DOMContentLoaded', function () {
  makeCollapsible('portfolio-toggle', 'projects-list');
  // makeCollapsible('another-toggle', 'another-list');
});
