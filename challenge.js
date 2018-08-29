// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"

const counter = document.getElementById('counter');
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const likeButton = document.getElementById('<3');
const likesText = document.querySelector('.likes');
const pauseButton = document.getElementById('pause');
const commentSubmitButton = document.getElementById('submit');
let likeHash = {}
let seconds = 0
let isPaused = false;

setInterval(() => {
  if (!isPaused){
    displayLikes()
    changeCounter('+')
  } 
}, 1000)

function changeCounter(action) {
  if (action === '-') {
    seconds--;
  } else if (action === '+') {
    seconds++;
  }
  displayLikes()
  counter.innerHTML = seconds;
}

function displayLikes() {
  likeHash[seconds] = (likeHash[seconds] || 0);
  likesText.innerHTML = `Total Likes: ${likeHash[seconds]}`
}

function addLike() {
  likeHash[seconds] = likeHash[seconds] + 1;
  displayLikes()
}

function togglePause() {
  if (isPaused) {
    pauseButton.innerHTML = "pause"
  } else {
    pauseButton.innerHTML = "resume"
  }
  isPaused = !isPaused;
}

function addComment(e) {
  let commentText = document.getElementById('input').value;
  const ul = document.getElementById('list');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(commentText));
  ul.appendChild(li);
  e.preventDefault;
}

minusButton.addEventListener('click', () => changeCounter('-'));
plusButton.addEventListener('click', () => changeCounter('+'));
likeButton.addEventListener('click', () => addLike());
pauseButton.addEventListener('click', ()=> togglePause());
commentSubmitButton.addEventListener('click', (e)=> addComment(e));



