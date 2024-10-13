document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("project-list");
            data.projects.forEach(project => {
                const projectCard = document.createElement("div");
                projectCard.classList.add("project-card");
                projectCard.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">مشاهده پروژه</a>
                `;
                projectList.appendChild(projectCard);
            });
        });
});
