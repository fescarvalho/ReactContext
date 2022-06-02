/* import { useContext } from 'react'; */
/* import { CounterContext } from '../context/CounterContext'; */
import CounterAdd from '../components/CounterAdd';

//4-rafatorando o hook de context
import { useCounterContext } from '../hooks/useCounterContext';

const Home = () => {
  /*   const { counter } = useContext(CounterContext); */
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Usuarios Logados: {counter}</p>
      <CounterAdd />
    </div>
  );
};

export default Home;
