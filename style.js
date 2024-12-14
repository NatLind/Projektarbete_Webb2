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

     // Skapa ny lista med anpassad rubrik, användaren väljer
     $('#newList').click(function () {
        let listTitle = prompt('Enter a title for your new list:');
        if (!listTitle) {
            listTitle = `Task List ${listCount}`; // Om inget anges, sätts en standardrubrik "Task List"
        }
        listCount++;
        const newList = $(`
            <div class="task-list">
                <button class="add-task-btn">Add task</button>
                <button class="remove-task-list">Remove list</button>
                <h3>${listTitle}</h3>
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

    // Markera uppgift som klar (stryker över den)
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

    // Ta bort lista när "Remove list" knappen klickas på
    $(document).on('click', '.remove-task-list', function () {
        const confirmDeleteList = confirm('Do you want to delete this list?');
        if (confirmDeleteList) {
            $(this).closest('.task-list').remove();  // Ta bort hela listan (div:en)
        }
    });
});

function randomizeTask() {
    // Hämtar alla uppgifterna från listan
    const task = $('#taskList .task-item').toArray();

    if (task.length > 0) {
        // Väljer en slumpmässigt uppgfit från listan
        const randomTask = task[Math.floor(Math.random() * task.length)];
        // Visar uppgiften
        alert(`Random task: ${$(randomTask).text()}`);
    } else {
        alert('There are no available task to randomize!');
    }

}
    $('#overwhelmed').click(function () {
        randomizeTask();
    });

