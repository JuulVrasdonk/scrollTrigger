gsap.registerPlugin(ScrollTrigger);


gsap.to('.headingtext', {
    duration: 1,
    repeat: -1,
    yoyo: true,
    opacity: .3
})

gsap.to('.A', {
    scrollTrigger: {
        trigger: '.A',
        scrub: true,
        markers: true, 
        start: "20px 80%",
        end: "bottom 100px"
    },
    y: -100,
    backgroundColor: "#00ccff",
    scale: 2
})
gsap.to('.B', {
    scrollTrigger: '.B',
    duration: 1,
    x: 400,
    borderRadius: '50%'
})