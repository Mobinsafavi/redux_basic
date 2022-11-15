import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../store/storeIndex';

const Counter = () => {
  
  const counter = useSelector (state => state.counter.counter)
  const showCounter = useSelector (state => state.counter.showCounter)
  const dispatch = useDispatch()
  
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const incrementByValueHandler = () => {
    dispatch(counterActions.incrementByAmount(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.counterShowToggeler())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment counter</button>
        <button onClick={incrementByValueHandler}>increment counter by 10</button>
        <button onClick={decrementHandler}>decrement counter</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
