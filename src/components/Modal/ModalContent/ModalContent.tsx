import './ModalContent.css';

interface ModalContentProps {
	children: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
	return <main>{children}</main>;
};
