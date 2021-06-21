const linksContainer = document.getElementById("nav-links");
const hamburgerBtn = document.getElementById("ham-btn-container");


// const deviceWidth = window.innerHeight;
// if(deviceWidth < 768){
//     console.log(deviceWidth)
//     linksContainer.style.transform = `translateY(-${height}px)`;

// }

const showHideLinks = () => {
    const height = linksContainer.offsetHeight;
    const hasHideClass = linksContainer.classList.contains("hide");
    linksContainer.style.transition = "transform 0.6s ease-in-out "
    if(!hasHideClass){
        
        linksContainer.style.transform = `translateY(0px)`;
        linksContainer.classList.add("hide");

    }
    else{
        linksContainer.style.transform = `translateY(-${height}px)`;
        linksContainer.classList.remove("hide");
    }

}

hamburgerBtn.addEventListener('click', showHideLinks);
