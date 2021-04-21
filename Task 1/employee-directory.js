var employees;

function InsertTestEmployeeRecords() {
    var employee1 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Hyderabad", "Product Engineering", "7042687411", "ffad");
    var employee3 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Delhi", "Product Engineering", "7042687411", "ffad");
    var employee4 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Mumbai", "Product Engineering", "7042687411", "ffad");
    var employee5 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Bangalore", "Product Engineering", "7042687411", "ffad");
    var employee6 = new Employee("Vishnu", "Teja", "Vishnu", "vishnu.9999.l5@gmail.com", "Intern", "Kolkata", "Product Engineering", "7042687411", "ffad");
    var employee2 = new Employee("Krishna", "Aditya", "Krishna", "baenus2003@gmail.com", "Intern", "Seattle", "Product Engineering", "8368290428", "gggg");
    employees.push(employee1);
    employees.push(employee2);
    employees.push(employee3);
    employees.push(employee4);
    employees.push(employee5);
    employees.push(employee6);
}

class Employee {
    constructor(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId) {
        this.employeeId = firstName[0] + lastName[0] + this.getDate();
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferredName = preferredName;
        this.email = email;
        this.jobTitle = jobTitle;
        this.office = office;
        this.department = department;
        this.phoneNumber = phoneNumber;
        this.skypeId = skypeId;
    }

    getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        return yyyy + mm + dd;
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
    var errorFlag = false;
    var firstName = document.getElementById('firstName').value;
    if (!IsAlphabetic(firstName)) {
        firstNameError.innerHTML = "&times;";
        document.getElementById("firstName").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        firstNameError.innerHTML = "";
        document.getElementById("firstName").style.borderColor = "black";
        errorFlag = false;
    }   
    var lastName = document.getElementById('lastName').value; 
    if (!IsAlphabetic(lastName)) {
        lastNameError.innerHTML = "&times;";
        document.getElementById("lastName").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        lastNameError.innerHTML = "";
        document.getElementById("lastName").style.borderColor = "black";
        errorFlag = false;
    }
    var preferredName = document.getElementById('preferredName').value;
    if (!IsAlphabetic(preferredName)) {
        preferredNameError.innerHTML = "&times;";
        document.getElementById("preferredName").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        preferredNameError.innerHTML = "";
        document.getElementById("preferredName").style.borderColor = "black";
        errorFlag = false;
    }
    var email = document.getElementById('email').value;
    if (!IsEmail(email)) {
        emailIdError.innerHTML = "&times;";
        document.getElementById("email").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        emailIdError.innerHTML = "";
        document.getElementById("email").style.borderColor = "black";
        errorFlag = false;
    }
    var jobTitle = document.getElementById('jobTitle').value;
    if (!jobTitle) {
        jobTitleError.innerHTML = "&times;";
        document.getElementById("jobTitle").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        jobTitleError.innerHTML = "";
        document.getElementById("jobTitle").style.borderColor = "black";
        errorFlag = false;
    }  
    var office = document.getElementById('office').value;
    if (!office) {
        officeError.innerHTML = "&times;";
        document.getElementById("office").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        officeError.innerHTML = "";
        document.getElementById("office").style.borderColor = "black";
        errorFlag = false;
    }   
    var department = document.getElementById('department').value;
    if (!department) {
        departmentError.innerHTML = "&times;";
        document.getElementById("department").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        departmentError.innerHTML = "";
        document.getElementById("department").style.borderColor = "black";
        errorFlag = false;
    }   
    var phoneNumber = document.getElementById('phoneNumber').value;
    if (!IsPhoneNumber(phoneNumber)) {
        phoneNumberError.innerHTML = "&times;";
        document.getElementById("phoneNumber").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        phoneNumberError.innerHTML = "";
        document.getElementById("phoneNumber").style.borderColor = "black";
        errorFlag = false;
    }   
    var skypeId = document.getElementById('skypeId').value;
    if (!skypeId) {
        skypeIdError.innerHTML = "&times;";
        document.getElementById("skypeId").style.borderColor = "red";
        errorFlag = true;
    }
    else {
        skypeIdError.innerHTML = "";
        document.getElementById("skypeId").style.borderColor = "black";
        errorFlag = false;
    }    
    if (errorFlag) {
        return;
    }
    else {
        AddEmployee(firstName, lastName, preferredName, email, jobTitle, office, department, phoneNumber, skypeId);
        GenerateSpecialFilters();
    }  
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
    employeeAddedMessage.innerHTML = "Employee successfully added to directory!";
    setTimeout(CloseAddEmployeeForm, 2000);
    ShowAllEmployees();
}

