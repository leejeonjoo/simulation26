const revealTargets = document.querySelectorAll(
  ".section-kicker, .idea-heading, .concept-step, .journey-heading, .journey-card, .journey-note, .start-overline, .start h2, .start-copy",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  revealTargets.forEach((target) => {
    target.classList.add("will-reveal");
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
