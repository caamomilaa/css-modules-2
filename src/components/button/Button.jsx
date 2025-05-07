import styles from './button.module.css';

const Button = ({ children }) => {
	const buttonStyles = `${styles.button}`;
	return <button className={buttonStyles}>{children}</button>;
};
export default Button;
