let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2023"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2023"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA",
        licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

function vehiclesThatAreRed(array, colorWith) {
    let arrayWithColorRed = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].color == colorWith) {
            arrayWithColorRed.push(array[i])
        }
    }
    return arrayWithColorRed;
}

/*
let vehicleName = vehiclesThatAreRed(vehicles, "Red");
let lengthOfThisArray = vehicleName.length;
for (let i = 0; i < lengthOfThisArray; i++) {
    console.log("Vehicles that are RED: " + vehicleName[i].type)
}
*/

function vehiclesWithExpiredRegistrations(array) {
    let arrayWithExpiredReg = [];

    let lengthOfArray = array.length;
    let currentDate = new Date();
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].registrationExpires < currentDate) {
            arrayWithExpiredReg.push(array[i])
        }
    }
    return arrayWithExpiredReg;
}

/*
let vehicleNameWith = vehiclesWithExpiredRegistrations(vehicles)
let lengthOfArray = vehicleNameWith.length;
for (let i = 0; i < lengthOfArray; i++) {
    console.log("Vehicles with registrations that have expired: " + vehicleNameWith[i].type)
} */ 


function vehiclesThatHoldAtLeast(array) {
    let arrayWithMorethan = []

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].capacity >= 6) {
            arrayWithMorethan.push(array[i])
        }
    }
    return arrayWithMorethan;
}

/*
let vehiclesWithCapacity = vehiclesThatHoldAtLeast(vehicles)
let lengthOf = vehiclesWithCapacity.length;
for (let i = 0; i < lengthOf; i++) {
    console.log("Vehicles that hold at least 6 people: " + vehiclesWithCapacity[i].type)
} */

function vehiclesWithLicensePlatesThat(array, string) {
    let arrayWithPlatesThatEnd = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if(array[i].licenseNo.lastIndexOf(string) == -1) {
            
        } else {
            arrayWithPlatesThatEnd.push(array[i])
        }
    }
    return arrayWithPlatesThatEnd;
}

let vehiclesthatEndWith = vehiclesWithLicensePlatesThat(vehicles, "222");
let lengthOffunction = vehiclesthatEndWith.length;
for (let i = 0; i < lengthOffunction; i++) {
    console.log("Vehicles with license plates that end with 222: " + vehiclesthatEndWith[i].type)
}