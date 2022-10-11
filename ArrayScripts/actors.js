let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];


function findMember(array, id) {
    let memberArray = []
    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].memID == id) {
            memberArray.push(array[i])
        }
    }
    return memberArray
}

let findMeAMemberWith = findMember(academyMembers, 187);
let lengthOfArray = findMeAMemberWith.length;
for (let i = 0; i < lengthOfArray; i++) {
    //console.log(findMeAMemberWith[i].name)
}

function apperancesInFilms(array) {
    let membersArrays = []
    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].films.length >= 3) {
            membersArrays.push(array[i]);
        }
    }
    return membersArrays;
}
let findNames = apperancesInFilms(academyMembers);
let lengthOfThisArray = findNames.length;
for (let i = 0; i < lengthOfThisArray; i++) {
    //console.log("Appeared in at least three films or more: " + findNames[i].name)
}


function findMemberThatStartsWith(array, string) {
    let startsWithBob = [];
    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].name.indexOf(string) == -1) {
            console.log("Doesn't start with: " + string);
        } else {
            startsWithBob.push(array[i]);
        }
    }
    return startsWithBob;
}

let membersWith = findMemberThatStartsWith(academyMembers, "Bob");
let lengthOfMemberWith = membersWith.length;
for (let i = 0; i < lengthOfMemberWith; i++) {
    //console.log("Names that start with Bob: " + membersWith[i].name)
}


function arrayThatStartsWithA(array, string) {
    let startsWith = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        for (let j = 0; j < array[i].films.length; j++) {
            if (array[i].films[j].indexOf(string) == -1) {
                console.log("Doesn't start with: " + string)
            } else {
                startsWith.push(array[i])
            }
        }

    }
    return startsWith;
}

let academyMembersWith = arrayThatStartsWithA(academyMembers, "A");
let lengthOfThisFunction = academyMembersWith.length;
for (let i = 0; i < lengthOfThisFunction; i++) {
    console.log("Members that have been in a film that starts with A: " + academyMembersWith[i].name)
}
