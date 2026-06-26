document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlife-video');
    const actionBtn = document.getElementById('action-btn');
    const videoWrapper = document.querySelector('.video-wrapper');

    // Update button text based on video playback state
    video.addEventListener('play', () => {
        actionBtn.textContent = 'Hide Video';
    });

    video.addEventListener('pause', () => {
        actionBtn.textContent = 'Play Video';
    });

    video.addEventListener('ended', () => {
        actionBtn.textContent = 'Play Video';
    });

    // Handle button click logic
    actionBtn.addEventListener('click', () => {
        if (video.paused) {
            // Ensure the container is visible if it was previously hidden, then play
            videoWrapper.style.display = 'block';
            video.play();
        } else {
            // Pause the video and hide the container
            video.pause();
            videoWrapper.style.display = 'none';
            actionBtn.textContent = 'Play Video';
        }
    });
});
