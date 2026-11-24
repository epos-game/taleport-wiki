// Small interactions shared by every page: a lightbox for screenshots and a way back to the top.
// Both are built here rather than in markup so the Markdown stays plain.

const cs = document.documentElement.lang.startsWith('cs');
const text = {
  top: cs ? 'Nahoru' : 'Back to top',
  close: cs ? 'Zavřít' : 'Close',
  zoom: cs ? 'Zvětšit obrázek' : 'Enlarge image',
};

// --- Lightbox ------------------------------------------------------------

let dialog: HTMLDialogElement | undefined;
let big: HTMLImageElement;
let caption: HTMLElement;
let closeButton: HTMLButtonElement;

// Built on first use: until a screenshot is opened there is nothing to show, and an <img> with no
// source sitting in the page is an error to every checker.
const lightbox = () => {
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.className = 'tp-lightbox';
  dialog.setAttribute('aria-label', text.zoom);
  const figure = document.createElement('figure');
  big = document.createElement('img');
  // The same marker the screenshots carry (see src/plugins/lazy-images.mjs): this is the enlarged
  // copy of one of them, not a new image to optimise.
  big.dataset.imageComponent = 'true';
  caption = document.createElement('figcaption');
  closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'tp-lightbox__close';
  closeButton.setAttribute('aria-label', text.close);
  closeButton.textContent = '×';
  figure.append(big, caption);
  dialog.append(figure, closeButton);
  dialog.addEventListener('click', () => dialog?.close());
  document.body.append(dialog);
  return dialog;
};

const zoomable = (target: EventTarget | null) =>
  target instanceof HTMLImageElement && target.classList.contains('tp-zoomable') ? target : null;

const openLightbox = (img: HTMLImageElement, byPointer: boolean) => {
  const box = lightbox();
  big.src = img.currentSrc || img.src;
  big.alt = img.alt;
  caption.textContent = img.alt;
  box.showModal();
  // The browser focuses the close button on opening. After a pointer click that only draws a ring
  // nobody asked for; after the keyboard it is where focus belongs, so it is left there.
  if (byPointer) closeButton.blur();
};

document.addEventListener('click', (event) => {
  const img = zoomable(event.target);
  if (!img || event.defaultPrevented || event.button !== 0) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  openLightbox(img, event.detail > 0);
});

// The screenshots are buttons for the keyboard too: reachable with Tab, opened with Enter or Space.
document.addEventListener('keydown', (event) => {
  const img = zoomable(event.target);
  if (!img || (event.key !== 'Enter' && event.key !== ' ')) return;
  event.preventDefault();
  openLightbox(img, false);
});

for (const img of document.querySelectorAll<HTMLImageElement>('.sl-markdown-content img')) {
  if (img.closest('a, button')) continue;
  img.classList.add('tp-zoomable');
  img.tabIndex = 0;
  img.setAttribute('role', 'button');
  img.setAttribute('aria-haspopup', 'dialog');
  img.title ||= text.zoom;
}

// A table wider than the screen scrolls sideways, and a scrolling area has to be reachable by
// keyboard. Only those that really scroll get a tab stop; the rest would be a stop that does nothing.
const tables = document.querySelectorAll<HTMLElement>('.sl-markdown-content table');
const focusScrollingTables = () => {
  for (const table of tables) {
    if (table.scrollWidth > table.clientWidth) table.tabIndex = 0;
    else table.removeAttribute('tabindex');
  }
};
focusScrollingTables();
window.addEventListener('resize', focusScrollingTables);

// --- Back to top ---------------------------------------------------------

const toTop = document.createElement('button');
toTop.type = 'button';
toTop.className = 'tp-top';
toTop.setAttribute('aria-label', text.top);
toTop.textContent = '↑';
// `auto` leaves the speed to the CSS, which is instant for anyone who asked for less motion.
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'auto' }));
document.body.append(toTop);

let ticking = false;
const update = () => {
  ticking = false;
  const visible = window.scrollY > 700;
  toTop.toggleAttribute('data-visible', visible);
  // Out of the tab order and the accessibility tree while it is hidden.
  toTop.inert = !visible;
};
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  },
  { passive: true },
);
update();

export {};
