var myBtn = document.getElementById("myBtn");  // When the user clicks on the button, scroll to the top of the document
myBtn.onclick = function topFunction() { 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
};
