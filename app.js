// const nextButton = document.querySelector('.next-btn');
// const video = document.querySelector('.hero-video');

// const movieList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4',];
// let index = 0;
// nextButton.addEventListener('click', function () {
//     index += 1;
//     video.src = movieList[index];

//     if (index ===3){
//         index = -1;
//     }
// })

// video.addEventListener('ended', playNextVideo);

const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = [
  'videos/hero-1.mp4',
  'videos/hero-2.mp4',
  'videos/hero-3.mp4',
  'videos/hero-4.mp4',
];

let index = 0;

// Function to switch and play next video
function playNextVideo() {
  index = (index + 1) % movieList.length;
  video.src = movieList[index];
  video.load();
  video.play();
}

// Handle click
nextButton.addEventListener('click', playNextVideo);

// Handle end of video
video.addEventListener('ended', playNextVideo);





