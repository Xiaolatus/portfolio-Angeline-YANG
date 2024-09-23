document.addEventListener('DOMContentLoaded', () => {
    fetch('projets.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projets-container');
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('p1');
                
                // Ajoute l'image
                const img = document.createElement('img');
                img.src = project.img;
                img.alt = project.title;
                projectElement.appendChild(img);

                // Ajoute le titre
                const title = document.createElement('h2');
                title.textContent = project.title;
                projectElement.appendChild(title);

                // Ajoute la description
                const desc = document.createElement('p');
                desc.classList.add('desc');
                desc.textContent = project.description;
                projectElement.appendChild(desc);

                // Ajoute les détails
                const details = document.createElement('p');
                details.textContent = project.details;
                projectElement.appendChild(details);

                // Ajoute les liens
                project.links.forEach(link => {
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.target = "_blank";
                    a.textContent = link.text;
                    projectElement.appendChild(a);
                    projectElement.appendChild(document.createElement('br'));
                });

                // Ajoute le projet au container
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Erreur lors du chargement des projets:', error));
});
