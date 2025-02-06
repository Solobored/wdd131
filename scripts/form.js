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
]

function populateProducts() {
  const selectElement = document.getElementById("product")
  products.forEach((product) => {
    const option = document.createElement("option")
    option.value = product.id
    option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1)
    selectElement.appendChild(option)
  })
}

function updateLastModified() {
  const lastModified = document.getElementById("lastModified")
  const now = new Date()
  lastModified.textContent = now.toLocaleString()
}

function initializeRatingSystem() {
  const ratingContainer = document.querySelector(".rating")
  const ratingInputs = document.querySelectorAll('.rating input[type="radio"]')
  const starsDisplay = document.querySelector(".stars-display")

  ratingContainer.addEventListener("keydown", (e) => {
    const currentInput = document.activeElement
    if (!currentInput.matches('.rating input[type="radio"]')) return

    const currentIndex = Array.from(ratingInputs).indexOf(currentInput)
    let newIndex

    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        newIndex = Math.min(currentIndex + 1, ratingInputs.length - 1)
        break
      case "ArrowLeft":
      case "ArrowDown":
        newIndex = Math.max(currentIndex - 1, 0)
        break
      default:
        return
    }

    e.preventDefault()
    ratingInputs[newIndex].focus()
    ratingInputs[newIndex].checked = true
    updateRatingDisplay(newIndex + 1)
  })

  ratingInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
      updateRatingDisplay(index + 1)
    })
  })

  updateRatingDisplay(0)
}

function updateRatingDisplay(selectedRating) {
  const starsDisplay = document.querySelector(".stars-display")
  const fullStars = "★".repeat(selectedRating)
  const emptyStars = "☆".repeat(5 - selectedRating)
  starsDisplay.textContent = fullStars + emptyStars
}

function setupFormValidation() {
  const form = document.querySelector("form")
  const requiredFields = form.querySelectorAll("[required]")

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let isValid = true
    let firstInvalid = null

    requiredFields.forEach((field) => {
      if (!field.value) {
        isValid = false
        field.setAttribute("aria-invalid", "true")
        if (!firstInvalid) firstInvalid = field
      } else {
        field.setAttribute("aria-invalid", "false")
      }
    })

    if (!isValid) {
      firstInvalid.focus()
      alert("Please fill out all required fields marked with an asterisk (*)")
    } else {
      submitForm()
    }
  })
}

function submitForm() {
  const reviewCount = Number.parseInt(localStorage.getItem("reviewCount") || "0") + 1
  localStorage.setItem("reviewCount", reviewCount.toString())
  document.getElementById("reviewForm").classList.add("hidden")
  const confirmationMessage = document.getElementById("confirmationMessage")
  confirmationMessage.classList.remove("hidden")
  document.getElementById("reviewCount").textContent = reviewCount
}

function resetForm() {
  document.getElementById("reviewForm").reset()
  document.getElementById("reviewForm").classList.remove("hidden")
  document.getElementById("confirmationMessage").classList.add("hidden")
}

function initializeReviewCount() {
  if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", "0")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populateProducts()
  updateLastModified()
  initializeRatingSystem()
  setupFormValidation()
  initializeReviewCount()

  document.getElementById("newReviewBtn").addEventListener("click", resetForm)
})

