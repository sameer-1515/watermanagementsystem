function scrollToSection(){

    document.getElementById("problems")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function showPopup(message){

    alert(message);
}

document.getElementById("darkBtn")
.addEventListener("click",function(){

    document.body.classList.toggle("dark");
});

function openImage(src){

    document.getElementById("imagePopup")
    .style.display = "flex";

    document.getElementById("popupImg")
    .src = src;

    // Disable page scrolling
    document.body.style.overflow = "hidden";
}

function closeImage(){

    document.getElementById("imagePopup")
    .style.display = "none";

    // Enable page scrolling again
    document.body.style.overflow = "auto";
}
window.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeImage();
    }
});