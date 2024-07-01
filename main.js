document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    const list = document.getElementById("list");
    const search = document.getElementById("search");

    // Function to add a new task
    const addTask = () => {
        const name = document.getElementById("txt").value.trim();
        if (name) {
            const lielement = document.createElement("li");
            lielement.className = "list-group-item d-flex justify-content-between align-items-center";
            lielement.innerHTML = `
                <span>${name}</span>
                <a href="#" class="btn btn-danger">X</a>
            `;

            lielement.querySelector("a").addEventListener("click", (e) => {
                e.preventDefault();
                lielement.remove();
            });

            list.appendChild(lielement);

            document.getElementById("txt").value = "";
            document.getElementById("txt").focus();
        }
    };

    // Add task on button click
    btn.addEventListener("click", addTask);

    // Search functionality
    search.addEventListener("input", () => {
        const query = search.value.toLowerCase();
        const items = list.getElementsByTagName("li");
        Array.from(items).forEach((item) => {
            const task = item.querySelector("span").innerText.toLowerCase();
            if (task.includes(query)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});
