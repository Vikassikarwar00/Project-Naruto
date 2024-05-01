var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub: true,
    marker: true,
}})

tl.to("#fanta", {
    top: "105%",
    left: "3.5%",
}, 'orange')
tl.to("#orange-cut", {
    top: "160%",
    left: "23%",
}, 'orange')
tl.to("#orange", {
    width: "15%",
    top: "160%",
    right: "10%",
}, 'orange')
tl.to("#leaf", {
    top: "110%",
    rotate: "150deg",
    left: "80%",
}, 'orange')
tl.to("#leaf2", {
    top: "110%",
    rotate: "150deg",
    left: "0%",
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".third",
    start:"0% 95%",
    end:"20% 50%",
    scrub: true,
    marker: true,
}}, 'ca')

tl2.from(".lemon1", {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
}, 'ca')
tl2.from("#cocacola", {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2", {
    rotate: "90deg",
    left: "100%",
    top: "110%",
}, 'ca')
tl2.from("#sprite", {
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut", {
    width: "21%",
    left: "40%",
    top: "205%",
}, 'ca')
tl2.to("#fanta", {
    width: "25%",
    top: "205%",
    left: "38%",
}, 'ca')