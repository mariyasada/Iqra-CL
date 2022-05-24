const toastCodeBtn = document.querySelector("#toast-code-btn");
const toastCodeDiv = document.querySelector("#toast-div-code");
const toastClickMeBtn =document.querySelector("#toast-button");
const toastDiv=document.querySelector("#toast-bottom");
const snackbar = document.querySelector(".bg-with-shadow");

      toastCodeBtn.addEventListener("click", () => {
        
        toastCodeDiv.style.display == "block"
          ? (toastCodeDiv.style.display = "none")
          : (toastCodeDiv.style.display = "block");
      });

      toastClickMeBtn.addEventListener("click",()=>{    
          toastDiv.className="show";
          setTimeout(()=>{
                 toastDiv.className= toastDiv.className.replace("show","");
          },2000)
        })

      