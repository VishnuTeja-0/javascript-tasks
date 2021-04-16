var employees;

function InsertTestEmployeeRecords() {
    var employee1 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Hyderabad", "Product Engineering", "7042687411", "ffad");
    var employee2 = new Employee("Krishna", "Aditya", "Krishna", "baenus2003@gmail.com", "Intern", "Seattle", "Product Engineering", "8368290428", "gggg");
    employees.push(employee1);
    employees.push(employee2);
}

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
        btn.setAttribute("onclick", "ShowEmployeeByLetter(String(this.id))");
        container.appendChild(btn);
    }
}

function LoadEmployeeList() {
    employees = new Array();
}

function ValidateEmployeeDetails() {
    var firstName = document.getElementById('firstName').value;
    if (!IsAlphabetic(firstName)) {
        firstNameError.innerHTML = "Enter valid alphabetic input for first name";
        return;
    }
    var lastName = document.getElementById('lastName').value; 
    if (!IsAlphabetic(lastName)) {
        lastNameError.innerHTML = "Enter valid alphabetic input for last name";
        return;
    }
    var preferredName = document.getElementById('preferredName').value;
    if (!IsAlphabetic(preferredName)) {
        preferredNameError.innerHTML = "Enter valid alphabetic input for preffered name";
        return;
    }
    var email = document.getElementById('email').value;
    if (!IsEmail(email)) {
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
    if (!IsPhoneNumber(phoneNumber)) {
        phoneNumberError.innerHTML = "Enter valid phone number";
        return;
    }
    var skypeId = document.getElementById('skypeId').value;
    if (!skypeId) {
        skypeIdError.innerHTML = "Enter valid Skype ID";
        return;
    }
    AddEmployee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId);
    GenerateSpecialFilters();
}

function IsAlphabetic(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function IsEmail(str) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(str);
}

function IsPhoneNumber(str) {
    return /^[0]?[789]\d{9}$/.test(str);
}

function AddEmployee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId) {
    let employee = new Employee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId);
    employees.push(employee);
    document.getElementById('employeeAddedMessage').innerHTML = "Employee successfully added to directory!";
    ShowAllEmployees();
}

function ShowAllEmployees() {
    document.getElementById("employeeCards").innerHTML = "";
    employees.forEach(DisplayEmployeeCard);
}

function ShowEmployeeByLetter(str) {
    document.getElementById("employeeCards").innerHTML = "";
    var filteredEmployees = employees.filter(FilterEmployeeByLetter(str[0]));
    filteredEmployees.forEach(DisplayEmployeeCard);
}

function ShowEmployeeByProperty(str, property) {
    document.getElementById("employeeCards").innerHTML = "";
    var employeeProperty;
    switch (property) {
        case "First Name":
            employeeProperty = 'firstName';
            break;
        case "Last Name":
            employeeProperty = 'lastName';
            break;
        case "Preferred Name":
            employeeProperty = 'preferredName';
            break;
        case "Email":
            employeeProperty = 'email';
            break;
        case "Job Title":
            employeeProperty = 'jobTitle';
            break;
        case "Office":
            employeeProperty = 'office';
            break;
        case "Department":
            employeeProperty = 'department';
            break;
        case "Phone Number":
            employeeProperty = 'phoneNumber';
            break;
        case "Skype ID":
            employeeProperty = 'skypeId';
            break;
    }
    var filteredEmployees = employees.filter(FilterEmployeeByProperty(str, employeeProperty));
    filteredEmployees.forEach(DisplayEmployeeCard);
}

function DisplayEmployeeCard(item) {
    var employeeCard = document.createElement("div");

    var employeeName = document.createElement("h4");
    employeeName.innerHTML = item.firstName + " " + item.lastName;
    employeeCard.appendChild(employeeName);

    var employeeJobTitle = document.createElement("p");
    employeeJobTitle.innerHTML = item.jobTitle;
    employeeCard.appendChild(employeeJobTitle);

    var employeeDepartment = document.createElement("p");
    employeeDepartment.innerHTML = item.department;
    employeeCard.appendChild(employeeDepartment);

    document.getElementById("employeeCards").appendChild(employeeCard);
}

function FilterEmployeeByLetter(str) {
    return function (item) {
        return item.lastName.indexOf(str) === 0;
    }
}

function FilterEmployeeByProperty(str, property) {
    return function (item) {
        return String(item[property]).toUpperCase().startsWith(str.toUpperCase()); 
    }
}

function GenerateSpecialFilters() {
    var departmentCounter = Counter(employees.map(a => a.department));
    var officeCounter = Counter(employees.map(a => a.office));
    var jobTitleCounter = Counter(employees.map(a => a.jobTitle));

    departmentList.innerHTML = "";
    officeList.innerHTML = "";
    jobTitleList.innerHTML = "";

    for (const property in departmentCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(departmentCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"Department\")");
        document.getElementById("departmentList").appendChild(filter);
    }

    for (const property in officeCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(officeCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"Office\")");
        document.getElementById("officeList").appendChild(filter);
    }

    for (const property in jobTitleCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(jobTitleCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"Job Title\")");
        document.getElementById("jobTitleList").appendChild(filter);
    }
}

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function ClearKeywordField() {
    document.getElementById('keywordTxt').value = "";
}