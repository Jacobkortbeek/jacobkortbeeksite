const wScroll = $(document).scrollTop();
console.log(wScroll);
if (wScroll > $('#about-container').offset().top ){
  console.log("you hit 480");
}
