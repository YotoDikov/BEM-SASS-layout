const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

{/* <li class="timeline__block">
    <div class="timeline__element timeline__element--odd">
        <div class="arrow arrow--down"></div>
        <p>TRGRG4G54GH54H54</p>
    </div>
</li>
<li class="timeline__block">
    <div class="timeline__element timeline__element--even">
        <div class="arrow arrow--up"></div>
        <p>TRGRG4G54GH54H54</p>
    </div>
</li> */}

function main () {

    const timeline = document.querySelector('.timeline');
    let timelineTranslatedX = 0;

    let currentSelectedElement = '';
    const elementwidth = document.querySelector('.timeline__element').offsetWidth;
    
    [...document.querySelectorAll('.timeline__element')]
    .map(el => {
        el.addEventListener('click', selectTimeLineElement);
    });

    document.getElementById("right").addEventListener('click', moveRight);
    document.getElementById("left").addEventListener('click', moveLeft);

   

    console.log(elementwidth);

   

    function moveRight (e) {
        console.log('i am here');
        timelineTranslatedX += Number(elementwidth);
        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;
    }

    function moveLeft (e) {
        console.log('i am here');
        timelineTranslatedX -= Number(elementwidth);
        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;
    }

    function selectTimeLineElement(e) {

        if(currentSelectedElement === '') {
            e.currentTarget.classList.add("timeline__element--selected");
            currentSelectedElement = e.currentTarget;
            return;
        }

        e.currentTarget.classList.add("timeline__element--selected");
        currentSelectedElement.classList.remove("timeline__element--selected");
        currentSelectedElement = e.currentTarget;
    }
}

main();

// if(!currentPage.classList.contains('showed')) {
//     currentPage.classList.add('showed', 'slide-change-opacity');
//     prevPage.classList.remove('showed', 'slide-change-opacity');
//     prevPage = currentPage;
// };