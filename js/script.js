function showPage(pageNumber, e) {
  e.preventDefault(); // Mencegah perpindahan halaman

  // Hide all card containers
  document.getElementById("page1-cards").style.display = "none";
  document.getElementById("page2-cards").style.display = "none";
  document.getElementById("page3-cards").style.display = "none";

  // Remove 'active' class from all page items
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.remove("active");

  // Show the selected page
  document.getElementById("page" + pageNumber + "-cards").style.display =
    "block";

  // Add 'active' class to the selected page item
  document.getElementById("page" + pageNumber).classList.add("active");
}

// Membuat objek Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Jika elemen masuk ke dalam viewport
    if (entry.isIntersecting) {
      // Mulai animasi
      entry.target.style.animationPlayState = "running";
    } else {
      // Hentikan animasi
      entry.target.style.animationPlayState = "paused";
    }
  });
});

// Mengamati elemen dengan kelas "animated-element"
// const animatedElement = document.querySelector(".bg-neon");
// observer.observe(animatedElement);
