document.addEventListener('DOMContentLoaded', function(){
    const header = document.querySelector('.mainHeader');
    const menuCon = document.querySelector('.menuCon');
    const navCon = document.querySelector('.main-nav');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            header.classList.add('border');
        }else{
            header.classList.remove('border');
        };
    });


    menuCon.addEventListener('click', () => {
        menuCon.classList.toggle('open');
        navCon.classList.toggle('open');
    })
});


function startCounter(counter) {
    const speed = 200; // smaller = faster
  
    function updateCount() {
      const target = parseInt(counter.dataset.target, 10);
      const count  = parseInt(counter.textContent || '0', 10);
      const increment = Math.ceil(target / speed);
  
      if (count < target) {
        counter.textContent = Math.min(count + increment, target);
        setTimeout(updateCount, 20);
      } else {
        counter.textContent = target + '+';
      }
    }
    updateCount();
}



document.getElementById("subscribeForm").addEventListener("submit", function(event){
    event.preventDefault();
    let form = event.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if(response.ok){
            alert(" Thanks for subscribing!");
            form.reset();
        } else{
            alert("⚠️ Oops! Something went wrong.");
        }
    }).catch(error => {
        alert("⚠️ Network error, please try again later.");
    });
});


const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", async function(e){
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if(response.ok){
            alert("Thank you for reaching out to EcoNova Environmental Solutions! We'll get back to you shortly.");
            contactForm.reset();
        } else{
            alert("Message not sent, please try again.");
        }
    });
}


const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    easing: "ease-in-out",
    reset: false
});

sr.reveal(".counter", {
    origin: 'bottom',
    afterReveal: (el) => {
        startCounter(el);
    }
});


sr.reveal(`.hero-container`, {origin: 'bottom', delay: 1000})
sr.reveal(`.about-hero-content`, {origin: 'bottom', delay: 1000})
sr.reveal(`.about-hero-content`, {origin: 'left', delay: 1000})
sr.reveal(`.secondContainer`, {origin: 'bottom', delay: 1000})