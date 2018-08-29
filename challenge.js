const counter = document.getElementById('counter');
const minusButton = document.getElementById('-');
const plusButton = document.getElementById('+');
const minus5Button = document.getElementById('-5');
const plus5Button = document.getElementById('+5');
const likeButton = document.getElementById('<3');
const likesText = document.querySelector('.likes');
const pauseButton = document.getElementById('pause');
const commentSubmitButton = document.getElementById('submit');
const form = document.getElementById('comment-form')
let likeHash = {};
let seconds = 0;
let isPaused = false;

setInterval(() => {
  if (!isPaused){
    changeCounter(1);
  } 
}, 1000)

function changeCounter(num) {
  seconds += num
  displayLikes()
  counter.innerHTML = seconds;
}

function displayLikes() {
  likeHash[seconds] = (likeHash[seconds] || 0);
  likesText.innerHTML = `Total Likes: ${likeHash[seconds]}`;
}

function addLike() {
  likeHash[seconds] = likeHash[seconds] + 1;
  displayLikes();
}

function togglePause() {
  isPaused ? pauseButton.innerHTML = "pause" : pauseButton.innerHTML = "resume";
  isPaused = !isPaused;
}

function addComment(e) {
  let commentText = document.getElementById('input').value;
  const ul = document.getElementById('list');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(commentText));
  ul.appendChild(li);
  e.preventDefault;
  form.reset();
}

minusButton.addEventListener('click', ()=> changeCounter(-1));
plusButton.addEventListener('click', ()=> changeCounter(1));
minus5Button.addEventListener('click', ()=> changeCounter(-5));
plus5Button.addEventListener('click', ()=> changeCounter(5));
likeButton.addEventListener('click', ()=> addLike());
pauseButton.addEventListener('click', ()=> togglePause());
form.addEventListener('submit', e => e.preventDefault())
commentSubmitButton.addEventListener('click', (e)=> addComment(e));



