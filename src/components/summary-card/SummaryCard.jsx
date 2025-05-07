import { v4 } from 'uuid';
import { SUMMARY_LABELS_INFO } from '../../constants/summary-card-info';
import SummaryLabel from '../summary-label.jsx/SummaryLabel';
import Button from '../button/Button';

const SummaryCard = () => {
  return (
    <section>
      <h2>Summary</h2>
      <div>
        {SUMMARY_LABELS_INFO.map(label => (
          <SummaryLabel key={v4()} {...label} />
        ))}
      </div>
      <Button>Continue</Button>
    </section>
  );
};
export default SummaryCard;
