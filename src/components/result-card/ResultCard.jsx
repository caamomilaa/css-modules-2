import styles from './resultcard.module.css';

const ResultCard = () => {
	const cardStyles = `${styles.card}`;
	const titleStyles = `${styles.title}`;
	const resultContainerStyles = `${styles.resultcontainer}`;
	const messageContainerStyles = `${styles.messagecontainer}`;
	const subtitleStyles = `${styles.subtitle}`;
	const textStyles = `${styles.text}`;
	return (
		<section className={cardStyles}>
			<h2 className={titleStyles}>Your result</h2>
			<div className={resultContainerStyles}>
				<span className={styles.result}>76</span>
				<span className={styles.resultof}>of 100</span>
			</div>
			<div className={messageContainerStyles}>
				<h3 className={subtitleStyles}>Great</h3>
				<p className={textStyles}>
					Your performance exceed 65% of the people conducting the test here!
				</p>
			</div>
		</section>
	);
};

export default ResultCard;
