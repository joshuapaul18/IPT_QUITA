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
  
    // Contact Form Validation
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form submission for now
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Basic Validation
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      // Basic Email Validation (optional, you could use HTML5 validation for this as well)
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // If everything is valid, show a success message
      alert("Thank you for your message, " + name + "! We will get back to you shortly.");
  
      // Reset the form after successful submission
      contactForm.reset();
    });
  
  });
  