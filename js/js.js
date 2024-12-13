function calculate() {
  const numPeople = document.getElementById("numberp")?.value || 0;
  const tourPrice = parseInt(document.getElementById("toursel").value); 
  const total = numPeople * tourPrice; 
  const amountDiv = document.querySelector(".money");
  amountDiv.innerText = `Total Amount: $${total}`;
}
function searchFunction() {
  const input = document.getElementById("searchInput").value;
  alert("Searching for: " + input);
}

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
function handleStarRating(event, ratingId) {
  const stars = document.querySelectorAll(`#${ratingId} .star`);
  const selectedValue = parseInt(event.target.getAttribute("data-value"));

  // Reset all stars to unselected (gray)
  stars.forEach((star) => {
    star.classList.remove("selected");
  });

  // Highlight the selected stars
  stars.forEach((star) => {
    if (parseInt(star.getAttribute("data-value")) <= selectedValue) {
      star.classList.add("selected");
    }
  });
}

// Add event listeners to each rating section
document.querySelectorAll(".rating").forEach((rating) => {
  rating.addEventListener("click", (event) => {
    if (event.target.classList.contains("star")) {
      handleStarRating(event, rating.id);
    }
  });
});

// Set the default star selections
document
  .getElementById("rating-majima")
  .querySelectorAll(".star")[0]
  .classList.add("selected"); // 1 star for Majima
document
  .getElementById("rating-kiryu")
  .querySelectorAll(".star")
  .forEach((star, index) => {
    if (index < 4) {
      star.classList.add("selected"); // 4 stars for Kiryu
    }
  });
document
  .getElementById("rating-haruka")
  .querySelectorAll(".star")
  .forEach((star, index) => {
    if (index < 5) {
      star.classList.add("selected"); // 5 stars for Haruka
    }
  });
