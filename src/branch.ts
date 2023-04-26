import Bank from './bank';
import Customer from './customer';

export default class Branch {
  private name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getCustomers = (): Customer[] => {
    return this.customers;
  };
}
