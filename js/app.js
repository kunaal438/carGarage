// sheilds

const topSheild = document.querySelector('.top-shield');
const bottomSheild = document.querySelector('.bottom-shield');

// end

// all three btns and their options

const exploreBtn = document.querySelector('.explore-more');
const ColorBtn = document.querySelector('.color-option');
const Carcolors = [...document.querySelectorAll('.rectangular-box div')];
const colorOptions = document.querySelector('.colors-main-box');
const CarBrandsOptionParent = document.querySelector('.car-brands');
const CarBrandsOption = [...document.querySelectorAll('.car-brands .car-brand-item')];
const detailCarBtn = document.querySelector('.discover-car');

// end

//car related variable and also car

const car = document.querySelector('.car');
const carImg = document.querySelector('.car img');
const CarInformation = document.querySelector('.information');
const CarLogo = document.querySelector('.car-logo');

// end

// car switch variables

let carCompany = 0;
let carArray = [
    "lambo",
    "bugatti",
    "mclaren"
]

// end

// car img locations

const ImgDirectory = "img/";
const imgExtension = ".png";
const carBrand = {
    lambo: 'lambo', 
    bugatti: 'bugatti', 
    mclaren: 'mclaren'
};


// ending

exploreBtn.addEventListener('click', () => {
    CarInformation.classList.toggle('slide-in');
    CarLogo.classList.toggle('slide-in');
})

ColorBtn.addEventListener('click', () => {
    colorOptions.classList.toggle('disable');
})

const CarColorShifter = Carcolors.map((color, index)  => {
    return color.addEventListener('click', () => {
        const ImgSrc = `${ImgDirectory}${carBrand[carArray[carCompany]]}/${carBrand[carArray[carCompany]]}_${Carcolors[index].className}${imgExtension}`;
        carImg.setAttribute('src', ImgSrc);
    })
})

detailCarBtn.addEventListener('click', () => {
    CarBrandsOptionParent.classList.toggle('disable');
})

const carBrandArray = CarBrandsOption.map((car, index) => {
    return car.addEventListener('click', () => {
        // console.log(carArray[index]);
        carCompany = index;
        changingCar();
    })
})

const changingCar = () => {
    topSheild.classList.add('active');
    bottomSheild.classList.add('active');
    
    setTimeout(() => {
        carClassRemoving();
        car.classList.add(carArray[carCompany]);
        const ImgSrc = `${ImgDirectory}${carBrand[carArray[carCompany]]}/${carBrand[carArray[carCompany]]}_${Carcolors[2].className}${imgExtension}`;
    
        carImg.setAttribute('src', ImgSrc);
    }, 500);

    setTimeout(() => {  
        topSheild.classList.remove('active');
        bottomSheild.classList.remove('active'); 
    }, 1000);
}

const carClassRemoving = () => {
    for(let i=0; i < 3; i++){
        car.classList.remove(carArray[i]);
    }
}