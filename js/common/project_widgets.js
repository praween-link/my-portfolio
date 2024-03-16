/// Project
function renderProjects(data) {
    const container = document.getElementById('my-projects');
    container.innerHTML = '';

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <div class="board-item" style="padding-bottom: ${index === data.length - 1 ? 0 : 1.5}rem">
                <h3 class="on-project-tab"><span>${item.name}
                <p>${item.sub_title}</p></span> <i class="fa-solid fa-angle-left"></i>
                </h3>
                <div id="project-${item.id}" class="sub-board-list show-infox">
                    <div class="pro-${item.id} gallery about-project-photo"> 
                        ${item.images.map((img, idx) => `
                        <a href="${img}" data-lightbox="mygallery-${item.id}">
                            <img class="${idx == 0 ? 'view-left' : idx == 1 ? 'view-center' : idx == 2 ? 'view-right' : 'hide-img'}" src="${img}">
                        </a>
                        `).join('')}
                    </div>
                    <div class="about-project">
                        <span><h5>About: </h5>
                            ${item.about}
                        </span>
                        <span><h5>Responsible For: </h5>
                            ${item.key_points.map(key => `<mark>${key}</mark>&nbsp;&nbsp;`).join('')}
                        </span>
                        
                        <ul class="social-icons social-icons-sqr">
                            ${item.android == null ? '' : `<li><a href="${item.android}"><i class="fab fa-brands fa-google-play" aria-hidden="true"></i></a></li>`}
                            ${item.ios == null ? '' : `<li><a href="${item.ios}"><i class="fab fa-brands fa-app-store" aria-hidden="true"></i></a></li>`}
                        </ul>
                    </div>
            </div>
        `;

        container.appendChild(card);
    });
}
renderProjects(projectsData);
const containerX = document.querySelectorAll('.project-card');

containerX.forEach(sec => {
    let mySection = sec.querySelector('.on-project-tab');

    mySection.addEventListener('click', () => {
        sec.classList.toggle('show-info');
        console.log("---> ", sec);
    });
});

/// Experiance
function renderExperiances(data) {
    const container = document.getElementById('my-experiances');
    container.innerHTML = '';

    data.forEach((item, index) => {

        const card = document.createElement('div');
        card.classList.add('experiance-card');
        card.innerHTML = `
            <div class="board-item" style="padding-bottom: ${index === data.length - 1 ? 0 : 1.5}rem">
                <h3 class="on-exp-tab"><span>${item.name}</span>
                <i class="fa-solid fa-angle-left"></i></h3>
                <div id="experience" class="sub-board-list">
                ${item.items.map(expData => `<div class="sub-board-item">
                            <h5>${expData.logo != null ? `<img class="mix-blend-mode: multiply;" src="${expData.logo}" height="20"></img>&nbsp;` : ''} ${expData.title}</h5>
                            <p>${expData.location} (<span>${expData.start_date} - ${expData.end_date}</span>)</p>
                            <div class="ex-title">
                                <h6>About</h6>
                                <p>${expData.describe}</p>
                            </div>
                        </div>
                    `).join('')}
            </div>
            </div>
        `;
        container.appendChild(card);
        console.log("==> ", item);
    });
}
renderExperiances(experianceData);
const containerExperiance = document.querySelectorAll('.experiance-card');

containerExperiance.forEach(sec => {
    let mySection = sec.querySelector('.on-exp-tab');
    console.log("---> ", sec);
    mySection.addEventListener('click', () => {
        sec.classList.toggle('show-info');
    });
});