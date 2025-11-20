document.addEventListener("DOMContentLoaded",()=>{
const header = document.querySelector("header");
const btnMenu = document.querySelector(".btn-menu");

       let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop // 브라우저의 호환성을 생각하여 스크롤바가 내려온 길이를 계산

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 굴렸을 때
            header.classList.remove("fadeout")
            btnMenu.classList.remove("fadeout")
            mobileHeader.classList.add("fadeout")
            mobileState = false
            btnMenuImg.setAttribute("src","./img/menu.svg")
        }else{
            // 마우스 휠을 아래로 굴렸을 때
            header.classList.add("fadeout")
            btnMenu.classList.add("fadeout")
            mobileHeader.classList.add("fadeout")
            mobileState = false
            btnMenuImg.setAttribute("src","./img/menu.svg")
        }
        lastScrollTop = scrollTop
    });

    const mobileHeader = document.querySelector(".header-smart")
    let mobileState = false
    const btnMenuImg = document.querySelector(".btn-menu-img")

    btnMenu.addEventListener("click",()=>{
        if(mobileState == false){
        mobileHeader.classList.remove("fadeout")
        mobileState = true
        btnMenuImg.setAttribute("src","./img/close-menu.svg")
    }else{
        mobileHeader.classList.add("fadeout")
        mobileState = false
        btnMenuImg.setAttribute("src","./img/menu.svg")

    }
})

})