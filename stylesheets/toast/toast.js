const toastCodeBtn = document.querySelector("#toast-code-btn");
const toastCodeDiv = document.querySelector("#toast-div-code");
const toastClickMeBtn =document.querySelector("#toast-button");
const toastDiv=document.querySelector("#toast-bottom");

      toastCodeBtn.addEventListener("click", () => {
        
        toastCodeDiv.style.display == "block"
          ? (toastCodeDiv.style.display = "none")
          : (toastCodeDiv.style.display = "block");
      });

      toastClickMeBtn.addEventListener("click",()=>{       
          toastDiv.style.display==="none"?  toastDiv.style.display="block": toastDiv.style.display="none";
      })

      toastDiv.addEventListener("click",()=>{
           toastDiv.style.display==="block"?  toastDiv.style.display="none": toastDiv.style.display="block";
      })