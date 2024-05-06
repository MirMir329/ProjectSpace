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
const historyBtn = document.querySelector(".history-btn");
const logoBtn = document.querySelector(".logo-btn");
const austranavtsBtn = document.querySelector(".austranavts-btn");

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


const getDataAustranavts = async () => {
    const res = await fetch("https://data.nasa.gov/resource/9kcy-zwvn.json");
    if (res.ok) {
        const data = await res.json();
        console.log(data);
    }
}

const getDataHistory = async (e) => {
    const res = await fetch("https://data.nasa.gov/resource/9g7e-7hzz.json");
    if(res.ok) {
        const data = await res.json();
        console.log(data);
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
    toggleElemBG(header);

}


logoBtn.addEventListener("click", showFrontPage)
austranavtsBtn.addEventListener("click", getDataAustranavts);
historyBtn.addEventListener("click", getDataHistory);