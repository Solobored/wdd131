const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  populateProducts();
  updateLastModified();
  setupFormValidation();
  initializeReviewCount();
});

function populateProducts() {
  const selectElement = document.getElementById("product");
  if (!selectElement) return;
  
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
    selectElement.appendChild(option);
  });
}

function updateLastModified() {
  const lastModified = document.getElementById("lastModified");
  if (lastModified) {
    const now = new Date(document.lastModified).toLocaleString();
    lastModified.textContent = `Last modified: ${now}`;
  }
}

function setupFormValidation() {
  const form = document.getElementById("reviewForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default behavior

    let isValid = true;
    let firstInvalid = null;

    form.querySelectorAll("[required]").forEach((field) => {
      const errorMessage = field.nextElementSibling;

      if (!field.value.trim()) {
        isValid = false;
        field.classList.add("error");
        field.setAttribute("aria-invalid", "true");

        if (!errorMessage || !errorMessage.classList.contains("error-message")) {
          const error = document.createElement("div");
          error.classList.add("error-message");
          error.textContent = `* This field is required`;
          field.after(error);
        }

        if (!firstInvalid) firstInvalid = field;
      } else {
        field.classList.remove("error");
        field.setAttribute("aria-invalid", "false");

        if (errorMessage && errorMessage.classList.contains("error-message")) {
          errorMessage.remove();
        }
      }
    });

    if (!isValid) {
      firstInvalid.focus();
      return; // Stop submission
    }

    submitForm();
  });
}

function submitForm() {
  const reviewCount = Number.parseInt(localStorage.getItem("reviewCount") || "0") + 1;
  localStorage.setItem("reviewCount", reviewCount.toString());

  // Save review data (optional)
  const formData = new FormData(document.getElementById("reviewForm"));
  const reviewData = {};
  formData.forEach((value, key) => {
    reviewData[key] = value;
  });

  localStorage.setItem("latestReview", JSON.stringify(reviewData));

  // Redirect to review.html
  window.location.href = "review.html";
}

function resetForm() {
  document.getElementById("reviewForm").reset();
  localStorage.setItem("reviewCount", "0"); 
  document.getElementById("reviewForm").classList.remove("hidden");
  document.getElementById("confirmationMessage").classList.add("hidden");
}

function initializeReviewCount() {
  if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", "0");
  }
}
