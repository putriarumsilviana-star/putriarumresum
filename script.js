// Smooth scroll and nav highlight
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const hash = this.getAttribute('href');
    if (hash.startsWith('#')) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
      // Active link
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Update nav on scroll
window.addEventListener('scroll', function() {
  const fromTop = window.scrollY + 73;
  document.querySelectorAll('.nav-link').forEach(link => {
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Typing effect for hero
const roles = [
  'MC',
  'Public Speaker',
  'Content Creator',
  'Guru Bimbel',
  'Afiliator'
];
let typingIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 80;
const typingElem = document.getElementById('typing');
function typeRole() {
  const current = roles[typingIndex];
  if (isDeleting) {
    typingElem.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % roles.length;
      setTimeout(typeRole, 350);
    } else {
      setTimeout(typeRole, 23);
    }
  } else {
    typingElem.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      isDeleting = true;
      setTimeout(typeRole, 725);
    } else {
      setTimeout(typeRole, typingSpeed);
    }
  }
}
if (typingElem) typeRole();


// Scroll animations (AOS-like)
// On scroll, reveal elements with .aos and set .aos-animate class
function onScrollAOS() {
  document.querySelectorAll('.aos').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('aos-animate');
    }
  });
}
window.addEventListener('load', onScrollAOS);
window.addEventListener('scroll', onScrollAOS);

// Animate skill bars
function animateSkills() {
  document.querySelectorAll('.skill-card').forEach(card => {
    const bar = card.querySelector('.skill-bar span');
    if (!card.classList.contains('animated') && card.getBoundingClientRect().top < window.innerHeight - 60) {
      // Animate bar only once
      bar.style.width = card.getAttribute('data-skill') + "%";
      card.classList.add('animated');
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// CONTACT FORM HANDLER (Optional: only UI, no backend)
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    formMsg.textContent = "Terima kasih! Pesan Anda telah dikirim.";
    contactForm.reset();
    setTimeout(()=>{ formMsg.textContent=''; }, 5000);
  });
}

// Responsive nav for mobile (optional toggle menu for more enhancement)