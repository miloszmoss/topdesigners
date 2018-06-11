(window.whenloaded = function(fn) {
  setTimeout('hide()', 1000);
})();

function hide() {
  let loader = document.querySelector('.loader');
  loader.style.transition = 'all 1s';
  loader.style.opacity = '0';
  setTimeout(function remove() {
    let loader = document.querySelector('.loader');
    loader.remove();
  }, 1000);
}
