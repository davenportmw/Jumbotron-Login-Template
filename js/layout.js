'use strict';

function goToTodos() {
    window.location.href = "http://localhost:8000/views/todo.html";
}

function goToLogin() {
    window.location.href = "http://localhost:8000/views/login.html";
}

function goToIndex() {
    window.location.href = "http://localhost:8000/index.html";
}

function hideModal() {
    $('#modalId').modal('hide');
}

function hideSpinner() {
    document.getElementById("spin1").style.visibility = "hidden";
}

function showSpinner() {
    document.getElementById("spin1").style.visibility = "visible";
}
