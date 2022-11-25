let scrollerwidth = document.querySelector(".scrollerwidth");
let scrollerheight = document.querySelector(".scrollerheight");
let scrollerright = document.querySelector(".scrollerright");
let scrollerbottom = document.querySelector(".scrollerbottom");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollerwidth.style.width = `${(scrollTop / height) * 100}%`;
  scrollerbottom.style.width = `${(scrollTop / height) * 100}%`;
  scrollerheight.style.height = `${(scrollTop / height) * 100}%`;
  scrollerright.style.height = `${(scrollTop / height) * 100}%`;
});
