const navbarHeight = 64;
export default function goTo(element: HTMLElement) {
  const currentScrollYPosition = window.scrollY;
  const elementOffSetTop = element.offsetTop;

  if (currentScrollYPosition > elementOffSetTop) {
    window.scrollTo({
      top: elementOffSetTop - navbarHeight,
      behavior: 'smooth',
    });
  } else {
    window.scrollTo({ top: elementOffSetTop, behavior: 'smooth' });
  }
}
