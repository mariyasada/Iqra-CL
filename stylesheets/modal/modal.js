const openButton = document.querySelector("#btn-open");
const ModalDisplay = document.querySelector("#Modal");
const ExampleOfModal = document.querySelector("#example-of-modal");
const modalBody =document.querySelector("#Modal");
const modalCodeBtn = document.querySelector("#modal-code-btn");
 const modalCodeDiv = document.querySelector("#modal-div-code");


openButton.addEventListener("click",()=>{
    ExampleOfModal.classList.add("active");
    
    
})
modalBody.addEventListener("click",()=>{
    ExampleOfModal.classList.remove("active");
})


modalCodeBtn.addEventListener("click", () => {
        console.log("clicked");
        modalCodeDiv.style.display == "block"
          ? (modalCodeDiv.style.display = "none")
          : (modalCodeDiv.style.display = "block");
      });

// const modalCodeBtn = document.querySelector("#modal-code-btn");
//       const modalCodeDiv = document.querySelector("#modal-div-code");

//       modalCodeBtn.addEventListener("click", () => {
//         console.log("clicked");
//         modalCodeDiv.style.display == "block"
//           ? (modalCodeDiv.style.display = "none")
//           : (modalCodeDiv.style.display = "block");
//       });