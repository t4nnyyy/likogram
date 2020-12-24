let likes = 0;
setInterval(() => {
  const heart = document.querySelector('svg[aria-label="Like"]');
  const arrow = document.querySelector("a.coreSpriteRightPaginationArrow");
  if (heart) {
    heart.parentNode.click();
    likes++;
    console.log(`You've liked ${likes} post(s)`);
  }
  arrow.click();
}, 2000);
