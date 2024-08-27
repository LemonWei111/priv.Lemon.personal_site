// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');

    function checkSectionsVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible'); // 移除类名，确保淡入效果只发生一次
            }
        });
    }

    window.addEventListener('scroll', checkSectionsVisibility);

    const honorItems = document.querySelectorAll('#honors .national li, #honors .provincial li, #honors .municipal li');

    honorItems.forEach(item => {
        item.addEventListener('click', function (event) {
            const award = event.target.querySelector('.award').textContent;
            const date = event.target.querySelector('.date').textContent;
            alert(`荣誉详情:\n奖项: ${award}\n日期: ${date}`);
        });
    });

});