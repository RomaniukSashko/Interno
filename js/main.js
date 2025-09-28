// const sectionsRef = document.querySelectorAll(".action");
// // console.log(sectionsRef);

// const sectionObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach(el => {
//     if (el.isIntersecting) {
//       el.target.style.transform = `scaleX(1)`;

//       observer.unobserve(el.target);
//     }
//   })
// }, {

// });


// sectionsRef.forEach(section => sectionObserver.observe(section));








const listEl = document.querySelectorAll("#home, #about, #services, #pages, #contact");
const linkEl = document.querySelectorAll(".nav__link");



const linkObserver = new IntersectionObserver((entries) => {
  entries.forEach(items => {
    if (items.isIntersecting) {
      linkEl.forEach(link => link.classList.remove("active"));
      const currentId = items.target.id;
      const currentLink = document.querySelectorAll(`.nav__link[href="#${currentId}"]`);
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  })
}, {
  threshold: [0.2, 0.8],
});

listEl.forEach(item => linkObserver.observe(item));