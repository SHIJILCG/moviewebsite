export const optionClick = (text: string) => {
  const el = document.querySelector(`.${text}`);
  const elementPosition = el?.getBoundingClientRect().top;
  const offsetPosition =
    elementPosition && elementPosition + window.pageYOffset - 120;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
