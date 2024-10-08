export const scrollToId = (event: any): void => {
  event.preventDefault();

  const id = event.target.closest('.scrollable-anchor').getAttribute('href')!.slice(1);
  const scrollElement = document.getElementById(id);
  const header = document.getElementById('header');
  const offset = header!.clientHeight + 10;

  const targetPosition = scrollElement!.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};
