const practiceItems = document.querySelectorAll('.practice__item');
document.querySelector

practiceItems.forEach(item => {
    item.addEventListener('click', () => {

        if(!item.classList.contains('active')) {
            practiceItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.practice__item_link').classList.remove('active');
            });
            item.classList.add('active');
            item.querySelector('.practice__item_link').classList.add('active');
        }
    });
});