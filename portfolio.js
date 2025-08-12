// portfolio.js
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('portfolio-toggle');
  const list = document.getElementById('projects-list');

  // 如果元素存在，才进行操作（增强健壮性）
  if (!toggle || !list) return;

  // 默认折叠
  list.classList.add('collapsed');
  toggle.classList.add('collapsed');

  // 点击切换
  toggle.addEventListener('click', function () {
    list.classList.toggle('collapsed');
    toggle.classList.toggle('collapsed');
  });
});
