
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
        entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }

    
    if (entry.isIntersecting){
      entry.target.classList.add('Dshow');
    }
    else {
      entry.target.classList.remove('Dshow');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const tastElements = document.querySelectorAll('.tast');
tastElements.forEach((el) => observer.observe(el));

const slideupElements = document.querySelectorAll('.slideup');
slideupElements.forEach((el) => observer.observe(el));