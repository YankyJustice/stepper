import {useState} from 'react';

import {Input} from '../Input';
import {validate} from '../../Service/validate';

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

	const changeValue = (e) => {
		const valid = validate(e, formInputs)
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
		if (step > 0) {
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
			{formInputs.map((input, index) => (
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
			)}
			{step < 3
				?
				<button onClick={nextStep} className={style.next}>Продолжить</button>
				:
				<button onClick={endStepper} className={style.next}>Завершить</button>
			}
			<button onClick={prevStep} className={style.prev}>Назад</button>
		</div>
	)
}