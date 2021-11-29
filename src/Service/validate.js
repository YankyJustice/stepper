export const validate = (currentInput, formInputs) => {
	let error = []
	const name = currentInput.target.name
	const value = currentInput.target.value
	const options = formInputs.find(input => input.name === name)

	if (options.max_length) {
		!(value.length <= options.max_length) && error.push('error')
	}

	if (options.min_length) {
		!(value.length >= options.min_length) && error.push('error')
	}

	if (options.type === 'EMAIL'){
		const regExpForEmail = new RegExp(/\S+@\S+\.\S+/)
		!regExpForEmail.test(value) && error.push('error')
	}

	if (options.regex) {
		const regExp = new RegExp(options.regex)
		!regExp.test(value) && error.push('error')
	}

	if (options.min) {
		!(Number(value) >= Number(options.min)) && error.push('error')
	}

	if (options.max) {
		!(Number(value) <= Number(options.max)) && error.push('error')
	}

	return error.length > 0 ? false : true

}