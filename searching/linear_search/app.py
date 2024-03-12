import random
items = []
# Make a list of random numbers ( THIS FUNCTION IS NOT RELATED TO THE ALGORITHM )
def InsertRandomItem(count, sourceList):
    # --- Simpler but cause duplicate
    #tempList = [random.randint(0, count) for i in range(count)]
    # ---
    tempList = []
    for i in range(count):
        tempItem = random.randint(0, count)
        while( LinearSearch(tempItem, tempList) != -1 ):
            tempItem = random.randint(0, count)
        tempList.append(tempItem)
    return tempList

def LinearSearch(key, sourceList):
    keyIndex = -1
    #for item in sourceList:
    #    if( item == key ):
    #        keyIndex = sourceList.index(item)
    #        break
    for i in range(len(sourceList)):
        if sourceList[i] == key:
            keyIndex = i
            break
    return keyIndex
items = InsertRandomItem(10, items)
keyIndex = LinearSearch(3, items)
print(items)
print(keyIndex)