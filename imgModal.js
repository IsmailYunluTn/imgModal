const modalHtml = "<div id='showImageModal'>"+
                "<span class='close'>&times;</span>"+
                "<img class='modal-content'>"+
                "<div class='caption'></div>"+
              "</div>";
document.body.innerHTML += modalHtml;
const modal = document.getElementById("showImageModal");
const modalImg = modal.querySelector("img");
const captionText = modal.querySelector(".caption");
const span = modal.querySelector(".close");

function imgModal(imgSelectors, caption = true) {
    imgSelectors.forEach(e => {
        const img = document.querySelector(e);
        img.classList.add("modalImg");
        img.onclick = function(){ 
            modal.style.display = "block";
            modalImg.src = this.src;
            if(caption == true)
                captionText.innerHTML = this.alt;
            else
                captionText.innerHTML = "";
        }
    });
        
    span.onclick = function() { 
        modal.style.display = "none";
    }
}