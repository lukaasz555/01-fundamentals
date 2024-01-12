import './Char.css';

interface CharProps {
	inputValue: string;
	label: string;
	index: number;
	isDisabled: boolean;
	isVisible: boolean;
	onChange: (index: number, inputValue: string) => void;
}

export const Char = ({ ...props }: CharProps) => {
	const { isDisabled, inputValue, isVisible, label, onChange, index } = props;

	const updateValue = (val: string) => onChange(index, val);

	return (
		<div className='char__container'>
			<input
				value={inputValue}
				type={isVisible ? 'text' : 'password'}
				disabled={isDisabled}
				maxLength={1}
				onChange={(e) => updateValue(e.target.value)}
			/>
			<p className='char__container--label'>{label}</p>
		</div>
	);
};
