let model = {

    

        menuButtons: [
            {  makeFunction: 'makeBuildsMenu', buttonName: 'Builds', buttonColor: 'menuButtonsColor'},
        ],

        buildMenu: [
            { makeFunction: 'updateView', buttonName: 'Back', buttonColor: 'menuButtonsColor'},
            { makeFunction: 'makeSpinMenu', buttonName: 'Spin 2 Win Build', buttonColor: 'menuButtonsColor' },
            { makeFunction: 'makeBleedingMenu', buttonName: 'Bleeding Edge build', buttonColor: 'menuButtonsColor' },
            { makeFunction: 'makePlagueMenu', buttonName: 'Plaguelord Build', buttonColor: 'menuButtonsColor' },
            { makeFunction: 'makePistolMenu', buttonName: 'Pistol Ranger Build', buttonColor: 'menuButtonsColor' },
            { makeFunction: 'makeRogueMenu', buttonName: 'Rogue Build Build', buttonColor: 'menuButtonsColor' },
        ],
    

Spin2winMenu: [
    { makeFunction: 'makeBuildsMenu', buttonName: 'Back', buttonColor: 'menuButtonsColor' },
    { makeFunction: 'makeSkillHTML', buttonName: 'Skills', buttonColor: 'menuButtonsColor' },
    { makeFunction: 'makeStatsHTML', buttonName: 'Stats', buttonColor: 'menuButtonsColor' },
    { makeFunction: 'makeTallentHTML', buttonName: 'Tallent Tree', buttonColor: 'menuButtonsColor' },
],

Spin2winImages: [
    { skillimg: 'Img/Spin2win/BladestormSkill.jpg', makeFunction: 'showBladeSkill' },
    { skillimg: 'Img/Spin2win/WingsofIshmirSkill.jpg', makeFunction: 'showWingsSkill' },
    { skillimg: 'Img/Spin2win/SovereignShoutSkill.jpg', makeFunction: 'showSovereignSkill' },
    { skillimg: 'Img/Spin2win/BloodforBloodSkill.jpg', makeFunction: 'showBloodSkill' },
    { skillimg: 'Img/Spin2win/BleedingEdgeSkill.jpg', makeFunction: 'showBleedingSkill' },

]


}