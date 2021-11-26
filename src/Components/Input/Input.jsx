import cn from 'classnames'
import style from './input.module.css'

export const Input = ({changeValue, initial, name, id, step, type, label}) => {
	return (
			<input
				name={name}
				onChange={(e) => changeValue(e)}
				value={initial.value}
				placeholder={label}
				style={id === step ? {visibility: "visible"} : {visibility: "hidden"}}
				type={type}
				className={cn({[style.error]: !initial.valid}, style.input)}
			/>)
}