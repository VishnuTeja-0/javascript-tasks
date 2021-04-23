var employees = new Array();

function initializeDefaultEmployees() {
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

function initializeLetterFilters() {
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

function initialize() {
    initializeLetterFilters();
    initializeDefaultEmployees();
    showAllEmployees();
    generateSpecialFilters();
}

function isValidName(fieldId) {
    var name = document.getElementById(fieldId);
    if (isAlphabetic(name.value)) {
        document.getElementById(fieldId + "ErrorSign").innerHTML = "";
        document.getElementById(fieldId + "ErrorMessage").innerHTML = "";
        name.style.borderColor = "black";
        return true;
    }
    else if (name.value) {
        document.getElementById(fieldId + "ErrorSign").innerHTML = "&times;";
        document.getElementById(fieldId + "ErrorMessage").innerHTML = "Invalid input. Please enter alphabetic input.";
        name.style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById(fieldId + "ErrorSign").innerHTML = "&times;";
        document.getElementById(fieldId + "ErrorMessage").innerHTML = "Please fill out this field";
        name.style.borderColor = "red";
        return false;
    }
}

function isValidEmail(fieldId = "email") {
    var email = document.getElementById(fieldId);
    if (isEmail(email.value)) {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "";
        email.style.borderColor = "black";
        return true;
    }
    else if (email.value) {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "&times;";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "Invalid input. Please enter a valid email.";
        email.style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "&times;";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "Please fill out this field";
        email.style.borderColor = "red";
        return false;
    }
}

function isNotNullField(fieldId) {
    var field = document.getElementById(fieldId);
    if (field.value) {
        document.getElementById(fieldId + "ErrorSign").innerHTML = "";
        document.getElementById(fieldId + "ErrorMessage").innerHTML = "";
        field.style.borderColor = "black";
        return true;
    }
    else {
        document.getElementById(fieldId + "ErrorSign").innerHTML = "&times;";
        document.getElementById(fieldId + "ErrorMessage").innerHTML = "Please fill out this field";
        field.style.borderColor = "red";
        return false;
    }
}

function isValidPhoneNumber(fieldId = "phoneNumber") {
    var phoneNumber = document.getElementById(fieldId);
    if (isPhoneNumber(phoneNumber.value)) {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "";
        phoneNumber.style.borderColor = "black";
        return true;
    }
    else if (phoneNumber.value) {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "&times;";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "Invalid input. Please enter a valid phone number.";
        phoneNumber.style.borderColor = "red";
        return false;
    }
    else {
        document.getElementById(fieldId + 'ErrorSign').innerHTML = "&times;";
        document.getElementById(fieldId + 'ErrorMessage').innerHTML = "Please fill out this field";
        phoneNumber.style.borderColor = "red";
        return false;
    }
}

function validateEmployeeDetails() {
    var nameFields = ['firstName', 'lastName', 'preferredName'];
    var otherFields = ['jobTitle', 'office', 'department', 'skypeId'];
    var verifiedCondition = (nameFields.forEach(isValidName) & otherFields.forEach(isNotNullField) & isValidEmail() & isValidPhoneNumber());
    if (verifiedCondition) {
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
    else {
        return;
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
    document.getElementById('employeeAddedMessage').style.display = "block";
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
    
    var employeePhotoHTML = "<div class = 'employeePhoto'>" + String(item.firstName[0] + item.lastName[0]) + "</div>";

    var employeeDetailsHTML = "<div class = 'employeeDetails'>" +
                                "<h5>" + item.firstName + " " + item.lastName + "</h5>" +
                                "<p>" + item.jobTitle + "</p>" +
                                "<p>" + item.department + " Department" + "</p>" +
                                "<div class = 'actionLinks'><i class='fa fa-phone-square' aria-hidden='true'></i ><i class='fa fa-envelope' aria-hidden='true'></i><i class='fa fa-comment' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-heart' aria-hidden='true'></i></div>" +
                          "</div>";

    var employeeCardHTML = "<div class = 'card' id = '" + String(item.employeeId) + "Card" + "' onclick = 'showEmployeeDetails(this.id)'>" +
                        employeePhotoHTML +
                        employeeDetailsHTML +
                       "</div>";

    var employeeCard = document.createElement('div');
    employeeCard.innerHTML = employeeCardHTML;
    employeeCard.class = "card";
    employeeCard.id = String(item.employeeId) + 'Card';
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
    specialFilterProperties = ['department', 'office', 'jobTitle'];
    for (let i = 0; i < specialFilterProperties.length; i++) {
        let property = specialFilterProperties[i];
        document.getElementById(property + "List").innerHTML = generateFilterList(property);
    }
}

function generateFilterList(item) {
    var Counter = generateFilterCounter(employees.map(a => a[item]));
    var listId = item + "List";
    document.getElementById(listId).innerHTML = "";
    if (Object.keys(Counter).length < 6) {
        document.getElementById(item + 'ViewMoreBtn').style.display = "none";
        document.getElementById(listId).style.marginBottom = "30px";
    }
    else {
        document.getElementById(item + 'ViewMoreBtn').style.display = "inline-block";
        document.getElementById(listId).style.marginBottom = "0";
    }
    var listHTML = [];
    for (const property in Counter) {
        var filterHTML = "<li class = '" + item + "Filter specialFilter' id = '" + String(property) + "Filter' onclick = 'showEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), '" + item + "')'>" +
                            String(property) + " (" + String(Counter[property]) + ")" +
                          "</li>";
        listHTML.push(filterHTML);
    }
    return listHTML.reduce((a, b) => a + b, "");
}

function generateFilterCounter(array) {
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

function resetErrorMessages() {
    var errorSigns = document.getElementsByClassName("errorSign");
    for (let k = 0; k < errorSigns.length; k++) {
        errorSigns[k].innerHTML = "";
    }
    var errorMessages = document.getElementsByClassName("errorMessage");
    for (let k = 0; k < errorMessages.length; k++) {
        errorMessages[k].innerHTML = "";
    }
}

function closeAddEmployeeForm() {
    var addFields = document.getElementsByClassName("addField");
    for (let k = 0; k < addFields.length; k++) {
        addFields[k].value = "";
        addFields[k].style.borderColor = "black";
    }
    resetErrorMessages();
    document.getElementById("employeeAddedMessage").style.display = "none";
    document.getElementById("addEmployeeModal").style.display = "none";
}

document.getElementsByClassName('modal').onclick = function () {
    var modalWindows = document.getElementsByClassName('modal');
    for (var modal in modalWindows) {
        modal.style.display = "none";
    }
}

function showEmployeeDetails(id) {
    document.getElementById('updatedMessage').style.display = "none";
    document.getElementById("employeeDetailsModal").style.display = "block";
    var employee = employees.find(i => String(i.employeeId) === id[0]);
    var properties = Object.keys(employee);
    console.log(employee);
    for (let i = 0; i < properties.length; i++) {
        document.getElementById(properties[i] + 'Details').value = employee[properties[i]];
    }
}

function editDetails(fieldId) {
    document.getElementById(fieldId).removeAttribute('readonly');
    var button = document.getElementById("updateBtn");
    button.removeAttribute("readonly");
    button.setAttribute("onclick", "updateDetails(String(document.querySelector('#employeeIdDetails').value), fetchUpdatedValue())");
} 

function updateDetails(empId, updatedFieldAndValue) {
    var nameFields = ['firstName', 'lastName', 'preferredName'];
    var fieldAndValue = updatedFieldAndValue.split(" ");
    var property = String(fieldAndValue[0]).substring(0, String(fieldAndValue[0]).length - 7);

    if (nameFields.includes(property) && !isValidName(fieldAndValue[0])) {
        return;
    }
    else if (property == "email" && !isValidEmail(fieldAndValue[0])) {
        return;
    }
    else if (property == "phoneNumber" && !isValidPhoneNumber(fieldAndValue[0])) {
        return;
    }
    else if (!isNotNullField(fieldAndValue[0])) {
        return;
    }

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
    showAllEmployees();
    setTimeout(closeEmployeeDetailsForm, 2000);
}

function fetchUpdatedValue() {
    var updateFields = document.getElementsByClassName('updateField');
    for (var k = 0; k < updateFields.length; k++) {
        if (!updateFields[k].hasAttribute("readonly")) {
            return updateFields[k].id + " " + updateFields[k].value;
            break;
        }
    }
}

function closeEmployeeDetailsForm() {
    resetErrorMessages();
    var updateFields = document.getElementsByClassName("updateField");
    for (let k = 0; k < updateFields.length; k++) {
        if (!updateFields[k].hasAttribute("readonly")) {
            updateFields[k].style.borderColor = "black";
            break;
        }       
    }
    document.getElementById("employeeDetailsModal").style.display = "none";
}

function autofillPreferredName(str){
    document.getElementById('preferredName').value = String(str);
}

function hiddenFilterToggle(btnId, showMoreAction) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = document.getElementById(listId).querySelectorAll('li');
    if (showMoreAction) {
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('specialFilter');
            
        }
        document.getElementById(btnId).innerHTML = "Show Less";
        document.getElementById(btnId).setAttribute("onclick", "hiddenFilterToggle(String(this.id), 0)");
    }
    else {
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.add('specialFilter');

        }
        document.getElementById(btnId).innerHTML = "Show More";
        document.getElementById(btnId).setAttribute("onclick", "hiddenFilterToggle(String(this.id), 1)");
    }
    
}