var selectedRow = null;

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) insertNewRecord(formData);
        else updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["studentId"] = document.getElementById("studentId").value;
    formData["departmentName"] = document.getElementById("departmentName").value;
    formData["currentCGPA"] = document.getElementById("currentCGPA").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentId;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.departmentName;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.currentCGPA;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                         <a onClick="onDelete(this)">Delete</a>`;
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    }
    else {
        isValid = true;
        if (
            !document
                .getElementById("fullNameValidationError")
                .classList.contains("hide")
        )
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("departmentName").value = "";
    document.getElementById("currentCGPA").value = "";
    selectedRow = null;
}
