const SummaryLabel = ({ icon, text, result }) => {
  return (
    <div>
      <img src={icon} alt='' />
      <span>{text}</span>
      <span>{result} / 100</span>
    </div>
  );
};

export default SummaryLabel;
