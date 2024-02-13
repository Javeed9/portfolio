const lazyLoading = () => {const lazyImgs = document.querySelectorAll('.lazy');

const observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.src=img.dataset.src;
            observer.unobserve(entry.target)
            img.classList.remove('loading');
            img.classList.add('loaded');
        }
    })
}, {});

// root:null,rootMargin:'0px',threshold:0,
lazyImgs.forEach(img=> {
    observer.observe(img);
})

}

export default lazyLoading