let items = [51, 2, 5, 11, 1, 8, 6, 22, 34, 46];
function BinarySearch(key, min, max, sourceArray){
    console.log(`min = ${min}, max = ${max}, range array is: \n ${sourceArray.slice(min, max + 1)}`);
    let averageIndex = Math.floor((min + max) / 2);
    let averageItem = sourceArray[averageIndex];
    if(  key === averageItem ){
        return averageIndex
    } else if ( key < averageItem){
        return BinarySearch(key, min, averageIndex, sourceArray )
    } else {
        return BinarySearch(key, averageIndex + 1, max, sourceArray)
    }
}
// Using the sorted list ( ascent ) is important part of algorithm  
items = items.sort((a,b) => a -b)
let startMinimumIndex = 0;
let startMaximunIndex = items.length -1 ;
let keyIndex = BinarySearch(11, startMinimumIndex, startMaximunIndex, items);
console.log("index of 11 is: ", keyIndex);