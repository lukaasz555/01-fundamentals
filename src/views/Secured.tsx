import { FunctionComponent } from 'react';
import Login from './Login';

const VALID_TOKEN = 'f3823903b2dd6e35243b1bbe5a14f651';

function useAuth(): boolean {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const token = urlSearchParams.get('token');

	if (!token) return false;
	if (token === VALID_TOKEN) return true;
	return false;
}

interface SecuredProps {}

const Secured: FunctionComponent<SecuredProps> = () => {
	const isAuth = useAuth();
	if (!isAuth) return <Login />;
	return <h1>Secured</h1>;
};

export default Secured;
