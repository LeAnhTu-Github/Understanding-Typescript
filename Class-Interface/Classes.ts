abstract class Department {
  // Static method is not call by keyword "this" and maybe call directly without new keyword new
  static fiscalYear = 2023
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department):void ;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  
  static createEmployee(name: string){
    return {name: name}
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe(): void {
      console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment
  // getter function:
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]
  }
  static createInstance(){
    if(AccountingDepartment.instance){
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }
  get mostRecentReport(){
    if(this.lastReport){
      return this.lastReport
    }
    throw new Error('No report found!!')
  }
  describe(): void {
      console.log(`Accounting Department - ID: ${this.id}`);
      
  }
  // setter function:
  set mostRecentReport(value: string){
    if(!value){
      throw new Error('Please pass in a valid value!!')
    }
    this.addReport(value)
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(employee: string): void {
      if(employee === 'Max'){
        return
      }
      this.employees.push(employee)
  }
}

// contructor static employee :
const employee1 = Department.createEmployee('Temmo')
console.log(`Department ${employee1.name} start working in ${Department.fiscalYear}`);

// const departmentEmployee = new Department('D01', 'Tristana')
// departmentEmployee.addEmployee('Gnar')
// departmentEmployee.addEmployee('Poppy')
// departmentEmployee.printEmployeeInformation()
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
// it.name = 'NEW NAME';
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.createInstance();
const accounting2 = AccountingDepartment.createInstance();

accounting.mostRecentReport = 'This is have wrong'
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.printReports();
accounting.addEmployee('Kled')
accounting.printEmployeeInformation()
accounting.describe()
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();