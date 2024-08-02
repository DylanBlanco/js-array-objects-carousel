//array images e console.log
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

for (let i = 0; i < images.length; i++) {
    //console.log(`Name`, images[i]);

    console.log(`
        Image
        `, images[i].image);
    console.log(`
        Title
        `, images[i].title);
    console.log(`
        Text
        `, images[i].text);
};

//carica img dinamicamente
for (let i = 0; i < images.length; i++) {
    const img = document.createElement(`img`);
    img.classList.add(`img`);
    if (i == 0) {
        img.innerHTML += `<img src="${images[i]}" class="active">`;
    }
    else {
        img.innerHTML += `<img src="${images[i]}">`;
    }
}

const allImgs = document.querySelectorAll(`.box-img > img`);
console.log(`allImgs`, allImgs, typeof allImgs);

let activeImg = 0;

// click next
const next = document.getElementById(`next`);
next.addEventListener(`click`, function () {
    if (activeImg < images.length - 1) {
        console.log(`click next`);

        activeImg++;
    }
    else {
        activeImg = 0;
    }
    allImgs[activeImg].classList.add(`active`);
});

// click prev
const prev = document.getElementById(`prev`);
prev.addEventListener(`click`, function () {
    if (activeImg < images.length - 1) {
        console.log(`click prev`);

        activeImg--;
    }
    else {
        activeImg = 0;
    }
    allImgs[activeImg].classList.add(`active`);
});