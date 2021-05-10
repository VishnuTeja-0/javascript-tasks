var employees = new Array();

initialize();

function initializeDefaultEmployees() {
    var employee1 = new Employee({id: "1", firstName: "Vishnu", lastName: "Teja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern", office: "Hyderabad", department: "Product Engineering", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee1);
    var employee2 = new Employee({id: "2", firstName: "Bishnu", lastName: "Yeja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Bangalore", department: "Product Engineering2", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee2);
    var employee3 = new Employee({id: "3", firstName: "Kishnu", lastName: "Ueja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Mumbai", department: "Product Engineering2", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee3);
    var employee4 = new Employee({id: "4", firstName: "Pishnu", lastName: "Ieja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern3", office: "Delhi", department: "Product Engineering3", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee4);
    var employee5 = new Employee({id: "5", firstName: "Eishnu", lastName: "Oeja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern5", office: "Kolkata", department: "Product Engineering3", phoneNumber: "7042687411", skypeId: "ffad" });
    employees.push(employee5);
    var employee6 = new Employee({id: "6", firstName: "Aishnu", lastName: "Peja", preferredName: "Vishnu", email: "vishnu.9999.l5@gmail.com", jobTitle: "Intern6", office: "Seattle", department: "Product Engineering", phoneNumber: "7042687411", skypeId: "ffad" });  
    employees.push(employee6);
}

function getElement(id) {
    return document.getElementById(id);
}

function getClassElements(className) {
    return document.getElementsByClassName(className);
}

function clearElement(id) {
    getElement(id).innerHTML = "";
}

function initializeLetterFilters() {
    var container = getElement("letterFilters");
    for (var i = 65; i <= 90; i++) {
        var letter = String.fromCharCode(i);
        var btn = document.createElement("button");
        btn.innerHTML = letter;
        btn.id = letter.toLowerCase() + "Btn";
        btn.setAttribute("onclick", "showEmployeeByProperty(this.id[0], 'firstName')");
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
    var name = getElement(fieldId);
    var errorMessage = (/^[a-zA-Z]+$/.test(name.value)) ? "" : (name.value ? "Invalid input. Please enter alphabetic input." : "Please fill out this field");
    getElement(fieldId + "ErrorMessage").innerHTML = errorMessage;

    if (errorMessage) {
        name.classList.add("error-border");
        return false;
    }

    name.classList.remove("error-border");
    return true;
}

function isValidEmail(fieldId = "email") {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = getElement(fieldId);
    var errorMessage = (re.test(email.value)) ? "" : (email.value ? "Invalid input. Please enter a valid email" : "Please fill out this field");
    getElement(fieldId + "ErrorMessage").innerHTML = errorMessage;

    if (errorMessage) {
        email.classList.add("error-border");
        return false;
    }

    email.classList.remove("error-border");
    return true;
}

function isNotNullField(fieldId) {
    var field = getElement(fieldId);
    var errorMessage = (field.value) ? "" : "Please fill out this field";
    getElement(fieldId + "ErrorMessage").innerHTML = errorMessage;

    if (errorMessage) {
        field.classList.add("error-border");
        return false;
    }

    field.classList.remove("error-border");
    return true;
}

function isValidPhoneNumber(fieldId = "phoneNumber") {
    var phoneNumber = getElement(fieldId);
    var errorMessage = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber.value)) ? "" : (phoneNumber.value ? "Invalid input. Please enter a valid phone number" : "Please fill out this field");
    getElement(fieldId + "ErrorMessage").innerHTML = errorMessage;

    if (errorMessage) {
        phoneNumber.classList.add("error-border");
        return false;
    }

    phoneNumber.classList.remove("error-border");
    return true;
}

function validateEmployeeDetails() {
    var nameFields = ['firstName', 'lastName', 'preferredName'];
    var otherFields = ['jobTitle', 'office', 'department', 'skypeId'];
    var isNameFieldsValid = true, isOtherFieldsValid = true;
    for (let i = 0; i < nameFields.length; i++) {
        if (!isValidName(nameFields[i])) {
            isNameFieldsValid = false;
            break;
        }
    }
    for (let i = 0; i < otherFields.length; i++) {
        if (!isNotNullField(otherFields[i])) {
            isOtherFieldsValid = false;
            break;
        }
    }
    var isEmailFieldValid = isValidEmail();
    var isPhoneNumberFieldValid = isValidPhoneNumber();
    if (isNameFieldsValid && isOtherFieldsValid && isEmailFieldValid && isPhoneNumberFieldValid) {
        var employeeDetails = {
            id: String(employees.length + 1),
            firstName: getElement("firstName").value,
            lastName: getElement("lastName").value,
            preferredName: getElement("preferredName").value,
            email: getElement("email").value,
            jobTitle: getElement("jobTitle").value,
            office: getElement("office").value,
            department: getElement("department").value,
            phoneNumber: getElement("phoneNumber").value,
            skypeId: getElement("skypeId").value
        };
        addEmployee(employeeDetails);
    }
    else {
        return;
    } 
}

function addEmployee(employeeDetails) {
    let employee = new Employee(employeeDetails);
    employees.push(employee);
    closeEmployeeForm();
    showAllEmployees();
    generateSpecialFilters();
}

function showAllEmployees() {
    clearElement("employeeCards");
    if (employees.length == 0) {
        getElement("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        employees.forEach(displayEmployeeCard);
    }   
}

function showEmployeeByProperty(str, property) {
    clearElement("employeeCards");
    var filteredEmployees = employees.filter(filterEmployeeByProperty(str, property));
    if (filteredEmployees.length === 0) {
        getElement("employeeCards").innerHTML =
            "<div id = \"noResultsMessage\"><h1>No Results Available!</h1><h3>Please try again with different search filters.</h3></div>"
    }
    else {
        filteredEmployees.forEach(displayEmployeeCard);
    }
}

function displayEmployeeCard(item) {
    
    var employeePhotoHTML = "<div class = 'employee-photo'>" + String(item.firstName[0] + item.lastName[0]) + "</div>";

    var employeeDetailsHTML = "<div class = 'employee-details'>" +
                                "<h5>" + item.firstName + " " + item.lastName + "</h5>" +
                                "<p>" + item.jobTitle + "</p>" +
                                "<p>" + item.department + " Department" + "</p>" +
                                "<div class = 'action-links'><i class='fa fa-phone-square' aria-hidden='true'></i ><i class='fa fa-envelope' aria-hidden='true'></i><i class='fa fa-comment' aria-hidden='true'></i><i class='fa fa-star' aria-hidden='true'></i><i class='fa fa-heart' aria-hidden='true'></i></div>" +
                          "</div>";

    var employeeCardHTML = "<div class = 'card' id = '" + String(item.id) + "Card" + "' onclick = 'showEmployeeDetails(this.id)'>" +
                        employeePhotoHTML +
                        employeeDetailsHTML +
                       "</div>";

    var employeeCard = document.createElement('div');
    employeeCard.innerHTML = employeeCardHTML;

    getElement("employeeCards").appendChild(employeeCard);
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
        generateFilterList(property);
    }
}

function generateFilterList(item) {
    var Counter = generateFilterCounter(employees.map(a => a[item]));
    var listId = item + "List";
    clearElement(listId);
    if (Object.keys(Counter).length < 6) {
        getElement(item + 'ViewMoreBtn').classList.add("hidden");
        getElement(listId).classList.add('no-view-button');
    }
    else {
        getElement(item + 'ViewMoreBtn').classList.remove("hidden");
        getElement(listId).classList.remove('no-view-button');
    }
    for (const property in Counter) {
        var filter = document.createElement("li");
        filter.className = item + "-filter special-filter";
        filter.id = String(property) + "Filter";
        filter.innerHTML = String(property) + " (" + String(Counter[property]) + ")";
        var onclickFunction = "showEmployeeByProperty(String(this.id).substring(0, String(this.id).length - 6), '" + item + "')";
        filter.setAttribute("onclick", onclickFunction);
        getElement(listId).appendChild(filter);
    }
}

function generateFilterCounter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}

function clearKeywordField() {
    getElement('keywordTxt').value = "";
    showAllEmployees(); 
}

function showAddEmployeeForm() {
    getElement("employeeModal").classList.remove("hidden");
    getElement("idDetails").classList.add("hidden");
    getElement('updatePrompt').classList.add("hidden");
    getElement("formHeader").innerHTML = "Add Employee Information";
    var fields = getClassElements("field");
    for (let k = 0; k < fields.length; k++) {
        fields[k].value = "";
        fields[k].removeAttribute("readonly");
        fields[k].removeAttribute("ondblclick");
    }
    getElement("formSubmitBtn").setAttribute("onclick", "validateEmployeeDetails()");
    getElement("firstName").setAttribute("onkeyup", "autofillPreferredName(String(this.value))");
}

function resetErrorMessages() {
    var errorMessages = getClassElements("error-message");
    for (let k = 0; k < errorMessages.length; k++) {
        errorMessages[k].innerHTML = "";
    }
}

function closeEmployeeForm() {
    var fields = getClassElements("field");
    for (let k = 0; k < fields.length; k++) {
        fields[k].value = "";
        fields[k].classList.remove("error-border");
    }
    resetErrorMessages();
    getElement("employeeModal").classList.add("hidden");
}

function showEmployeeDetails(id) {
    getElement('updatePrompt').classList.remove("hidden");
    getElement("idDetails").classList.remove("hidden");
    getElement("employeeModal").classList.remove("hidden");
    getElement("formHeader").innerHTML = "Edit Employee Information";
    var employee = employees.find(i => String(i.id) === id[0]);
    var properties = Object.keys(employee);
    for (let i = 0; i < properties.length; i++) {
        var field = getElement(properties[i]);
        field.value = employee[properties[i]];
        field.setAttribute("readonly", "true");
        field.setAttribute("ondblclick", "editDetails(this.id)")
    }
    getElement("formSubmitBtn").setAttribute("readonly", "true");
}

function editDetails(fieldId) {
    getElement(fieldId).removeAttribute('readonly');
    var button = getElement("formSubmitBtn");
    button.removeAttribute("readonly");
    button.setAttribute("onclick", "updateDetails(String(document.querySelector('#id').value), fetchUpdatedFields())");
} 

function updateDetails(empId, updatedFieldsAndValues) {
    var nameFields = ['firstName', 'lastName', 'preferredName'];
    for (let i = 0; i < updatedFieldsAndValues.length; i++) {
        var updatedFieldAndValue = updatedFieldsAndValues[i];
        var property = updatedFieldAndValue.substr(0, updatedFieldAndValue.indexOf(' '));

        if (nameFields.includes(property) && !isValidName(property)) {
            return;
        }
        else if (property == "email" && !isValidEmail(property)) {
            return;
        }
        else if (property == "phoneNumber" && !isValidPhoneNumber(property)) {
            return;
        }
        else if (!isNotNullField(property)) {
            return;
        }

        var updatedValue = updatedFieldAndValue.substr(updatedFieldAndValue.indexOf(' ') + 1);
        for (let i in employees) {
            if (employees[i].id == empId) {
                employees[i][property] = updatedValue;
                break;
            }
        }
        getElement(property).setAttribute("readonly", "true");
    }
    showAllEmployees();
    generateSpecialFilters();
    closeEmployeeForm();
}

function fetchUpdatedFields() {
    var updateFields = document.getElementsByClassName('field');
    var updatedFieldsAndValues = [];
    for (var k = 0; k < updateFields.length; k++) {
        if (!updateFields[k].hasAttribute("readonly")) {
            updatedFieldsAndValues.push(updateFields[k].id + " " + updateFields[k].value);
        }
    }
    return updatedFieldsAndValues;
}

function autofillPreferredName(str){
    getElement('preferredName').value = String(str);
}

function hiddenFilterToggle(btnId, showMoreAction) {
    var listId = String(btnId).substring(0, String(btnId).length - 11) + "List";
    var listItems = getElement(listId).querySelectorAll('li');
    if (showMoreAction) {
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove('special-filter');
            
        }
        getElement(btnId).innerHTML = "Show Less";
        getElement(btnId).setAttribute("onclick", "hiddenFilterToggle(String(this.id), 0)");
    }
    else {
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].classList.add('special-filter');

        }
        getElement(btnId).innerHTML = "Show More";
        getElement(btnId).setAttribute("onclick", "hiddenFilterToggle(String(this.id), 1)");
    }
    
}

function removeAutofill() {
    getElement("firstName").removeAttribute("onkeyup");
}