// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        // Prevent default action and scroll smoothly to the target
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        // Scroll to the section smoothly
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust scroll position to account for fixed navbar
            behavior: "smooth"
          });
        }
      });
    });
  
    // Highlight the Active Navbar Link
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".navbar a").forEach((link) => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  
    // Handle CV Download Button Click
    const cvButton = document.querySelector(".btn");
    if (cvButton) {
      cvButton.addEventListener("click", function (e) {
        // Prevent default action and trigger the download of the CV
        e.preventDefault();
  
        // Assuming you have a file named 'cv.pdf' in your project directory
        const cvLink = "cv.pdf"; // Change this to the actual path of your CV file
  
        // Create an invisible download link and trigger a click event to download the file
        const a = document.createElement("a");
        a.href = cvLink;
        a.download = "Joshua_Paul_CV.pdf"; // The name the downloaded file will have
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    }
  
  });
  