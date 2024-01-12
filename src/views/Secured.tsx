import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const VALID_TOKEN = 'f3823903b2dd6e35243b1bbe5a14f651';

const useAuth = (): boolean => {
	const [searchParams, setSearchParams] = useSearchParams();
	const token = searchParams.get('token');
	return token === VALID_TOKEN;
};

interface SecuredProps {}

export const Secured = ({}: SecuredProps) => {
	const isAuth = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) return navigate('/login');
	}, []);
	return <h1>Secured</h1>;
};
