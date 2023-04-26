import Bank from './bank';
import Branch from './branch';
import Transaction from './transaction';

export default class Customer {
  private name: string;
  private id: string;
  private transactions: Transaction[];
  constructor(name: string) {
    this.id = String(Date.now());
    this.name = name;
    this.transactions = [];
  }
}
