const practiceItems = document.querySelectorAll('.practice__item');

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

const playBtns = document.querySelectorAll('.music__item_play');

playBtns.forEach(item => {
    item.addEventListener('click', () => { 
        const audio = item.querySelector('audio');
        const playImg = item.querySelector('img');
        if(!item.classList.contains('active')) {
            item.classList.add('active');
            audio.play();
            playImg.src = './images/stop.svg' ;
        } else {
            item.classList.remove('active');
            audio.pause();
            playImg.src = './images/play.svg';
        }   
    });
});

