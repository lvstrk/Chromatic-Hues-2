let scroll = 0
document.addEventListener('wheel', (e) => {
    const container = document.getElementById('section-scrolling')
    if (e.deltaY < 0) {
        scroll = scroll > 60 ? scroll - 60 : 0
        container.style.transform = `translateX(-${scroll}px)`
    } else if (e.deltaY > 0) {
        scroll = scroll > container.scrollWidth - container.clientWidth / 2 ? scroll : scroll += 60
        container.style.transform = `translateX(-${scroll}px)`
    }
})

// Get all album images
const albumImages = document.querySelectorAll('.row img');

// Loop through each image and add hover event listeners
albumImages.forEach(image => {
    image.addEventListener('click', (e) => {
        // Get the corresponding audio element using the next sibling

        const url = e.target.getAttribute('filesong')

        document.getElementById('audio').setAttribute('src', url)

        // const audioElement = image.nextElementSibling;
        
        // // Check if the next sibling is an audio element
        // if (audioElement && audioElement.tagName.toLowerCase() === 'audio') {
        //     console.log("Playing audio:", audioElement.src);  // Debugging: see which audio is being played
        //     audioElement.play().catch(err => {
        //         console.error("Error playing audio:", err);  // Log any play errors
        //     });
        // } else {
        //     console.error("No audio element found next to image:", image.src);
        // }
    });

    // Stop audio when mouse leaves the image
    // image.addEventListener('click', () => {
    //     const audioElement = image.nextElementSibling;
        
    //     // Check if the next sibling is an audio element
    //     if (audioElement && audioElement.tagName.toLowerCase() === 'audio') {
    //         console.log("Pausing audio:", audioElement.src);  // Debugging: see which audio is being paused
    //         audioElement.pause(); // Pause the audio when mouse leaves
    //         audioElement.currentTime = 0; // Reset to start
    //     } else {
    //         console.error("No audio element found next to image on mouse leave:", image.src);
    //     }
    // });
});