function ShowAllEmployees() {
    document.getElementById("employeeCards").innerHTML = "";
    if (employees.length == 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        employees.forEach(DisplayEmployeeCard);
    }   
}

function ShowEmployeeByLetter(str) {
    document.getElementById("employeeCards").innerHTML = "";
    var filteredEmployees = employees.filter(FilterEmployeeByLetter(str[0]));
    if (filteredEmployees.length == 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        filteredEmployees.forEach(DisplayEmployeeCard);
    }   
}

function ShowEmployeeByProperty(str, property) {
    document.getElementById("employeeCards").innerHTML = "";
    var filteredEmployees = employees.filter(FilterEmployeeByProperty(str, property));
    if (filteredEmployees.length === 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        filteredEmployees.forEach(DisplayEmployeeCard);
    }
}

function DisplayEmployeeCard(item) {
    var employeeCard = document.createElement("div");
    employeeCard.className = 'card';
    employeeCard.id = item.employeeId + 'Card';


    var employeePhoto = document.createElement("div");
    employeePhoto.innerHTML = String(item.firstName[0] + item.lastName[0]);
    employeePhoto.className = 'employeePhoto';

    var employeeDetails = document.createElement("div");
    employeeDetails.className = 'employeeDetails';



    var employeeName = document.createElement("h5");
    employeeName.innerHTML = item.firstName + " " + item.lastName;
    employeeDetails.appendChild(employeeName);

    var employeeJobTitle = document.createElement("p");
    employeeJobTitle.innerHTML = item.jobTitle;
    employeeDetails.appendChild(employeeJobTitle);

    var employeeDepartment = document.createElement("p");
    employeeDepartment.innerHTML = item.department + " Department";
    employeeDetails.appendChild(employeeDepartment);

    var actionLinks = document.createElement("div");
    actionLinks.className = 'actionLinks';
    for (var i = 0; i < 5; i++) {
        var link = document.createElement("div");
        link.innerHTML = 'o';
        link.className = 'link';
        actionLinks.appendChild(link);
    }

    employeeDetails.appendChild(actionLinks);


    employeeCard.appendChild(employeePhoto);
    employeeCard.appendChild(employeeDetails);

    employeeCard.setAttribute('onclick', 'ShowEmployeeDetails(this.id)');

    document.getElementById("employeeCards").appendChild(employeeCard);
}

function FilterEmployeeByLetter(str) {
    return function (item) {
        return item.firstName[0] === str;
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
        filter.className = "departmentFilter specialFilter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"department\")");
        document.getElementById("departmentList").appendChild(filter);
    }
    for (const property in officeCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(officeCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.className = "officeFilter specialFilter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"office\")");
        document.getElementById("officeList").appendChild(filter);
    }
    for (const property in jobTitleCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(jobTitleCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.className = "jobTitleFilter specialFilter";
        filter.setAttribute("onclick", "ShowEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"jobTitle\")");
        document.getElementById("jobTitleList").appendChild(filter);
    }
}

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function ViewMoreOffices(){
    
}

function ClearKeywordField() {
    document.getElementById('keywordTxt').value = "";
}

function ShowAddEmployeeForm() {
    document.getElementById("addEmployeeModal").style.display = "block";
}

