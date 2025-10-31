const form = document.querySelector("form");
const alltask = document.querySelector("#alltask");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text === "") return;

    // Parent div for each task
    const parent = document.createElement("div");
    parent.style.display = "flex";
    parent.style.alignItems = "center";
    parent.style.justifyContent = "space-between";
    parent.style.background = "rgba(255, 255, 255, 0.1)";
    parent.style.padding = "10px 15px";
    parent.style.marginBottom = "12px";
    parent.style.borderRadius = "10px";
    parent.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
    parent.style.transition = "0.3s";

    // Task text
    const task = document.createElement("span");
    task.textContent = text;
    task.style.flex = "1";
    task.style.marginRight = "15px";
    task.style.color = "white";
    task.style.fontSize = "16px";

    // Done button
    const donebutton = document.createElement("button");
    donebutton.textContent = "Done";
    donebutton.style.width = "60px";
    donebutton.style.marginRight = "10px";
    donebutton.style.backgroundColor = "#00ff9d";
    donebutton.style.color = "black";
    donebutton.style.border = "none";
    donebutton.style.borderRadius = "6px";
    donebutton.style.cursor = "pointer";
    donebutton.style.fontWeight = "bold";
    donebutton.style.transition = "0.3s";

    donebutton.onmouseover = () => {
        donebutton.style.transform = "scale(1.1)";
        donebutton.style.boxShadow = "0 0 8px #00ff9d";
    };
    donebutton.onmouseout = () => {
        donebutton.style.transform = "scale(1)";
        donebutton.style.boxShadow = "none";
    };

    donebutton.addEventListener("click", () => {
        if (task.style.textDecoration === "line-through") {
            task.style.textDecoration = "none";
            task.style.color = "white";
        } else {
            task.style.textDecoration = "line-through";
            task.style.color = "grey";
        }
    });

    // Delete button
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.style.width = "60px";
    deletebutton.style.backgroundColor = "crimson";
    deletebutton.style.color = "white";
    deletebutton.style.border = "none";
    deletebutton.style.borderRadius = "6px";
    deletebutton.style.cursor = "pointer";
    deletebutton.style.fontWeight = "bold";
    deletebutton.style.transition = "0.3s";

    deletebutton.onmouseover = () => {
        deletebutton.style.transform = "scale(1.1)";
        deletebutton.style.boxShadow = "0 0 8px crimson";
    };
    deletebutton.onmouseout = () => {
        deletebutton.style.transform = "scale(1)";
        deletebutton.style.boxShadow = "none";
    };

    deletebutton.addEventListener("click", () => {
        parent.remove();
    });

    // Append everything
    parent.append(task, donebutton, deletebutton);
    alltask.append(parent);

    // Clear input
    form.reset();
});
