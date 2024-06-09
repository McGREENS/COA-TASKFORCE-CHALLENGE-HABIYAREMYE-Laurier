document.addEventListener('DOMContentLoaded', function () {
    // to open the modal
    var modal = document.getElementById("myModal");

    // take image and put it inside the modal - use its "alt" text as a caption
    var images = document.querySelectorAll('.gallery-item img');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    images.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // set element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // if user clicks on (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // set modal to close on click outside the image
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // And also modal closes on pressing the ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
