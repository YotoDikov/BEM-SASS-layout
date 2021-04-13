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

    const timeline = document.querySelector('.timeline');


    [...document.querySelectorAll('.timeline__element')]
    .map(el => {
        el.addEventListener('click', selectTimeLineElement);
    });

    function selectTimeLineElement(e) {

        if(currentSelectedElement === e.currentTarget) return;

        if(currentSelectedElement === '') {
            e.currentTarget.classList.add("timeline__element--selected");
            currentSelectedElement = e.currentTarget;
            moveTimeLine(e);
            return;
        }

        e.currentTarget.classList.add("timeline__element--selected");
        currentSelectedElement.classList.remove("timeline__element--selected");
        currentSelectedElement = e.currentTarget;
        moveTimeLine(e);
    }

    function moveTimeLine(e) {
        const elementCenterPosition = getElementPosition(e.currentTarget).center;
        const distanceWindowCenterElementCenter = windowCenter - elementCenterPosition;
        timelineTranslatedX += Number(distanceWindowCenterElementCenter);

        timeline.style.transform = `translateX(${timelineTranslatedX}px)`;
    }
}

main();