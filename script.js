const tooltip = document.getElementById('tooltip');
const buttons = document.querySelectorAll('.project-button');
const infoPanel = document.getElementById('info-panel');
const title = document.getElementById('project-title');
const desc = document.getElementById('project-desc');
const link = document.getElementById('project-link');

// Mostrar tooltip ao passar o mouse
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    tooltip.textContent = btn.dataset.name;
    tooltip.style.opacity = 1;
  });

  btn.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 10 + 'px';
    tooltip.style.top = e.pageY + 10 + 'px';
  });

  btn.addEventListener('mouseleave', () => {
    tooltip.style.opacity = 0;
  });

  // Ao clicar, mostrar painel lateral
  btn.addEventListener('click', () => {
    title.textContent = btn.dataset.name;
    desc.textContent = btn.dataset.desc;
    link.href = btn.dataset.link;
    infoPanel.classList.remove('hidden');
  });
});

// Fechar painel ao clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('project-button') && !infoPanel.contains(e.target)) {
    infoPanel.classList.add('hidden');
  }
});
