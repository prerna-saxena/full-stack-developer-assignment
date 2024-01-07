document.addEventListener('DOMContentLoaded', function () {
  videojs('videoPlayer');
});

function loadVideo() {
  const videoInput = document.getElementById('videoInput');
  const videoPlayer = videojs('videoPlayer');
  
  const file = videoInput.files[0];
  const videoURL = URL.createObjectURL(file);
  
  videoPlayer.src({ type: 'video/mp4', src: videoURL });
}

function addSubtitle() {
  const subtitleInput = document.getElementById('subtitleInput');
  const subtitleList = document.getElementById('subtitleList');
  const videoPlayer = videojs('videoPlayer');
  
  const currentTime = videoPlayer.currentTime();
  const subtitleText = subtitleInput.value.trim();

  if (subtitleText !== '') {
    const subtitleElement = document.createElement('div');
    subtitleElement.innerHTML = `<strong>${formatTime(currentTime)}</strong>: ${subtitleText}`;
    subtitleList.appendChild(subtitleElement);

    subtitleInput.value = ''; // Clear the input field
  }
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
