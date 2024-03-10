// Board List Item
function viewMore(id, display) {
    var experiance = document.getElementById(id);
    if (experiance.style.display === "none") {
        if (display != null) {
            experiance.style.display = "inline-flex";
        } else {
            experiance.style.display = "block";
        }
    } else {
        experiance.style.display = "none";
    }
}
/// Project
function renderProjects(data) {
    const container = document.getElementById('my-projects');
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('person-card');
        card.innerHTML = `
                <div>
                    <div class="board-item">
                        <h3 class="on-project-tab">${item.name}
                            <p>${item.sub_title}</p>
                        </h3>
                <div id="project-${item.id}" class="sub-board-list show-infox">
                    <div class="about-project">
                        <span><h5>About: </h5>
                            ${item.about}
                        </span>
                        <span><h5>Responsible For: </h5></span>
                        <span>
                            ${item.key_points.map(key => `<mark>${key}</mark>&nbsp;&nbsp;`).join('')}
                        </span> 
                    </div>
                    <div class="pro-${item.id} gallery about-project-photo">
                        ${item.images.map((img, idx) => `
                        <a href="${img}" data-lightbox="mygallery-${item.id}"><img class="${idx == 0 ? 'view-left' : idx == 1 ? 'view-center' : idx == 2 ? 'view-right' : 'hide-img'}" src="${img}"></a>
                            `)}
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('show-info');
        });
        container.appendChild(card);
    });
}

renderProjects(projectsData);