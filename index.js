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

function getElementPosition(el) {
    const top = window.scrollY + el.getBoundingClientRect().top // Y
    const left = window.scrollX + el.getBoundingClientRect().left // X
    const center = (left + el.offsetWidth / 2);

    return { 
        top,
        left,
        center
    };
}

function main () {
    
    const windowCenter = window.innerWidth / 2;
    let timelineTranslatedX = 0;
    let currentSelectedElement = '';
    let currentSelectedPointer = '';

    const blok = document.querySelector('.timeline__block');

    const elementwidth = document.querySelector('.timeline__element').offsetWidth;
    const timeline = document.querySelector('.timeline');


    document.getElementById("right").addEventListener('click', moveRight);
    document.getElementById("left").addEventListener('click', moveLeft);

    [...document.querySelectorAll('.timeline__element')]
    .map(el => {
        el.addEventListener('click', selectTimeLineElement);
    });

   
    function moveRight (e) {
        timelineTranslatedX += Number(elementwidth);
        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;

        if(currentSelectedElement.classList.contains("timeline__element--selected")) {
            currentSelectedElement.classList.remove("timeline__element--selected");
        }
    }

    function moveLeft (e) {
        timelineTranslatedX -= Number(elementwidth);
        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;

        if(currentSelectedElement.classList.contains("timeline__element--selected")) {
            currentSelectedElement.classList.remove("timeline__element--selected");
        }
    }

    function selectTimeLineElement(e) {
        moveTimeLine(e);
        if(currentSelectedElement === '') {
            e.currentTarget.classList.add("timeline__element--selected");
            currentSelectedElement = e.currentTarget;
            return;
        }

        e.currentTarget.classList.add("timeline__element--selected");
        currentSelectedElement.classList.remove("timeline__element--selected");
        currentSelectedElement = e.currentTarget;
    }

    function moveTimeLine(e) {

        const elementCenterPosition = getElementPosition(e.currentTarget).center;
        const distanceWindowCenterElementCenter = windowCenter - elementCenterPosition;
        timelineTranslatedX += Number(distanceWindowCenterElementCenter);

        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;
    }
}


main();

// if(!currentPage.classList.contains('showed')) {
//     currentPage.classList.add('showed', 'slide-change-opacity');
//     prevPage.classList.remove('showed', 'slide-change-opacity');
//     prevPage = currentPage;
// };