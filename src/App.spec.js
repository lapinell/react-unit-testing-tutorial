// unit tests. They only test small parts of your 
// application in isolation.

// functions are perfect candidates for unit tests 
// because they only take an input and return an output
import { doIncrement, doDecrement } from './App';

// "describe"-block defines the test suite
describe('Local State', () => {
  
  //"it"-blocks define the test cases
  it('should increment the counter in state', () => {
   
    // the simplest procedure to write a test in a 
    // "it"-block in three steps is: arrange, act, assert
    const state = { counter: 0 };
    const newState = doIncrement(state);

    expect(newState.counter).to.equal(1);
  });

  it('should decrement the counter in state', () => {
    const state = { counter: 0};
    const newState = doDecrement(state);

    expect(newState.counter).to.equal(-1);
  })
})