import { FunctionComponent } from 'react';
import './ModalContent.css';

interface ModalContentProps {
	children: React.ReactNode;
}

const ModalContent: FunctionComponent<ModalContentProps> = ({
	children,
}: ModalContentProps) => {
	return <main>{children}</main>;
};

export default ModalContent;
