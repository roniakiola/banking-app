import Customer from './customer';

export default class Branch {
  private name: string;
  private customers: Customer[];

  constructor(name: string) {
    this.name = name;
    this.customers = [];
  }
  getName() {
    return this.name;
  }
  getCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(customer: Customer): boolean {
    if (
      this.customers.some(
        (oldCustomer) => oldCustomer.getId() === customer.getId()
      )
    ) {
      return false;
    }
    this.customers.push(customer);
    return true;
  }
  addCustomerTransaction(id: string, amount: number): boolean {
    const customer = this.findCustomer(id);
    if (customer) {
      customer.addTransaction(amount);
      return true;
    }
    return false;
  }
  findCustomer(id: string) {
    return this.customers.find((customer) => customer.getId() === id) || null;
  }
}
