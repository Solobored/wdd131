function updateReviewCount() {
  const reviewCount = localStorage.getItem("reviewCount") || "0"
  const countElement = document.getElementById("reviewCount")
  countElement.textContent = `Total Reviews Submitted: ${reviewCount}`
}

function updateLastModified() {
  const lastModified = document.getElementById("lastModified")
  const now = new Date()
  lastModified.textContent = now.toLocaleString()
}

document.addEventListener("DOMContentLoaded", () => {
  updateReviewCount()
  updateLastModified()
})

