let isScrollingdisabeled = false;

export function disableScrolling() {
  isScrollingdisabeled = true;
  console.log("disable now");
  document.body.classList.add("no-scroll");
}

export function enableScrolling() {
  isScrollingdisabeled = false;
  console.log("enabable now");
  document.body.classList.remove("no-scroll");
}

window.addEventListener("scroll", () => {
  if (isScrollingdisabeled) {
    window.scrollTo(0, 0);
  }
});
