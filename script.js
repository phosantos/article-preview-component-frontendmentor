const modal = document.querySelector('.share-modal');
const btn = document.querySelector('.share-btn');
const html = document.documentElement;

function clickOutside(e) {
  if (!modal.contains(e.target)) {
    modal.classList.remove('active');
    btn.classList.remove('active');
    html.removeEventListener('click', clickOutside);
  }
}

function toggleModal() {
  modal.classList.toggle('active');
  btn.classList.toggle('active');

  if (modal.classList.contains('active')) {
    setTimeout(() => {
      html.addEventListener('click', clickOutside);
    });
  }
}

btn.addEventListener('click', toggleModal);
