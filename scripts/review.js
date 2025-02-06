function updateReviewCount() {
  const reviewCount = localStorage.getItem("reviewCount") || "0";
  const countElement = document.getElementById("reviewCount");

  if (countElement) {
      countElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
  }
}

function updateLastModified() {
  document.getElementById("lastModified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
  updateReviewCount();
  updateLastModified();
});
