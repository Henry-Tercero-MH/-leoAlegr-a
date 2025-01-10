function openModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImage.src = element.src;
  caption.innerHTML = element.alt;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}
