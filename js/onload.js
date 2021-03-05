Object.defineProperty(HTMLMediaElement.prototype, "playing", {
	get: function () {
		return !!(
			this.currentTime > 0 &&
			!this.paused &&
			!this.ended &&
			this.readyState > 2
		)
	}
})

window.addEventListener("load", async function () {
	const video = document.querySelector("#autoplay")
	await video.play()
	if (!video.playing) {
		const interval = setInterval(async () => {
			await video.play()
			if (video.playing) {
				clearInterval(interval)
				console.log("Video is playing.")
			}
		}, 1000)
	} else {
		console.log("Video is playing.")
	}
})
