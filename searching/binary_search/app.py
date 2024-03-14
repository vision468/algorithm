import math
items = [51, 2, 5, 11, 1, 8, 6, 22, 34, 46]
def BinarySearch(key, min, max, sourceList):
    print(f'min = {min}, max = {max}, the range of list is : {items[min: max + 1]}')
    averageIndex = math.floor( (min + max) / 2)
    averageItem = sourceList[averageIndex]
    if key == averageItem:
        return averageIndex
    elif key < averageItem:
        return BinarySearch(key, min, averageIndex, sourceList)
    else:
        return BinarySearch(key, averageIndex + 1, max, sourceList)

# Using the sorted list ( ascent ) is important part of algorithm  
items.sort()
startMinimumIndex = 0
startMaximumIndex = len(items) - 1 
keyIndex = BinarySearch(11, startMinimumIndex, startMaximumIndex, items )
print(f'index of 11 is : {keyIndex}')