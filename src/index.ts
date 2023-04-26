import Bank from './bank';
import Customer from './customer';
import Branch from './branch';

const arizonaBank = new Bank('Arizona');
const westBranch = new Branch('West Branch');
const EastBranch = new Branch('East Branch');
const customer1 = new Customer('John');

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(EastBranch);
arizonaBank.addCustomer(westBranch, customer1);
westBranch.addCustomerTransaction(customer1.getId(), 1000);
arizonaBank.addCustomerTransaction(EastBranch, customer1.getId(), 1000);

console.log(arizonaBank, westBranch, customer1);
console.log(westBranch.findCustomer(customer1.getId()));

customer1.addTransaction(1000);
console.log(customer1.getBalance());
customer1.addTransaction(-500);
console.log(customer1.getBalance());
console.log(customer1.getTransactions());
customer1.addTransaction(-501);
console.log(customer1.getBalance());
console.log(customer1.getTransactions());
