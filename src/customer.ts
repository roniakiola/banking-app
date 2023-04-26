import Transaction from './transaction';

export default class Customer {
  private name: string;
  private id: string;
  private transactions: Transaction[];
  constructor(name: string) {
    this.id = String(Date.now() + Math.floor(Math.random() * 100));
    this.name = name;
    this.transactions = [];
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getTransactions() {
    return this.transactions;
  }
  getBalance() {
    //b.amount = transaction.amount
    return this.transactions.reduce((a, b) => a + b.amount, 0);
  }
  addTransaction(amount: number): boolean {
    if (this.getBalance() + amount >= 0) {
      const newTransaction = { amount, date: new Date() };
      this.transactions.push(newTransaction);
      return true;
    }
    return false;
  }
}
