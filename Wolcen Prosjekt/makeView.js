let html = "";
let hideOrShow = "hide";


function updateView() {
  html = `<div>
  <button onclick="dropDown()" class="dropDownMenu div1">Menu</button></div>
  <div class="div2">`

  for (menuButtons of model.menuButtons) {
    html += `
            <button class="${hideOrShow} ${menuButtons.buttonColor} dropdownMenuContent" onclick="${menuButtons.makeFunction}()">${menuButtons.buttonName}</button>
            
            `;
  }
  html += `</div> </div>`;
  output.innerHTML = html;
}

function makeBuildsMenu() {
  html =`   <div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button></div>
            <div class="div2">`
  for (buildButtons of model.buildMenu) {
    html += `
            <button class="${hideOrShow} ${buildButtons.buttonColor} dropdownMenuContent" onclick="${buildButtons.makeFunction}()">${buildButtons.buttonName}</button>
            `;
  }
  html+= `</div> </div>`
  output.innerHTML = html;
}

function makeSpinMenu() {
    html =` <div>
            <button onclick="dropDown()" class="dropDownMenu div1">Menu</button></div>
            <div class="div2">`

  for (SpinMenu of model.Spin2winMenu) {
    html += `
                <button class="${hideOrShow} ${SpinMenu.buttonColor} dropdownMenuContent" onclick="${SpinMenu.makeFunction}()">${SpinMenu.buttonName}</button>
            `;
  }
  html+= `</div>`
  
  html += `<div class="div5">
    <div class="contenttext">
    This is some basic information that is really nice to know when you are going to play Wolcen. It took me quite some time
    before i knew what this things where and what they did, that is why i want to inform you as early as i can.
    <br>
    Now over to stat points and what the spesific stats gives your character. Also what damage types you got and what ailments are.
   <br>
    <hr>
    Ferocity: Chance to critically hit with attacks or spells. 
   <hr>
    Thoughness: Gives you more health and increases your force shield. 
    <hr>
    Agillity: Gives you increased attack speed and spell casting speed. 
    <hr>
    Wisdom: Gives you increased chance of inflicting ailments with attacks or spells. 
    <hr>
    Ailment: Curses or Damage Over Time effects like: Burn damage, Bleed damage, Freeze that freezes targets and there is more. 
    <hr>
    Ailment chance: Are the chance that you have to inflict the DoTs on targets you attack. (damage over time effects) 
    <hr>
    Material damage: Physical(Stun) damage, Toxic(Poison) damage and Rend(Bleed) damage. 
    <hr>
    Elemental damage: Frost(Freeze) damage, Lightning(Shock) damage and Fire(Burn) damage. 
    <hr>
    </div>
    `;


  output.innerHTML = html;
}

function makeSkillHTML() {
  html = `<button class="dropDownMenu div1" onclick="makeBuildsMenu()">Back</button>`;

  for (skillimages of model.Spin2winImages) {
    html += `
                <img src"${skillimages.skillimg}"/>
             `;
  }
}

//     document.body.classList.remove('bladestormBackground');

//     html = ` <button class="dropDownMenu div1" onclick="makeBuildsMenu()">Back</button>
//     <div class="div3">
//     <div class="headertext">
//         This is the Spin2Win build. This build focuses on building around your Bladestorm skill</div>
//     </div>
//     </div>

//
//
//         <br>
//         <br>
//         <div class="contenttext">
//         Now that you know some basic information about ailments, what they do, and stats we can jump into the skills.
//         We want to get the skills we are going to use for this build as early as possible so we can level them up.
//         Here's some images of what skills you want to use, and what talents to use on each skill. <br>
//         Bleeding Edge also has a red circle around one tallent that is not selected. This makes Bleeding Edge a casted attack
//         which can be used if you need a ranged attack in a tricky situation.

//        <br>
//      `

//        for(img of model.Spin2winImages) {
//            html += `
//         <img class="contentSkillPicture" onclick="${img.makeFunction}()" src="${img.skillimg}"></img>

//     `

//     output.innerHTML = html;
// }

// html += `
//     </div>
//     <br>
//     <br>
//     <br>
//     <br>

//     <div class="contenttext">
//         Now we are going to take a look at the stats. This is a Crit build, then we need to put alot of our points into
//         Ferocity, which boosts you're chance to critically hit with attacks and spells. We also put some points into Wisdom,
//         which enhances your chance to inflict ailments, in this case Bleeds.
//         <br>
//         <br>
//         <img class="contentStatPicture" src="Img/Spin2win/Stats.jpg"></img>
//     </div>
//     <br>
//     <br>
//     <div class="contenttext">
//     We also need to take a look at the tallent tree. In this skill tree you find an overwhelming amount of nodes that will improve
//     your character. All the nodes you find in this tree is passives and some of them are minor upgrades and a few of them are
//     a huge change to your character. Heres a picture of the skill tree i recommend to start of with.

//     <img src="Img/Spin2win/TallentTree.jpg"></img>
//     </div>

//     `

function showBladeSkill() {
  html = "";
  html = `
        <button class="dropDownMenu div1" onclick="makeBladestormHTML()">Back</button>
        <div>
        <img src="${model.Spin2winImages[0].skillimg}"></img>
        </div>
        `;

  output.innerHTML = html;
}

function dropDown() {
  if (hideOrShow == "show") {
    hideOrShow = "hide";
  } else {
    hideOrShow = "show";
  }
  updateView();
}
