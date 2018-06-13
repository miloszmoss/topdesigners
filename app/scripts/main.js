(function tabletThings() {
  const getWidth = window.innerWidth;
  if (getWidth < 768) {
    rmEvens();
    descHeight();
    function descHeight() {
      const descH = document.querySelector('.our-team__img').offsetHeight;
      const allDesc = document.querySelectorAll('.our-team__desc');
      allDesc.forEach(desc => {
        desc.style.height = `${descH}px`;
      });
      console.log(descH);
    }
    function rmEvens() {
      const evens = document.querySelectorAll('.even');
      evens.forEach(list => {
        list.classList.remove('even');
      });
    }
  }
})();
