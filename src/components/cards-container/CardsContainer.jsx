import styles from './cardscontainer.module.css';

const CardsContainer = ({ children }) => {
	const cardsContainerStyles = `${styles.container}`;
	return <div className={cardsContainerStyles}>{children}</div>;
};
export default CardsContainer;
