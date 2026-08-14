
const menu=document.querySelector('.menu'), nav=document.querySelector('.navlinks');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const modal=document.querySelector('#bookingModal');
function showModal(name='Bike Rental'){if(!modal)return;modal.classList.add('open');document.body.classList.add('lock');const f=document.querySelector('#bikeName');if(f)f.value=name}
function closeModal(){if(modal){modal.classList.remove('open');document.body.classList.remove('lock')}}
document.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();showModal(b.dataset.book)}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
if(modal)modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();document.querySelector('.lightbox')?.classList.remove('open');document.body.classList.remove('lock')}});

const booking=document.querySelector('#bookingForm');
// Netlify Forms handles the real submission. Do not preventDefault here.
if(booking){
  booking.addEventListener('submit',()=>{
    const n=document.querySelector('#bookingNotice');
    if(n){n.style.display='block';n.textContent='Sending your enquiry…';}
  });
}
const contact=document.querySelector('#contactForm');
// Netlify Forms handles the real submission. Do not preventDefault here.
if(contact){
  contact.addEventListener('submit',()=>{
    const n=document.querySelector('#contactNotice');
    if(n){n.style.display='block';n.textContent='Sending your enquiry…';}
  });
}

document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{const lb=document.querySelector('.lightbox'),img=lb.querySelector('img');img.src=item.dataset.full;lb.classList.add('open');document.body.classList.add('lock')}));
const lb=document.querySelector('.lightbox');if(lb){lb.addEventListener('click',e=>{if(e.target===lb||e.target.matches('button')){lb.classList.remove('open');document.body.classList.remove('lock')}})}

const homeBooking=document.querySelector('#homeBookingForm');
if(homeBooking){homeBooking.addEventListener('submit',()=>{const n=document.querySelector('#homeBookingNotice');if(n){n.style.display='block';n.textContent='Submitting your enquiry…';}})}
