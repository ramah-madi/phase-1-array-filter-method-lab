// Code your solution here
function findMatching(drivers, string){
     const driverName = drivers.filter(name => string.toLowerCase() === name.toLowerCase())
     return driverName
}

function fuzzyMatch(drivers, string){
     const fuzzyName = drivers.filter(name => name.toLowerCase().startsWith(string.toLowerCase()))
     return fuzzyName
}

function matchName(drivers, string){
    const matchDriver = drivers.filter(nameToCompare => nameToCompare["name"].toLowerCase() === string.toLowerCase())
    return matchDriver
}