function CloseAddEmployeeForm() {
    var addFields = document.getElementsByClassName("addField");
    for (var k = 0; k < addFields.length; k++) {
        addFields[k].value = "";
    }
    var errorSigns = document.getElementsByClassName("errorSign");
    for (var k = 0; k < addFields.length; k++) {
        errorSigns[k].value = "";
    }
    document.getElementById("addEmployeeModal").style.display = "none";
}

//window.onclick = function (event) {
//    if (event.target == document.getElementById("addEmployeeModal")) {
//        document.getElementById("addEmployeeModal").style.display = "none";
//    }
//}

function ShowEmployeeDetails(id) {
    var successMessages = document.getElementsByClassName('successMessage');
    var i;
    for (i = 0; i < successMessages.length; i++) {
        successMessages[i].style.display = "none";
    }
    document.getElementById("employeeDetailsModal").style.display = "block";
    var employee = employees.find(i => i.employeeId === String(id).substring(0, String(id).length - 4));
    document.getElementById('employeeIdDetails').value = employee.employeeId;
    document.getElementById('firstNameDetails').value = employee.firstName;
    document.getElementById('lastNameDetails').value = employee.lastName;
    document.getElementById('preferredNameDetails').value = employee.preferredName;
    document.getElementById('emailDetails').value = employee.email;
    document.getElementById('jobTitleDetails').value = employee.jobTitle;
    document.getElementById('officeDetails').value = employee.office;
    document.getElementById('departmentDetails').value = employee.department;
    document.getElementById('phoneNumberDetails').value = employee.phoneNumber;
    document.getElementById('skypeIdDetails').value = employee.skypeId;
}

function CloseEmployeeDetails() {
    document.getElementById("employeeDetailsModal").style.display = "none";
}

//window.onclick = function (event) {
//    if (event.target == document.getElementById("employeeDetailsModal")) {
//        document.getElementById("employeeDetailsModal").style.display = "none";
//    }
//}

function EditDetails(fieldId) {
    document.getElementById(fieldId).removeAttribute('readonly');
    var button = document.getElementById("updateBtn");
    button.removeAttribute("readonly");
    button.setAttribute("onclick", "UpdateDetails(String(document.querySelector('#employeeIdDetails').value), FetchUpdatedValue())");
} 

function UpdateDetails(empId, updatedFieldAndValue) {
    var fieldAndValue = updatedFieldAndValue.split(" ");
    var property = String(fieldAndValue[0]).substring(6, String(fieldAndValue[0]).length - 3);
    var updatedValue = fieldAndValue[1];
    for (var i in employees) {
        if (employees[i].employeeId == empId) {
            employees[i][property] = updatedValue;
            break;
        }
    }
    document.getElementById("updateBtn").setAttribute("readonly", "true");
    document.getElementById(fieldAndValue[0]).setAttribute("readonly", "true");
    document.getElementById("updatedMessage").style.display = "block";
    ShowAllEmployees();
    setTimeout(CloseEmployeeDetailsForm, 2000);
}

function FetchUpdatedValue() {
    var updateFields = document.getElementsByClassName('updateField');
    for (var k = 0; k < updateFields.length; k++) {
        if (updateFields[k].hasAttribute("readonly")) {
            return updateFields[k].id + " " + updateFields[k].value;
            break;
        }
    }
}

function CloseEmployeeDetailsForm() {
    document.getElementById("employeeDetailsModal").style.display = "none";
}

function AutofillPreferredName(str){
    document.getElementById('preferredName').value = String(str);
}

function ViewMoreItems(btnId) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = document.getElementById(listId).querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('specialFilter');
    }
    document.getElementById(btnId).innerHTML = "Show Less";
    document.getElementById(btnId).setAttribute("onclick", "ViewLessItems(String(this.id))");
}

function ViewLessItems(btnId) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = document.getElementById(listId).querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('specialFilter');
    }
    document.getElementById(btnId).innerHTML = "Show More";
    document.getElementById(btnId).setAttribute("onclick", "ViewMoreItems(String(this.id))");
}