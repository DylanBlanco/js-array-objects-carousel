const imagesContainer = document.querySelector(".images-container");
console.log(`imagesContainer`, imagesContainer, typeof imagesContainer);

const images = [`img/01.webpp`, `img/02.webpp`, `img/03.webpp`, `img/04.webpp`, `img/05.webpp`];

for (let i = 0; 1 < images.length; i++) {
    console.log(images[i]);
    if (i==0) {
        imagesContainer.innerHTML += `<img src="${images[i]}" class="active">`;
    }
    else {
        imagesContainer.innerHTML += `<img src="${images[i]}">`;

    }
}

const allimgs = document.querySelectorAll(`.images.container > img`);
console.log(`allImg`, allimgs, typeof allimgs)

let currentlyActiveImg = 0;

const nextButton = document.getElementById(`next-button`);
nextButton.addEventListener(`click`, function () {
    if (currentlyActiveImg < images.length - 1) {
        //console.log(`click next`);
        //document.querySelector(`.images-container > img:nth-child(`+ currentlyActiveImg +`)`).classList.remove(`active`);
        
        currentlyActiveImg++;
    
        //document.querySelector(`.images-container > img:nth-child(`+ currentlyActiveImg +`)`).classList.add(`active`);
    }
    else {
        currentlyActiveImg = 0
    }
    allimgs[currentlyActiveImg].classList.add(`active`)
})

const prevButton = document.getElementById(`prev-button`);
prevButton.addEventListener(`click`, function () {
    allimgs[currentlyActiveImg].classList.remove(`active`);

    if (currentlyActiveImg > 0) {
        //console.log(`click prev`);
        //document.querySelector(`.images-container > img:nth-child(`- currentlyActiveImg -`)`).classList.remove(`active`);
        
        currentlyActiveImg = 0;
    
        //document.querySelector(`.images-container > img:nth-child(`- currentlyActiveImg -`)`).classList.add(`active`);
        allimgs[currentlyActiveImg].classList.add(`active`);
    }
})