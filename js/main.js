const sectionsRef = document.querySelectorAll(".action");
// console.log(sectionsRef);

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.style.transform = `scaleX(1)`;

      observer.unobserve(el.target);
    }
  })
}, {

});


sectionsRef.forEach(section => sectionObserver.observe(section));