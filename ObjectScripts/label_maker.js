let personsInfo = {
        name: "Randy Rivera",
        address: "5096 Roswell Rd",
        city: "Atlanta",
        state: "Georgia",
        zip: 30342

};
printContact(personsInfo)

function printContact(info) {
        console.log(info.name);
        console.log(info.address);
        console.log(info.city + ", " + info.state + " " + info.zip);
}