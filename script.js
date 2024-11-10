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
