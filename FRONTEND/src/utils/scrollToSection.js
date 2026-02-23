export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const navbar = document.querySelector('.navbar');
  const navbarHeight = (navbar && navbar.offsetHeight) ? navbar.offsetHeight : 72; // fallback
  const offset = navbarHeight + 8; // small gap

  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = prefersReduced ? 'auto' : 'smooth';

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior });
};