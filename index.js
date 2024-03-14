let tl = gsap.timeline();

tl.from(['header .wrapper .logo','header .wrapper nav a'],{
    y:"-100%",
    delay:0.2,
    stagger:0.2,
    duration:0.4
})
tl.from(['.heroContentContainer .bound h2'],{
    y:"100%",
    delay:-0.8,
    stagger:0.2,
    duration:0.4
})
tl.from(['.hero .wrapper>img.bg'],{
    scale:4,
    zIndex:2,
    x:'100%',
    rotate:'45deg',
    opacity:0,
    duration:0.5
})
