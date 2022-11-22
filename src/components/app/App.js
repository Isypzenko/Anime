import Header from '../Header'

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Header />

      <div>{count}</div>
      <div onClick={() => dispatch(increment())}>+</div>
      <div onClick={() => dispatch(decrement())}>-</div>

    </>
  )
}


export default App;