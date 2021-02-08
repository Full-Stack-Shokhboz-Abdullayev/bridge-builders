const form = document.querySelector(".inputs")
const successMsg = document.querySelector(".success-msg")
const inputs = form.querySelectorAll("input, select")
const smErrorMsg = document.querySelectorAll(".small-error-hint")
const errorTab = document.querySelector(".error")

form.addEventListener("submit", (e) => {
	e.preventDefault()
	let noErrors = true
	inputs.forEach((i) => {
		console.log(i)
		if (!noErrors) {
			return
		}
		if (i.value.trim() !== "") {
			noErrors = true
			return
		}
		noErrors = false
	})

	if (noErrors) {
		form.classList.add("d-none")
		successMsg.classList.remove("d-none")
		successMsg.classList.add("d-block")
	} else {
		errorTab.classList.add("error-shown")
		inputs.forEach((i, index) => {
			if (i.value.trim() === "") {
				console.log(i)
				i.classList.add("form-control-error")
				smErrorMsg[index].classList.add("small-error-hint-shown")
			}

			if (i.value.trim() !== "") {
				i.classList.remove("form-control-error")
				smErrorMsg[index].classList.remove("small-error-hint-shown")
			}

			if (i.id === "phone" && i.value.trim() === "+7") {
				i.classList.add("form-control-error")
				smErrorMsg[index].classList.add("small-error-hint-shown")
			}
		})
	}
})
