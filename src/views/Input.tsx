import { PasswordInput } from '../components/PasswordInput/PasswordInput';

export const Input = () => {
	return (
		<div>
			<PasswordInput
				password='hAslo2024'
				onSuccess={() => alert('Poprawne hasło')}
			/>
		</div>
	);
};
