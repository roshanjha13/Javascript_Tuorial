const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    // console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

// how to manupulate html classes with js :
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// key board event-- global event
document.addEventListener("keydown", function (e) {
  //   console.log("A key is pressed");
  console.log(e.key);
  if (e.key === "Escape") {
    // check model content escape class or not
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
