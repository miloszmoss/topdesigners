(window.whenloaded = function(fn) {
  setTimeout('hide()', 1000);
})();

function hide() {
  let loader = document.querySelector('.loader');
  loader.style.transition = 'all 1s';
  loader.style.opacity = '0';
}
