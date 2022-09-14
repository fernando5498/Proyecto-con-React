import ScrollReveal from "scrollreveal"
function AnimationInit() {
	const sr = ScrollReveal({
		origin: "top",
		distance: "60px",
		duration: 2500,
		delay: 400,
	})
	sr.reveal(".Profile-data-border")
	sr.reveal(".Profile-data-name", { delay: 500 })
	sr.reveal(".Profile-data-profession", { delay: 600 })
	sr.reveal(".Profile-social", { delay: 700 })
	sr.reveal(".Profile-info-group", { interval: 100, delay: 600 })
	sr.reveal(".Profile-buttons", { delay: 800 })
	sr.reveal(".Filters-content", { delay: 900 })
	sr.reveal(".Filters", { delay: 1000 })
}

export default AnimationInit
