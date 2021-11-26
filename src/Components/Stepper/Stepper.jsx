import {Input} from "../Input";
import {useState} from "react";
import style from './stepper.module.css'

export const Stepper = ({formInputs}) => {
	let initialValues = {}
	formInputs.forEach(input => {
		initialValues = {
			...initialValues,
			[input.name]: {
				valid: false,
				value: '',
			}
		}
	})

	const [formValues, setFormValues] = useState(initialValues)
	const [step, setStep] = useState(0)

	const validate = (currentInput) => {
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

	const changeValue = (e) => {
		const valid = validate(e)
		setFormValues((prevValue) => (
			{
				...prevValue,
				[e.target.name]:
					{
						valid,
						value: e.target.value
					}
			}
		))
	}

	const nextStep = () => {
		if (formValues[Object.keys(formValues)[step]].valid) {
			setStep(step + 1)
		}
	}

	const prevStep = () => {
		if (step>0) {
			setStep(step - 1)
		}
	}

	const endStepper = () => {
		if (formValues[Object.keys(formValues)[step]].valid) {
			console.log(formValues)
			setStep(0)
			setFormValues(initialValues)
		}
	}

	let Initial = (name) => formValues[name] || ''

	return (
		<div>
			{formInputs.map((input, index) => {
				return (
					<div>
						<Input
							changeValue={changeValue}
							initial={Initial(input.name)}
							name={input.name}
							label={input.label}
							id={index}
							step={step}
							type={input.type}
						/>
					</div>
				)
			})}
			{step < 3
				?
				<button onClick={nextStep} className={style.next}>Продолжить</button>
				:
				<button onClick={endStepper} className={style.next}>Завершить</button>}
			<button onClick={prevStep} className={style.prev}>Назад</button>
		</div>
	)
}