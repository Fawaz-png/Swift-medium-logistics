const navopen = document.querySelector('.nav-open-btn');
const navclose = document.querySelector('.nav-close-btn');
const navlinks = document.querySelector('.navlinks')
const navWrapper = document.querySelector('.wrapper')
const orderFormBtn = document.querySelector('.form-open-btn')
const orderForm = document.querySelector('.modal-container')
const orderFormCloseBtn = document.querySelector('.form-close-btn')

navopen.addEventListener('click', () => {
  navlinks.style.display = "block";
  navWrapper.style.display = "block";
});

navclose.addEventListener('click', () => {
  navlinks.style.display = "none";
  navWrapper.style.display = "none"
});

navWrapper.addEventListener('click', () => {
  navlinks.style.display = "none";
  navWrapper.style.display = "none"
});

orderFormBtn.addEventListener('click', () => {
  orderForm.style.display = 'block';
});

orderFormCloseBtn.addEventListener( 'click', () => {
  orderForm.style.display = "none";
});








const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial-text");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "anita Anyawu",
    position: "Business Owner",
    photo:
      "img/hero.jpg",
    text:
      "Swift medium has very fast riders, my goods were delivered to the receiver way before the expected time i gave them"
  },
  {
    name: "Mercy Ajibade",
    position: "E-commerce store owner",
    photo: "img/hero.jpg",
    text:
      "I was amazed at how fast their delivery was"
  },
  {
    name: "Shola Akinwunmi",
    position: "E-commerce store owner",
    photo: "img/hero.jpg",
    text:
      "Lovely service, you've just gained a lifetime customer"
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "img/hero.jpg",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "img/hero.jpg",
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "img/hero.jpg",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "img/hero.jpg",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 3500);