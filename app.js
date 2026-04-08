if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('PWA Siap!'))
      .catch(err => console.log('Gagal daftar:', err));
  });
}