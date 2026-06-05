//== CURSOR==
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

//== PROGRESS BAR ==
Window.addEventListener("scroll", ()=>{
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progress-bar").style.width = prgress + "%";
});    

//== ANIMATION AU SCROLL==
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(el=>{
    el.classList.add("hidden");
    observer.observe(el);
});

//==BACK TO TOP==
document.getElementById("topBtn").addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});

//== FORM SUBMIT==
document.querySelector(".contact-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Message envoyé 🚀")
})
