// Replace SPREADSHEET_ID and SHEET_NAME with the ID of your spreadsheet and the name of the sheet you want to retrieve
const SPREADSHEET_ID = '1chxWsrqLQ_2uBWE1Rg9HL9B6TTRaf5GEouzQPaygdz8';
const SHEET_NAME = 'Sheet1';
const API_KEY = 'AIzaSyBqkFRu5Vvp6HW3E5xxW5kmmRBQMmKQtZU';

function getDta() {
    console.log('getDtata');
    // Make an HTTP GET request to the Google Sheets API
    fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`
    )
        .then((response) => response.json())
        .then((data) => {
            // Parse the response and extract the data you want
            const matrixData = data.values;
            const headerRow = matrixData.shift();
            const projects = matrixData.map((projectValue) => {
                let tmp = {};
                headerRow.forEach((element, index) => {
                    tmp[element] = projectValue[index];
                });
                return tmp;
            });
            console.log(projects);
            renderProject(projects);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

function renderProject(projects) {
    const isVN = document.querySelector('.lang span').innerHTML == 'VN';
    const container = document.querySelector('#card-project-list');
    let htmls = ``;
    projects.forEach((project) => {
        htmls += `
        <div class="grid__item">
                                  <div class="card" data-name="${
                                      project.name
                                  }"><img class="card__img" src="/file/${
            project.image
        }/image1.png" alt="Snowy Mountains">
                                    <div class="card__content">
                                      <h1 class="card__header">${
                                          project.name 
                                      }</h1>
                                      <p>${checkHaveLink(project)}</p>
                                      <textarea class="card__text" rows="3">${
                                          isVN
                                              ? project.description
                                              : project.descriptionEs
                                      } </textarea>
                                      <button class=" btn hire-me card__btn" id="cc" data-modal="six">Explore <span>&rarr;</span></button>
                                    </div>
                                  </div>
                                </div>
        `;
    });
    container.innerHTML = htmls;
    const lstProject = $$('.card');
    lstProject.forEach((e) => {
        e.onclick = () => {
            const project = projects.find(
                (project) => project.name == e.getAttribute('data-name')
            );
            $('#modal-container .modal-background .modal img').setAttribute(
                'src',
                `/file/${project.image}/image1.png`
            );
            $('#modal-container .modal-background .modal h2').innerHTML =
                project.name;
            $('#modal-container .modal-background .modal p.des').innerHTML =
                isVN ? project.description : project.descriptionEs;
            $(
                '#modal-container .modal-background .modal p.type span'
            ).innerHTML = project.type;
            $(
                '#modal-container .modal-background .modal p.technical span'
            ).innerHTML = project.technical;
            $(
                '#modal-container .modal-background .modal p.process span'
            ).innerHTML = isVN ? project.process : project.processEs;
            $(
                '#modal-container .modal-background .modal p.member span'
            ).innerHTML = project.member;
            $(
                '#modal-container .modal-background .modal p.position span'
            ).innerHTML = project.position;
            $(
                '#modal-container .modal-background .modal p.linkDemo span'
            ).innerHTML = wraplinkGit(project.linkDemo);
            $(
                '#modal-container .modal-background .modal p.linkGit span'
            ).innerHTML = wraplinkGit(project.linkGit);
            $('#modal-container').classList.remove('out');
            $('#modal-container').classList.add('six');
            $('body').classList.add('modal-active');
            setTimeout(() => {
                $('.modal-svg').classList.add('zIndex-1');
            }, 500);
        };
    });
    $('#modal-container').onclick = (e) => {
        $('#modal-container').classList.add('out');
        $('body').classList.remove('modal-active');
        $('.modal-svg').classList.remove('zIndex-1');
    };
    $('#modaling').onclick = (e) => {
        e.stopPropagation();
    };
}


function wraplinkGit(input) {
    if (!input.includes('http')) {
        return input;
    }
    if (input.includes(',')) {
        return input.split(',').map((link) => wraplinkGit(link));
    }
    let output = `<a href="${input}" target="blank">${
        input.split('//')[1]
    }</a> <br>`;
    return output;
}

function checkHaveLink(project) {
    const isHaveLinkGit = project.linkGit.includes('http')
    const isHaveLinkDemo = project.linkDemo.includes('http')
    if (isHaveLinkGit && isHaveLinkDemo) {
        return '[Demo + Source]'
    }
    if (isHaveLinkGit) {
        return '[Source]'
    }
    if (isHaveLinkDemo) {
        return '[Demo]'
    }
    return '[Private]'
}

getDta();
$('.lang span').onclick = () => {
    getDta();
};
