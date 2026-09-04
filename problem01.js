function describeValue(value){
    const type= typeof value
    const status= value? "truthy":"falsy"
    return `${type} | ${status}`
}
console.log(describeValue("*"))