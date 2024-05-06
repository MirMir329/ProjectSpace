const austranavtsBtn = document.querySelector(".austranavts-btn");
const austranavts = document.querySelector(".austranavts");
const austranavtsCards = document.querySelector(".austranavts-cards");
const div0 = document.querySelector(".div0");
const insight = document.querySelector(".insight-background");
const header = document.querySelector(".header");
const movingPlanets = document.querySelector(".moving-planets");
const blueLight = document.querySelector(".blue-light");
const redUnivers = document.querySelector(".red-univers");
const galaxy = document.querySelector(".galaxy");
const redPlanet = document.querySelector(".red-planet");
const bluePlanet = document.querySelector(".blue-planet");
const wordNGINE = document.querySelector(".word-NGINE");
const wordPACE = document.querySelector(".word-PACE");
const charE = document.querySelector(".char-E");
const charS = document.querySelector(".char-S");
const universeSimulator = document.querySelector(".universe-simulator");
const pagination = document.querySelector(".pagination");
const historyBtn = document.querySelector(".history-btn");
const pistureOfTheDayBtn = document.querySelector(".pisture-of-the-day-btn");
const sectionPicofzday = document.querySelector(".section-picofzday");
const logoBtn = document.querySelector(".logo-btn");

setTimeout(() => {
    blueLight.classList.add("slow-appear");
    redUnivers.classList.add("slow-appear");
    galaxy.classList.add("slow-appear");
}, 2000);

setTimeout(() => {
    bluePlanet.classList.add("slow-translate");
    redPlanet.classList.add("slow-translate");
}, 4000);

setTimeout(() => {
    charS.classList.add("slow-translate-S");
    charE.classList.add("slow-translate-E");
}, 6000);

setTimeout(() => {
    wordNGINE.classList.add("slow-appear");
    wordPACE.classList.add("slow-appear");
    universeSimulator.id = "appear";
}, 7500);




let count = 0;
let spaceArr = [];

const getDataAustranavts = async () => {
    const res = await fetch("https://data.nasa.gov/resource/9kcy-zwvn.json");
    if (res.ok) {
        const data = await res.json();
        if (count != 1) {
            count++
            for (let i = 0; i < data.length; i++) {
                if (data[i].eva != undefined & data[i].crew != undefined & data[i].date != undefined & data[i].duration != undefined & data[i].purpose != undefined & data[i].country != undefined & data[i].vehicle != undefined){
                    spaceArr.push(data[i]);
                    
                }
            }
            makeSpaceCard(spaceArr);
        }
            
        console.log(spaceArr);
        createPadination(spaceArr)
    }
}

const getDataHistory = async (e) => {
    const res = await fetch("https://data.nasa.gov/resource/9g7e-7hzz.json");
    if(res.ok) {
        const data = await res.json();
        console.log(data);
    }
}

const getDataPictureOfTheDay = async (e) => {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=afyo01MR3snt2TcyrvPjA5UNTN0EhkXe3emGiXYH");
    if(res.ok) {
        const data = await res.json();
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data))
        makePictureOfTheDay()
    }
}

const toggleElemHide = (...elems) => {
    elems.forEach(item => item.classList.toggle("hide"));
}

const toggleElemBG = (elem) => {
    elem.classList.toggle("old-bg");
    elem.classList.toggle("new-bg");
}

const showFrontPage = () =>{
    if (!austranavts.classList.contains("hide")) {
        toggleElemBG(header);
        toggleElemHide(insight, austranavts, pagination);
    } else if (austranavts.classList.contains("hide")) {
    }
}

const showSpaceCard = () => {
    if (!insight.classList.contains("hide")) {
        toggleElemBG(header);
        toggleElemHide(insight, austranavts, pagination);
    } else if (insight.classList.contains("hide")) {

    }
}

const makeSpaceCard = (data) => {
    showSpaceCard()
    
    austranavtsCards.innerHTML = `
            <div class="div0">
                <div class="extra-div">

                </div>
            </div>`
    let counter = 1;
    for (let i = 1; i <= 10; i++) {
        if (counter === 1) {
            counter = 2;
            const card = `
            <div class="background${counter}">
                <div class="card">
                    <h3>Crew: ${data[i].crew}</h3>
                    <span>Date: ${data[i].date}</span>
                    <span>Duration: ${data[i].duration}</span>
                    <span>Vehicle: ${data[i].vehicle}</span>
                    <span class="purpose">Purpose: ${data[i].purpose}</span>
                    <span>Country: ${data[i].country}</span>
                </div>
            </div>
            `
            austranavtsCards.insertAdjacentHTML("beforeend", card);
            
        } else if (counter === 2) {
            counter = 1;
            const card = `
            <div class="background${counter}">
                <div class="card">
                    <h3>Crew: ${data[i].crew}</h3>
                    <span>Date: ${data[i].date}</span>
                    <span>Duration: ${data[i].duration}</span>
                    <span>Vehicle: ${data[i].vehicle}</span>
                    <span class="purpose">Purpose: ${data[i].purpose}</span>
                    <span>Country: ${data[i].country}</span>
                </div>
            </div>
            `
            austranavtsCards.insertAdjacentHTML("beforeend", card);
        }     
    }
}

window.addEventListener("scroll", (e) => {
    let scrollY = window.scrollY;
    let movingPlanetsHeight = movingPlanets.offsetHeight;
    if (scrollY >= movingPlanetsHeight) {
        div0.classList.add("slow-appear");
        div0.style.top = `${scrollY - movingPlanetsHeight + 150}px `;
    } else {
        div0.classList.add("slow-disappear");
        div0.classList.remove("slow-appear");
    }
})


const createPadination = () => {
    pagination.innerHTML = ""
    const buttonsCount = Math.ceil(spaceArr.length / 10);
    console.log(buttonsCount);

    for (let i = 1; i < buttonsCount; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        pagination.append(button);
        
    }
}

const openProductsPage = async (e) => {
    const paginationButton = e.target.closest("button");

    if (paginationButton) {
        austranavtsCards.innerHTML = ""
        const currentPage = paginationButton.textContent;
        let skip = 10 * currentPage;

        const arr = spaceArr;
        const newArr = arr.slice(skip, skip + 10)
        console.log(newArr);
        let counter = 1;
        for (let i = 0; i < newArr.length; i++) { 
            if (counter === 1) {
                counter = 2;
                const card = `
                <div class="background${counter}">
                    <div class="card">
                        <h3>Crew: ${newArr[i].crew}</h3>
                        <span>Date: ${newArr[i].date}</span>
                        <span>Duration: ${newArr[i].duration}</span>
                        <span class="purpose">Purpose: ${newArr[i].purpose}</span>
                        <span>Country: ${newArr[i].country}</span>
                    </div>
                </div>
                `
                austranavtsCards.insertAdjacentHTML("beforeend", card);
            } else if (counter === 2) {
                counter = 1;
                const card = `
                <div class="background${counter}">
                    <div class="card">
                        <h3>Crew: ${newArr[i].crew}</h3>
                        <span>Date: ${newArr[i].date}</span>
                        <span>Duration: ${newArr[i].duration}</span>
                        <span class="purpose">Purpose: ${newArr[i].purpose}</span>
                        <span>Country: ${newArr[i].country}</span>
                    </div>
                </div>
                `
                austranavtsCards.insertAdjacentHTML("beforeend", card);
            }     
        }
    } else {
        console.log("Hello");
    }
}


logoBtn.addEventListener("click", showFrontPage)
austranavtsBtn.addEventListener("click", getDataAustranavts);
pagination.addEventListener("click", openProductsPage);
historyBtn.addEventListener("click", getDataHistory);