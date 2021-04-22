var employees;

function insertTestEmployeeRecords() {
    var employee1 = new Employee({ firstName: "Vishnu", lastName: "Teja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern", office: "Hyderabad", department: "Product Engineering", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee1);
    var employee2 = new Employee({ firstName: "Bishnu", lastName: "Yeja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Bangalore", department: "Product Engineering2", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee2);
    var employee3 = new Employee({ firstName: "Kishnu", lastName: "Ueja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Mumbai", department: "Product Engineering2", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee3);
    var employee4 = new Employee({ firstName: "Pishnu", lastName: "Ieja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Delhi", department: "Product Engineering3", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee4);
    var employee5 = new Employee({ firstName: "Eishnu", lastName: "Oeja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern5", office: "Kolkata", department: "Product Engineering3", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee5);
    var employee6 = new Employee({ firstName: "Aishnu", lastName: "Peja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern6", office: "Seattle", department: "Product Engineering", phoneNumber: "7042687411", skypeId: "ffad" });  
    employees.push(employee6);
}

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

function loadLetterFilters() {
    var container = document.getElementById("letterFilters");
    for (var i = 65; i <= 90; i++) {
        var letter = String.fromCharCode(i);
        var btn = document.createElement("button");
        btn.innerHTML = letter;
        btn.id = letter + "Btn";
        btn.setAttribute("onclick", "showEmployeeByLetter(String(this.id))");
        container.appendChild(btn);
    }
}

function loadEmployeeList() {
    employees = new Array();
}

function validateEmployeeDetails() {
    var errorFlag = false;
    var firstName = document.getElementById('firstName').value;
    if (!isAlphabetic(firstName)) {
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
    if (!isAlphabetic(lastName)) {
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
    if (!isAlphabetic(preferredName)) {
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
    if (!isEmail(email)) {
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
    if (!isPhoneNumber(phoneNumber)) {
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
        var employeeDetails = {
            firstName: firstName,
            lastName: lastName,
            preferredName: preferredName,
            email: email,
            jobTitle: jobTitle,
            office: office,
            department: department,
            phoneNumber: phoneNumber,
            skypeId: skypeId
        };
        addEmployee(employeeDetails);
        generateSpecialFilters();
    }  
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

function addEmployee(employeeDetails) {
    let employee = new Employee(employeeDetails);
    employees.push(employee);
    employeeAddedMessage.style.display = "block";
    setTimeout(closeAddEmployeeForm, 2000);
    showAllEmployees();
}

function showAllEmployees() {
    document.getElementById("employeeCards").innerHTML = "";
    if (employees.length == 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        employees.forEach(displayEmployeeCard);
    }   
}

function showEmployeeByLetter(str) {
    document.getElementById("employeeCards").innerHTML = "";
    var filteredEmployees = employees.filter(filterEmployeeByLetter(str[0]));
    if (filteredEmployees.length == 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        filteredEmployees.forEach(displayEmployeeCard);
    }   
}

function showEmployeeByProperty(str, property) {
    document.getElementById("employeeCards").innerHTML = "";
    var filteredEmployees = employees.filter(filterEmployeeByProperty(str, property));
    if (filteredEmployees.length === 0) {
        document.getElementById("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        filteredEmployees.forEach(displayEmployeeCard);
    }
}

function displayEmployeeCard(item) {
    var employeeCard = document.createElement("div");
    employeeCard.className = 'card';
    employeeCard.id = String(item.employeeId) + 'Card';


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
    actionLinks.innerHTML =
        "<i class='fa fa-phone-square' aria-hidden='true'></i ><i class='fa fa-envelope' aria-hidden='true'></i><i class='fa fa-comment' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-heart' aria-hidden='true'></i>";


    employeeDetails.appendChild(actionLinks);


    employeeCard.appendChild(employeePhoto);
    employeeCard.appendChild(employeeDetails);

    employeeCard.setAttribute('onclick', 'showEmployeeDetails(this.id)');

    document.getElementById("employeeCards").appendChild(employeeCard);
}

function filterEmployeeByLetter(str) {
    return function (item) {
        return item.firstName[0] === str;
    }
}

function filterEmployeeByProperty(str, property) {
    return function (item) {
        return String(item[property]).toUpperCase().startsWith(str.toUpperCase()); 
    }
}

function generateSpecialFilters() {
    var departmentCounter = counter(employees.map(a => a.department));
    var officeCounter = counter(employees.map(a => a.office));
    var jobTitleCounter = counter(employees.map(a => a.jobTitle));

    departmentList.innerHTML = "";
    if (Object.keys(departmentCounter).length < 6) {
        document.getElementById('departmentViewMoreBtn').style.display = "none";
        document.getElementById('departmentList').style.marginBottom = "30px";
    }
    else {
        document.getElementById('departmentViewMoreBtn').style.display = "inline-block";
        document.getElementById('departmentList').style.marginBottom = "0";
    }
    officeList.innerHTML = "";
    if (Object.keys(officeCounter).length < 6) {
        document.getElementById('officeViewMoreBtn').style.display = "none";
        document.getElementById('officeList').style.marginBottom = "30px";
    }
    else {
        document.getElementById('officeViewMoreBtn').style.display = "inline-block";
        document.getElementById('officeList').style.marginBottom = "0";
    }
    jobTitleList.innerHTML = "";
    if (Object.keys(jobTitleCounter).length < 6) {
        document.getElementById('jobTitleViewMoreBtn').style.display = "none";
        document.getElementById('jobTitleList').style.marginBottom = "30px";
    }
    else {
        document.getElementById('jobTitleViewMoreBtn').style.display = "inline-block";
        document.getElementById('jobTitleList').style.marginBottom = "0";
    }

    for (const property in departmentCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(departmentCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.className = "departmentFilter specialFilter";
        filter.setAttribute("onclick", "showEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"department\")");
        document.getElementById("departmentList").appendChild(filter);
    }
    for (const property in officeCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(officeCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.className = "officeFilter specialFilter";
        filter.setAttribute("onclick", "showEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"office\")");
        document.getElementById("officeList").appendChild(filter);
    }
    for (const property in jobTitleCounter) {
        var filter = document.createElement("li");
        filter.innerHTML = String(property) + " (" + String(jobTitleCounter[property]) + ")";
        filter.id = String(property) + "Filter";
        filter.className = "jobTitleFilter specialFilter";
        filter.setAttribute("onclick", "showEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), \"jobTitle\")");
        document.getElementById("jobTitleList").appendChild(filter);
    }
}

function counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function clearKeywordField() {
    document.getElementById('keywordTxt').value = "";
}

function showAddEmployeeForm() {
    document.getElementById("addEmployeeModal").style.display = "block";
    document.getElementById("employeeAddedMessage").style.display = "none";
}

function closeAddEmployeeForm() {
    var addFields = document.getElementsByClassName("addField");
    for (var k = 0; k < addFields.length; k++) {
        addFields[k].value = "";
    }
    var errorSigns = document.getElementsByClassName("errorSign");
    for (var k = 0; k < addFields.length; k++) {
        errorSigns[k].value = "";
    }
    document.getElementById("employeeAddedMessage").style.display = "none";
    document.getElementById("addEmployeeModal").style.display = "none";
}

//window.onclick = function (event) {
//    if (event.target == document.getElementById("addEmployeeModal")) {
//        document.getElementById("addEmployeeModal").style.display = "none";
//    }
//}

function showEmployeeDetails(id) {
    document.getElementById('updatedMessage').style.display = "none";
    document.getElementById("employeeDetailsModal").style.display = "block";
    var employee = employees.find(i => String(i.employeeId) === id[0]);
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

function closeEmployeeDetails() {
    document.getElementById("employeeDetailsModal").style.display = "none";
}

//window.onclick = function (event) {
//    if (event.target == document.getElementById("employeeDetailsModal")) {
//        document.getElementById("employeeDetailsModal").style.display = "none";
//    }
//}

function editDetails(fieldId) {
    document.getElementById(fieldId).removeAttribute('readonly');
    var button = document.getElementById("updateBtn");
    button.removeAttribute("readonly");
    button.setAttribute("onclick", "updateDetails(String(document.querySelector('#employeeIdDetails').value), fetchUpdatedValue())");
} 

function updateDetails(empId, updatedFieldAndValue) {
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
    setTimeout(closeEmployeeDetailsForm, 2000);
}

function fetchUpdatedValue() {
    var updateFields = document.getElementsByClassName('updateField');
    for (var k = 0; k < updateFields.length; k++) {
        if (updateFields[k].hasAttribute("readonly")) {
            return updateFields[k].id + " " + updateFields[k].value;
            break;
        }
    }
}

function closeEmployeeDetailsForm() {
    document.getElementById("employeeDetailsModal").style.display = "none";
}

function autofillPreferredName(str){
    document.getElementById('preferredName').value = String(str);
}

function viewMoreItems(btnId) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = document.getElementById(listId).querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove('specialFilter');
    }
    document.getElementById(btnId).innerHTML = "Show Less";
    document.getElementById(btnId).setAttribute("onclick", "viewLessItems(String(this.id))");
}

function viewLessItems(btnId) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = document.getElementById(listId).querySelectorAll('li');
    for (var i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('specialFilter');
    }
    document.getElementById(btnId).innerHTML = "Show More";
    document.getElementById(btnId).setAttribute("onclick", "viewMoreItems(String(this.id))");
}