// Lets Talk Button
const letsTalkButton = document.querySelectorAll("#letsTalkBtn")
const formCard = document.getElementById("form-card")
const close = document.getElementById("close")

const contactForm = document.getElementById("contact-form")

letsTalkButton.forEach((talkButton)=>{
    talkButton.addEventListener("click",(e)=>{
        e.preventDefault()
        
        formCard.classList.remove("hidden")
    
    })


})


close.addEventListener("click",()=>{
    formCard.classList.add("hidden")

})

//  Video play when in viewport 

const videos = document.querySelectorAll("#scrollVideo")

const observer = new IntersectionObserver((entries)=>{
    
    entries.forEach((entry)=>{
        const video = entry.target
        if(entry.isIntersecting){
            video.play()
            video.classList.add("visible");
        }else{
            video.pause()
            video.classList.remove("visible");
        }
    })

},{
    root: null, 
    threshold: 0.2
})

videos.forEach((video)=>{
    observer.observe(video)

})










