
from random import randint


START_INDEX = -1
STOP_INDEX = 10
stack = [None] * (STOP_INDEX +1)
stackTop = START_INDEX
def isEmpty():
    if stackTop == START_INDEX:
        return True
    return False
def isFull():
    if stackTop == STOP_INDEX:
        return True
    return False
def Push(item):
    if isFull():
        return False
    global stackTop, stack
    stackTop += 1
    stack[stackTop ] = item
    return True
def Pop():
    if isEmpty():
        return False
    global stackTop, stack
    stackTop -=1
    return stack[stackTop + 1]
while not isFull():
    item = randint(0, 100)
    result = Push(item)
    print(result, stack[: stackTop + 1], stackTop)

while not isEmpty():
    result = Pop()
    print(result, stack[:stackTop + 1], stackTop)

while not isFull():
    item = randint(0, 100)
    result = Push(item)
    print(result, stack[: stackTop +1], stackTop)
