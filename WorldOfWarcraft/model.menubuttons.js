
model = {

    classButtons: [
        { makeClassFunction: 'DKSpecButtons', buttonName: 'Death Knight', buttonColor: 'deathKnightColor' },
        { makeClassFunction: '', buttonName: 'Rogue', buttonColor: 'rogueColor'},
    ],

    deathKnightSpecs: [
        {  makeSpecFunction: 'updateView', buttonName: 'Back', buttonColor: 'backButtonColor'},
        {  makeSpecFunction: 'FrostMenuButtons', buttonName: 'Frost', buttonColor: 'frostSpecColor'},
        {  makeSpecFunction: 'UnholyMenuButtons', buttonName: 'Unholy', buttonColor: 'unholySpecColor'},
    ],

    frostDKmenu: [
        { makeFrostOptions: 'DKSpecButtons', buttonName: 'Back', buttonColor: 'backButtonColor'},
        { makeFrostOptions: 'makeFrostTrinketChart', buttonName: 'Trinkets', buttonColor: 'frostSpecColor' },
        { makeFrostOptions: 'makeFrostEssenceChart', buttonName: 'Essences', buttonColor: 'frostSpecColor' },
        { makeFrostOptions: 'makeFrostAzeriteChart', buttonName: 'Azerite', buttonColor: 'frostSpecColor' },
        { makeFrostOptions: 'makeFrostCorruptionsChart', buttonName: 'Corruptions', buttonColor: 'frostSpecColor' },
    ],





}