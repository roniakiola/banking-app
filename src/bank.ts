import Customer from './customer';
import Branch from './branch';

export default class Bank {
  private name: string;
  private branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch(branch: Branch): boolean {
    if (this.branches.includes(branch)) {
      return false;
    } else {
      this.branches.push(branch);
      return true;
    }
    // this.branches.includes(branch) ? false : this.branches.push(branch) && true;
  }
  addCustomer(branch: Branch, customer: Customer): boolean {
    if (branch.getCustomers().includes(customer)) {
      return false;
    } else {
      branch.getCustomers().push(customer);
      return true;
    }
  }
  addCustomerTransaction(branch: Branch, id: string, amount: number): boolean {
    if (this.checkBranch(branch)) {
      const customer = branch.findCustomer(id);
      customer?.addTransaction(amount);
      return true;
    }
    return false;
  }
  checkBranch(branch: Branch): boolean {
    return this.branches.includes(branch) ? true : false;
  }
  findBranchByName(name: string) {
    return this.branches.filter((branch) => branch.getName() === name);
  }
  listCustomers(branch: Branch, displayTransAct: boolean): boolean {
    const foundBranch = this.checkBranch(branch);
    if (!foundBranch) {
      return false;
    }
    if (foundBranch && displayTransAct) {
      const customers = branch.getCustomers();
      customers.forEach((customer) => {
        let customerId = customer.getId();
        console.log(branch.findCustomer(customerId), customer.getBalance());
      });
      return true;
    }
    return true;
  }
}
