import Bank from './bank';
import Customer from './customer';
import Branch from './branch';
import Transaction from './transaction';

const arizonaBank = new Bank('Arizona');
const westBranch = new Branch('West Branch');
const customer1 = new Customer('John');

console.log(arizonaBank, westBranch, customer1);
