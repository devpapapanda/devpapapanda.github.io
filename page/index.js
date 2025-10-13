 const card1 = document.getElementById('card1');

  card1.addEventListener('click', () => {
    card1.classList.toggle('active');
  });



  const card2 = document.getElementById('successCard');

  card2.addEventListener('click', () => {
    card2.classList.toggle('active');
  });

  const ssbCard = document.getElementById('ssbCard');

  ssbCard.addEventListener('click', () => {
    ssbCard.classList.toggle('active');
  });

  const motorcycleCard = document.getElementById('motorcycleCard');

  motorcycleCard.addEventListener('click', () => {
    motorcycleCard.classList.toggle('active');
  });


// Counter Animation on Scroll


  const counters = document.querySelectorAll('.counters span');
const container = document.querySelector('.counters');

let activated = false;

window.addEventListener('scroll', () => {
  if(pageYOffset > container.offsetTop - container.offsetHeight - 200 
  && !activated){ 
    counters.forEach((counter) => {
      counter.innerText = '0';

      let count = 0;

      function updateCounter() {
        const target = parseInt(counter.dataset.count);

        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
   
    activated = true;
     });
    }
     else if(pageYOffset < container.offsetTop - container.offsetHeight -500 || pageYOffset === 0 
      && activated === true
     ){

      counters.forEach((counter) => {
        counter.innerText = '0';
      });
      activated = false;
  }
 
});



// Typewriter Effect for Hero Banner

const text = "Your Digital Dilemmas, Our Expert Solutions!";
let i = 0;
const speed = 75;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;






