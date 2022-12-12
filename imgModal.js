const modalHtml = "<div id='showImageModal'>"+
                    "<span class='close'>&times;</span>"+
                    "<div class='modalBody'>"+
                        "<div>"+
                            "<img class='modal-content'>"+
                            "<p class='caption'></p>"+
                        "</div>"+
                    "</div>"+
                  "</div>";
document.body.innerHTML += modalHtml;
const modal = document.getElementById("showImageModal");
const modalImg = modal.querySelector("img");
const captionText = modal.querySelector(".caption");
const span = modal.querySelector(".close");

function imgModal(imgs, caption = true) {
    imgs.forEach(e => {
        e.classList.add("modalImg");
        e.onclick = function(){ 
            modal.style.display = "block";
            modalImg.src = this.src;
            modalImg.style.width = this.naturalWidth+"px";
            modalImg.style.height = this.naturalHeight+"px";
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