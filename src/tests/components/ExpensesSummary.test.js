import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly rendedr ExpensesSummary with 0 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly rendedr ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={12345} />);
  expect(wrapper).toMatchSnapshot();
});