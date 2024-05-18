const showModal=document.querySelector(".btn-sbt");
const modall=document.querySelector(".modal");
const closeModall=document.querySelector(".ok-btn");
const backdropp=document.querySelector(".backdrop");

showModal.addEventListener("click",()=>{
    modall.style.top="50%";
    modall.style.visibility="visible";
    modall.style.transform="translate(-50% , -50%) scale(1)";
    modall.style.opacity="1";
    backdropp.style.display="block";
})
closeModall.addEventListener("click",closeModal);
backdropp.addEventListener("click",closeModal);
function closeModal(){
    
        modall.style.top="0";
        modall.style.visibility="hidden";
        modall.style.transform="translate(-50% , -50%) scale(0.1)";
        backdropp.style.display="none";

}