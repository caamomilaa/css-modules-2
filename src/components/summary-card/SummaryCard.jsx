import { v4 } from 'uuid';
import { SUMMARY_LABELS_INFO } from '../../constants/summary-card-info';
import SummaryLabel from '../summary-label.jsx/SummaryLabel';
import Button from '../button/Button';

import styles from './summarycard.module.css';

const SummaryCard = () => {
	const cardStyles = `${styles.card}`;
	const titleStyles = `${styles.title}`;
	const labelStyles = `${styles.label}`;
	return (
		<section className={cardStyles}>
			<h2 className={titleStyles}>Summary</h2>
			<div className={labelStyles}>
				{SUMMARY_LABELS_INFO.map(label => (
					<SummaryLabel key={v4()} {...label} />
				))}
			</div>
			<Button>Continue</Button>
		</section>
	);
};
export default SummaryCard;
