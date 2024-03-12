items = [];
// Make a list of random numbers ( THIS FUNCTION IS NOT RELATED TO THE ALGORITHM )
function InsertRandomItem(count, sourceArray){
    let tempArray = sourceArray || [];
    for(let i = 0; i < count; i += 1){
        
        let tempElement = Math.floor(Math.random() * count);
        // Make sure that the number not exist in list and will be unique
        while( LinearSearch(tempElement, tempArray) !== -1 ){
            tempElement = Math.floor(Math.random() * count);
        }
        tempArray.push(tempElement);
    }
    return tempArray;
}
function LinearSearch(key, sourceArray){
    let keyIndex = -1;
    for(let i = 0; i < sourceArray.length; i+= 1){
        if( sourceArray[i] === key){
            keyIndex = i
            break;
        }
    }
    // for(let item of sourceArray){
    //     if( item === key){
    //         keyIndex = sourceArray.indexOf(key)
    //         break;
    //     } 
    // }
    return keyIndex;
}

items = InsertRandomItem(10, items);
keyIndex = LinearSearch(5, items);
console.log(items)
console.log(keyIndex);