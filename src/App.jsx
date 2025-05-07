import CardsContainer from './components/cards-container/CardsContainer';
import ResultCard from './components/result-card/ResultCard';
import SummaryCard from './components/summary-card/SummaryCard';

const App = () => {
  return (
    <CardsContainer>
      <ResultCard />
      <SummaryCard />
    </CardsContainer>
  );
};

export default App;
