import Bank from './bank';
import Customer from './customer';
import Branch from './branch';

const arizonaBank = new Bank('Arizona');
const westBranch = new Branch('West Branch');
const customer1 = new Customer('John');

arizonaBank.addBranch(westBranch);
arizonaBank.addCustomer(westBranch, customer1);

console.log(arizonaBank, westBranch, customer1);
console.log(westBranch.findCustomer(customer1.getId()));
customer1.addTransaction(1000);
console.log(customer1.getBalance());
customer1.addTransaction(-500);
console.log(customer1.getBalance());
console.log(customer1.getTransactions());
