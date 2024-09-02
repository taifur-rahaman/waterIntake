const bigGlass = document.querySelector(".main");
const smallGlass = document.querySelectorAll(".glass_250ml");
const remainingAmount = document.querySelector(".remaining h1 span");

remainingAmount.innerHTML = "2";
let totalAmount = remainingAmount.ATTRIBUTE_NODE;
let currentAmount = totalAmount;

smallGlass.forEach((glass) => {
  glass.addEventListener("click", (e) => {
    e.preventDefault();
    if (glass.classList.contains("select")) {
      glass.classList.remove("select");
      currentAmount += 0.25;
      fillGlass(currentAmount);
    } else {
      glass.classList.add("select");
      reducer();
      fillGlass(currentAmount);
    }
    remainingAmount.innerHTML = currentAmount;
  });
});

function reducer() {
  if (!currentAmount == 0) {
    currentAmount -= 0.25;
  }
}

function fillGlass(currentAmount) {
  let percentage = (1 - currentAmount / totalAmount) * 100;
  bigGlass.style.background = `linear-gradient(#fff 0%, ${
    100 - percentage
  }%, skyblue ${100 - percentage}%, skyblue 100% )`;
}
