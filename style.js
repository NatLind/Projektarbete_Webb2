$(document).ready(function () {
    let timer;
    let seconds = 0;
    let listCount = 1;

    // Starta timern
    $('#startBtn').click(function () {
        clearInterval(timer);
        timer = setInterval(function () {
            seconds++;
            $('#timer').text(seconds);
        }, 1000);
    });

    // Stoppa timern
    $('#stopBtn').click(function () {
        clearInterval(timer);
    });

    // Återställ timern
    $('#resetBtn').click(function () {
        clearInterval(timer);
        seconds = 0;
        $('#timer').text(seconds);
    });

    // Lägger till uppgifter i huvudlistan
    $('#addTask').click(function () {
        let task = prompt('Add your task:');
        if (task) {
            $('#taskList').append(`
                <li class="task-item">${task}</li>
            `);
        }
    });

    // Skapa ny lista
    $('#newList').click(function () {
        listCount++;
        const newList = $(`
            <div class="task-list">
                <button class="add-task-btn">Add task</button>
                <h3>Task List ${listCount}</h3>
                <ul class="task-items"></ul>
            </div>
        `);
        $('#tasksContainer').append(newList);
    });

    // Lägg till uppgifter i specifik lista
    $(document).on('click', '.add-task-btn', function () {
        const taskText = prompt('Add your task:');
        if (taskText) {
            $(this)
                .siblings('.task-items')
                .append(`<li class="task-item">${taskText}</li>`);
        }
    });

    // Markera uppgift som klar (stryka över)
    $(document).on('click', '.task-item', function () {
        $(this).toggleClass('completed');
    });

    // Radera uppgifter genom att dubbelklicka
    $(document).on('dblclick', '.task-item', function () {
        const confirmDelete = confirm('Do you want to delete this task?');
        if (confirmDelete) {
            $(this).remove();
        }
    });
});
