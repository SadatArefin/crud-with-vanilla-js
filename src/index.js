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