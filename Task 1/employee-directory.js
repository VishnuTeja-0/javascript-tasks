var employees;

class Employee {
    constructor(firstName, lastName, prefferedName, email, jobTitle, office, department, phoneNumber, skypeId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.prefferedName = prefferedName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.office = office;
        this.department = department;
        this.phoneNumber = phoneNumber;
        this.skypeId = skypeId;
    }
}

function LoadLetterFilters() {
    var container = document.getElementById("letterFilters");
    for (var i = 65; i <= 90; i++) {
        var letter = String.fromCharCode(i);
        var btn = document.createElement("button");
        btn.innerHTML = letter;
        btn.id = letter + "Btn";
        container.appendChild(btn);
    }
}

function LoadEmployeeList() {
    employees = new Array();
}

function validateEmployeeDetails() {
    var firstName = document.getElementById('firstName').value;
    if (!isAlphabetic(firstName)) {
        firstNameError.innerHTML = "Enter valid alphabetic input for first name";
        return;
    }
    var lastName = document.getElementById('lastName').value; 
    if (!isAlphabetic(lastName)) {
        lastNameError.innerHTML = "Enter valid alphabetic input for last name";
        return;
    }
    var preferredName = document.getElementById('preferredName').value;
    if (!isAlphabetic(preferredName)) {
        preferredNameError.innerHTML = "Enter valid alphabetic input for preffered name";
        return;
    }
    var email = document.getElementById('email').value;
    if (!isEmail(email)) {
        emailIdError.innerHTML = "Enter valid email ID";
        return;
    }
    var jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        jobTitleError.innerHTML = "Enter valid job title";
        return;
    }
    var office = document.getElementById('office').value;
    if (!office) {
        officeError.innerHTML = "Enter valid office title";
        return;
    }
    var department = document.getElementById('department').value;
    if (!department) {
        departmentError.innerHTML = "Enter valid department title";
        return;
    }
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (!isPhoneNumber(phone)) {
        phoneNumberError.innerHTML = "Enter valid phone number";
        return;
    }
    var skypeId = document.getElementById('skypeId').value;
    if (!skypeId) {
        skypeIdError.innerHTML = "Enter valid Skype ID";
        return;
    }
    AddEmployee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId);
}

function isAlphabetic(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function isEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
}

function isPhoneNumber(str) {
    return /^[0]?[789]\d{9}$/.test(str);
}

function AddEmployee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId) {
    let employee = new Employee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId);
    employees.push(employee);
    document.getElementById('employeeAddedMessage').innerHTML = "Employee successfully added to directory!";
}


