const root = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'thumbnails');

function renderAllList() {
    const heading = document.createElement('h1');
    const main = root.appendChild(container);
    main.appendChild(heading);
    heading.innerHTML = 'Most popular tanks';
    heading.setAttribute('class', 'title');
    const flexContainer = document.createElement('div');
    flexContainer.setAttribute('class', 'flex-container');

    tanks.forEach(key => {
        const flexItem = document.createElement('div');
        flexItem.setAttribute('class', 'flex-item');


        let tankPicture = document.createElement('img');
        tankPicture.setAttribute('class', 'tank-picture');
        let countryFlag = document.createElement('img');


        flexItem.appendChild(tankPicture);
        flexItem.appendChild(countryFlag);

        countryFlag.src = `images/countries/${key.country}.png`;
        tankPicture.src = key.preview;

        countryFlag.title = `${key.country}`;

        const tankLevel = document.createElement('span');
        tankLevel.setAttribute('class', 'tank-level');
        tankLevel.innerHTML = key.level;
        flexItem.appendChild(tankLevel);

        const tankModel = document.createElement('span');
        tankModel.setAttribute('class', 'tank-model');
        tankModel.title = key.model;
        tankModel.innerHTML = key.model;
        flexItem.appendChild(tankModel);
        flexItem.title = "Click to details";
        flexContainer.appendChild(flexItem);
        flexItem.addEventListener('click', () => {
            location.hash = key.model;
        });
    });
    main.appendChild(flexContainer);
    return main;
}

function renderDetails(tank) {
    const details = tank.details;
    return ` <div class="tank-details">
                <h1>
                    <img class="detail-flag" src="images/countries/${tank.country}.png" title="${tank.country}"/>${tank.model} <span class="level">(level ${tank.level})</span>
                </h1>
            <div class="left-column">
               <div class="title">Preview</div>
               <img class="tank-details-flag" src="${tank.preview}"><br>
               <a href="#" class="back-link">Back to list view</a>
               </div>

               <div class="right-column">
               <div class="title">Characteristic</div>
               <table>
                <tr>
                    <td>
                        damage
                    </td>
                    <td>
                        ${details.damage}
                    </td>
                </tr>

                 <tr>
                    <td>
                        breoning
                    </td>
                    <td>
                        ${details.breoning}
                    </td>
                </tr>

                 <tr>
                    <td>
                        attack speed
                    </td>
                    <td>
                        ${details.attack_speed}
                    </td>
                </tr>

                 <tr>
                    <td>
                        time of targeting
                    </td>
                    <td>
                        ${details.time_of_targeting}
                    </td>
                </tr>

                  <tr>
                    <td>
                        ammunition
                    </td>
                    <td>
                        ${details.ammunition}
                    </td>
                </tr>
               </table>
              </div>
           </div>`
}

function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(el => {
        if (el.model === model) {
            root.innerHTML = renderDetails(el);
        }
    });
    const backLink = document.getElementsByClassName('back-link');
    backLink[0].addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
}

root.appendChild(renderAllList());
window.onhashchange = tankDetail;