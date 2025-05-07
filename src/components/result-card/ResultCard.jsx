import styles from './resultcard.module.css';

const ResultCard = () => {
  return (
    <section>
      <h2>Your result</h2>
      <div>
        <span>76</span>
        <span>of 100</span>
      </div>
      <div>
        <h3>Great</h3>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </section>
  );
};

export default ResultCard;
