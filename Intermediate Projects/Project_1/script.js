const input = document.getElementById("task-input");
const addbutton = document.getElementById("add-btn");
const tasklist = document.getElementById("task-list");

function increment(elementId) {
    const stats = document.getElementById(elementId);

    if (stats) {
        let currentNum = parseInt(stats.innerHTML, 10);

        if (isNaN(currentNum)) {
            currentNum = 0;
        }

        stats.innerHTML = currentNum + 1;
    }
}

function decrement(elementId) {
    const stats = document.getElementById(elementId);

    if (stats) {
        let currentNum = parseInt(stats.innerHTML, 10);

        if (isNaN(currentNum)) {
            currentNum = 0;
        }

        if (currentNum > 0) {
            stats.innerHTML = currentNum - 1;
        }
    }
}

addbutton.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Enter your task");
        return;
    }

    // Main Task Container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    // Left Section
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Task Text
    const span = document.createElement("span");
    span.textContent = input.value;

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(span);

    // Right Section
    const taskRight = document.createElement("div");
    taskRight.classList.add("task-right");

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    taskRight.appendChild(deleteButton);

    // Combine
    taskContainer.appendChild(taskLeft);
    taskContainer.appendChild(taskRight);

    tasklist.appendChild(taskContainer);

    increment("total-tasks");
    increment("pending-tasks");

    // Delete Task
    deleteButton.addEventListener("click", function () {

        taskContainer.remove();

        decrement("total-tasks");

        if (checkbox.checked) {
            decrement("completed-tasks");
        } else {
            decrement("pending-tasks");
        }

    });

    // Complete Task
    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.classList.add("completed");
            increment("completed-tasks");
            decrement("pending-tasks");
        } else {
            span.classList.remove("completed");
            decrement("completed-tasks");
            increment("pending-tasks");
        }

    });

    input.value = "";
});