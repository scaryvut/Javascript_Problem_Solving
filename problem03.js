function validateUsername(userName){
    if(userName.length<4){
        return "Too Short"
    }
    if(userName.includes(" ")){
        return "No Space Allowed"
    }
    if(userName.toLowerCase().includes("Admin")){
        return "Reverse Word"
    }
    if(userName.length<4 && userName.includes(" ")){
        return "it has a space, but the length rule is checked first"
    }
    return "Available"
}
console.log(validateUsername("Habiba"))