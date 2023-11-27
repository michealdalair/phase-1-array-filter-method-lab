// Code your solution here



function findMatching(names,string){
    return names.filter(name=>{
        return name.toLowerCase()=== string.toLowerCase()
    })

}


function  fuzzyMatch(names,string){
    return names.filter(name=>{
        return name.startsWith(string)
    })


    
}


function  matchName(drivers,string){
    return drivers.filter(obj =>{
    return obj.name===string;
    })

}