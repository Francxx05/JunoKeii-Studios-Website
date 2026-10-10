
(function () {
  var box = document.getElementById('lightbox');
  var img = document.getElementById('lbImg');
  var title = document.getElementById('lbTitle');
  var count = document.getElementById('lbCount');
  var current = 0;

  function visibleItems() {
    return Array.prototype.filter.call(document.querySelectorAll('.portfolio-item'), function (el) {
      return el.offsetParent !== null;
    });
  }

  function show(i) {
    var items = visibleItems();
    if (!items.length) return;
    current = (i + items.length) % items.length;
    var item = items[current];
    var name = item.querySelector('.portfolio-caption span').textContent;
    var artwork = item.querySelector('.ph');

img.style.backgroundImage = getComputedStyle(artwork).backgroundImage;
img.style.backgroundSize = 'contain';
img.style.backgroundPosition = 'center center';
img.style.backgroundRepeat = 'no-repeat';

    img.setAttribute('aria-label', name);
    title.textContent = name;
    count.textContent = (current + 1) + ' / ' + items.length;
  }

  function openBox(item) {
    show(visibleItems().indexOf(item));
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBox() {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  Array.prototype.forEach.call(document.querySelectorAll('.portfolio-item'), function (el) {
    el.addEventListener('click', function () { openBox(el); });
  });

  document.getElementById('lbNext').addEventListener('click', function () { show(current + 1); });
  document.getElementById('lbPrev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lbClose').addEventListener('click', closeBox);
  box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });

  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'Escape') closeBox();
  });
})();

