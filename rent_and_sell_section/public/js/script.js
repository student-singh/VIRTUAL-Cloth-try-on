// Add hover effects to cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      });
    });
  });

  // Lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
    // Get the lightbox and image elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
  
    // Get all gallery images
    const galleryImages = document.querySelectorAll(".gallery-image");
  
    // Open lightbox when an image is clicked
    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = image.src;
      });
    });
  
    // Close lightbox when the close button is clicked
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Close lightbox when clicking outside the image
    lightbox.addEventListener("click", (e) => {
      if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
      }
    });
  });