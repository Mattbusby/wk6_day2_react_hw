import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  // let button1;
  // let button2;
  // let button3;
  // let button4;
  // let button5;
  // let button6;
  // let button7;
  // let button8;
  // let button9;
  // let button0;
  // let divide;
  // let multiply;
  // let subtract;
  // let add;
  // let equalsButton;
  // let runningTotal;
  // let .simulate;
  
  beforeEach(() => {
    container = mount(<Calculator/>)
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const button5 = container.find('#number5');
    const button6 = container.find('#number6');
    const button7 = container.find('#number7');
    const button8 = container.find('#number8');
    const button9 = container.find('#number9');
    const button0 = container.find('#number0');
    const divide = container.find('#operator-divide');
    const multiply = container.find('#operator-multiply');
    const subtract = container.find('#operator-subtract');
    const add = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear');
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('Should be able to add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const add = container.find('#operator_add');
    const button4 = container.find('#number4');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('Should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.find('#number7');
    const subtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const multiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('Should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const divide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to concatenate multiple number button clicks', () => {
    const button6 = container.find('#number6');
    const runningTotal = container.find('#running-total');
    button6.simulate('click');
    button6.simulate('click');
    button6.simulate('click');
    expect(runningTotal.text()).toEqual('666');
  })

  it('Should be able to chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const multiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const button3 = container.find('#number3');
    const add = container.find('#operator_add');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    add.simulate('click');
    button3.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('13');
  })

  it('Should be able to clear the running total without affecting the calculation', () => {
    const button1 = container.find('#number1');
    const add = container.find('#operator_add');
    const button4 = container.find('#number4');
    const button2 = container.find('#number2');
    const equalsButton = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    clear.simulate('click');
    add.simulate('click');
    button2.simulate('click');
    equalsButton.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

})