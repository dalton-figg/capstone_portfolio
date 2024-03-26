const contactForm = document.getElementById('form');

const email = document.getElementById('email');
const message = document.getElementById('message');

// one event related functionality

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Thank you for the message from ${email.value}!`);

  email.value = '';
  message.value = '';
});

// second event related functionality

const wantedCopy = ['world', 'there', 'everyone', 'lorem', 'ipsum'];

const typingElement = document.getElementById('js-typing');

const typingSpeed = 250;

let i;

const generateRandIndex = () => Math.floor(Math.random() * wantedCopy.length);

const deleteCharacter = () => {
  if (typingElement.innerHTML.length > 0) {
    typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
    setTimeout(deleteCharacter, typingSpeed);
  } else {
    setTimeout(() => typeCharacter((i = 0), generateRandIndex()), 1000);
  }
};

const typeCharacter = (i, index) => {
  if (i < wantedCopy[index].length) {
    typingElement.innerHTML += wantedCopy[index][i];
    i++;
    setTimeout(() => typeCharacter(i, index), typingSpeed);
  } else {
    setTimeout(() => deleteCharacter(), 1000);
  }
};

typingElement.addEventListener('click', () => {
  if (typingElement) {
    if (typingElement.innerHTML !== '') deleteCharacter();

    if (typingElement.innerHTML === '') typeCharacter();
  }
});
