// Abrir
  document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('openButton').addEventListener('click', () => {
    const container = document.getElementById('shareContainer');
    container.classList.remove('invisible');
    container.classList.remove('opacity-0');
    container.classList.add('opacity-100');
  });

  // Fechar
  document.querySelector('.close-btn').addEventListener('click', () => {
    const container = document.getElementById('shareContainer');
    container.classList.add('opacity-0');
    setTimeout(() => {
      container.classList.add('invisible');
    }, 300);
  });
});


async function copyLink() {
  const link = document.getElementById('shareLink');
  const btn = document.getElementById('copyButton');

  try {
    await navigator.clipboard.writeText(link.value);
    btn.textContent = '✓ Copiado!';
    btn.classList.replace('bg-red-500', 'bg-green-500');
    setTimeout(() => {
      btn.textContent = 'COPIAR LINK';
      btn.classList.replace('bg-green-500', 'bg-red-500');
    }, 2000);
  } catch (err) {
    console.error('Erro ao copiar o link: ', err);
    btn.textContent = 'Erro ao copiar';
    btn.classList.replace('bg-red-500', 'bg-red-700');
    setTimeout(() => {
      btn.textContent = 'COPIAR LINK';
      btn.classList.replace('bg-red-700', 'bg-red-500');
    }, 2000);
  }
}
