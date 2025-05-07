import styles from './summarylabel.module.css';

const SummaryLabel = ({ icon, text, result, color }) => {
	const labelStyles = `${styles.label} ${styles[color]}`;
	const textStyles = `${styles[color]}`;
	const resultsStyles = `${styles.result}`;
	const resultofStyles = `${styles.resultof}`;
	return (
		<div className={labelStyles}>
			<div className={styles.topics}>
				<img src={icon} alt='' />
				<span className={textStyles}>{text}</span>
			</div>
			<div className={styles.resultscontainer}>
				<span className={resultsStyles}>{result}</span>
				<span className={resultofStyles}> / 100</span>
			</div>
		</div>
	);
};

export default SummaryLabel;
