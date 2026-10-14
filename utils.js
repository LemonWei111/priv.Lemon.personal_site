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

// 博客
document.addEventListener('DOMContentLoaded', function () {
  makeCollapsible('portfolio-toggle', 'projects-list');

  // 博客折叠：每个 .blog 内查找 .blog-toggle 和 .blog-content
  document.querySelectorAll('.blog').forEach(blog => {
    const toggle = blog.querySelector('.blog-toggle');
    const content = blog.querySelector('.blog-content');
    if (!toggle || !content) return;

    // 初始为收起
    content.classList.add('collapsed');
    toggle.classList.add('collapsed');

    toggle.addEventListener('click', () => {
      content.classList.toggle('collapsed');
      toggle.classList.toggle('collapsed');
    });
  });
});
