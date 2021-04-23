class Employee {
    constructor(employeeDetails) {
        this.employeeId = employees.length + 1;
        this.firstName = employeeDetails.firstName;
        this.lastName = employeeDetails.lastName;
        this.preferredName = employeeDetails.preferredName;
        this.email = employeeDetails.email;
        this.jobTitle = employeeDetails.jobTitle;
        this.office = employeeDetails.office;
        this.department = employeeDetails.department;
        this.phoneNumber = employeeDetails.phoneNumber;
        this.skypeId = employeeDetails.skypeId;
    }
}