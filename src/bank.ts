class Bank {
  private name: string;
  private branches: Branch[];
  constructor(name: string) {
    this.name = name;
    this.branches = [];
  }
  addBranch = (branch: Branch): boolean => {
    if (this.branches.includes(branch)) {
      return false;
    } else {
      this.branches.push(branch);
      return true;
    }
    // this.branches.includes(branch) ? false : this.branches.push(branch) && true;
  };
  addCustomer = (branch: Branch, customer: Customer): boolean => {
    if (branch.customers.includes(customer)) {
      return false;
    } else {
      branch.customers.push(customer);
    }
  };
}
