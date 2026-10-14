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

document.addEventListener('DOMContentLoaded', function () {
  makeCollapsible('portfolio-toggle', 'projects-list');

  document.querySelectorAll('.blog-toggle').forEach((toggle, index) => {
    const content = toggle.nextElementSibling;
    if (!content) return;
    content.id = content.id || `blog-content-${index + 1}`;
    toggle.id = toggle.id || `blog-toggle-${index + 1}`;
    makeCollapsible(toggle.id, content.id);
  });
});
