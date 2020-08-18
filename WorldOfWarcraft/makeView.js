let hideOrShow = "hide";
html = '';

function updateView() {

    html = `<div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
            </div>
            <div class="div2">`
               
        for (ClassButton of model.classButtons) {
            html += `
            <button class="${hideOrShow} ${ClassButton.buttonColor} dropdownMenuContent" onclick="${ClassButton.makeClassFunction}()">${ClassButton.buttonName}</button>
            
            ` 
        }
        html += `</div>`
        content.innerHTML = html;
    }

    function DKSpecButtons() {
        html = `
        <div>
        <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2"> `
            for(SpecButton of model.deathKnightSpecs) {
                html += `
                <button class="${hideOrShow} ${SpecButton.buttonColor} dropdownMenuContent" onclick="${SpecButton.makeSpecFunction}()">${SpecButton.buttonName}</button>
                `
            }
            html += `</div>`
            content.innerHTML = html
    }

    function FrostMenuButtons() {
        html = `<div>
        <button onclick="dropDown()" class="dropDownMenu div1">Menu</button>
        </div>
        <div class="div2"> `
        for(FrostMenu of model.frostDKmenu) {
            html += `
            <button class="${hideOrShow} ${FrostMenu.buttonColor} dropdownMenuContent" onclick="${FrostMenu.makeFrostOptions}()">${FrostMenu.buttonName}</button>
            `
        }
        html += `</div>`
        content.innerHTML = html;
    }


