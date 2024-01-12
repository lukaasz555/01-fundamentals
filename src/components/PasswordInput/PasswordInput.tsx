import { useEffect, useState } from 'react';
import { Char } from './Char/Char';
import { getChars } from '../../data/password.helpers';
import './PasswordInput.css';

interface PasswordInputProps {
	password: string;
	onSuccess: () => void;
}

export class CharItem {
	value: string;
	isValid = false;
	isDisabled = true;
	inputValue = '';

	constructor(value: string, isDisabled: boolean) {
		this.value = value;
		this.isDisabled = isDisabled;
		this.isValid = isDisabled ? true : false;
	}

	setInputValue(inputValue: string) {
		this.inputValue = inputValue;
		this.v$();
	}

	v$() {
		if (this.inputValue === this.value) {
			this.isValid = true;
		} else this.isValid = false;
	}
}

export const PasswordInput = ({ password, onSuccess }: PasswordInputProps) => {
	const [chars, setChars] = useState<CharItem[]>([]);
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	function handleUpdate(index: number, inputValue: string): void {
		const updatedChars = [...chars];
		updatedChars[index].setInputValue(inputValue);
		setChars(updatedChars);
		validatePassword();
	}

	const validatePassword = () => {
		if (chars.every((char) => !!char.isValid)) setTimeout(() => onSuccess());
	};

	useEffect(() => {
		setChars(getChars(password));
	}, []);

	const onToggle = () => setPasswordVisible(!isPasswordVisible);

	return (
		<div>
			<div className='input__wrapper'>
				{chars.map(({ inputValue, isDisabled }, index) => (
					<Char
						key={index}
						isVisible={isDisabled ? false : isPasswordVisible}
						inputValue={inputValue}
						index={index}
						isDisabled={isDisabled}
						label={String(index + 1)}
						onChange={handleUpdate}
					/>
				))}
				<div onClick={onToggle} style={{ marginLeft: '15px' }}>
					<label>
						<input
							type='checkbox'
							checked={isPasswordVisible}
							onChange={onToggle}
						/>
						show password
					</label>
				</div>
			</div>
		</div>
	);
};
