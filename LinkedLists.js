class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    //Implement a function that inserts a new node before a given node containing a key
    insertBefore(item, key) {
        let currNode = this.head;
        let findValue = this.find(key);
        while (currNode.next.value !== key) {
            currNode = currNode.next;
        }
        currNode.next = new _Node(item, findValue)
    }
    //Implement a function that inserts a new node after a given node containing a key
    insertAfter(item, key) {
        let findValue = this.find(key);
        let tempNext = findValue.next;
        findValue.next = new _Node(item, tempNext);
    }
    //Implement a function that inserts an item at a specific position in the linked list
    insertAt(item, pos) {
        let counter = 1;
        let currNode = this.head;
        while (counter !== pos && currNode !== null) {
            currNode = currNode.next;
            counter++;
        }
        this.insertBefore(item, currNode.value)
    }
    print() {
        let result = [];
        let currNode = this.head;
        while (currNode !== null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(result.join(' => '));
    }
}

function display(list) {
    let result = [];
        let currNode = list.head;
        while (currNode !== null) {
            result.push(currNode.value);
            currNode = currNode.next;
        }
        console.log(result.join(' => '));
}
function size(list) {
    let currNode = list.head;
    let counter = 0;
    while (currNode !== null) {
        counter++;
        currNode = currNode.next;
    }
    return counter;
}
function isEmpty(list) {
    let currNode = list.head;
    if(!currNode) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
function findPrevious(list, searchItem) {
    let currNode = list.head;
    while (currNode.next.value !== searchItem) {
        currNode = currNode.next;
    }
    console.log(currNode.value);
}
function findLast(list) {
    let currNode = list.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    console.log(currNode.value)
}

function main() {
    //create a linked list with the name SLL and add the following items to your linked list: Apollo, Boomer, Helo, Husker, Starbuck.
    let SLL = new LinkedList;
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    //SLL.print();
    //Add Tauhida to the list
    SLL.insertLast('Tauhida');
    //SLL.print();
    //Remove Husker from the list
    SLL.remove('Husker');
    //SLL.print();
    //Add Athena before Boomer
    SLL.insertBefore('Athena', 'Boomer');
    //SLL.print();
    //Add Hotdog after Helo 
    SLL.insertAfter('Hotdog', 'Helo')
    //SLL.print();
    SLL.insertAt('Kat', 3);
    //SLL.print();
    SLL.remove('Tauhida');
    //SLL.print();
    display(SLL);
    //size(SLL);
    //isEmpty(SLL);
    //isEmpty('');
    //findPrevious(SLL, 'Athena')
    //findLast(SLL);
    //reverseList(SLL);
    //console.log(thirdFromEnd(SLL));
    //console.log(middleOfList(SLL));
    //console.log(cycleList(SLL))

    let CycleList = new LinkedList;
    CycleList.insertFirst('One');
    CycleList.insertLast('Two');
    CycleList.insertLast('One');
    //console.log(cycleList(CycleList))

    let SortList = new LinkedList;
    SortList.insertFirst(3);
    SortList.insertLast(2);
    SortList.insertLast(5);
    SortList.insertLast(7);
    SortList.insertLast(1);
    sortList(SortList);
}
main()

//Mystery Program
/*Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
What is the time complexity of this algorithm?*/
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
//This program is finding duplicate values in a linked list and removing the duplicates
//The time complexity would be polynomial O(n^2) since there is a nested while function so it will loop through the list one time for each value in the list.

// Reverse a List
function reverseList(list) {
    let current = list.head;
    while (current !== null) {
        list.remove(current.value)
        list.insertFirst(current.value)
        current = current.next;
    }
    display(list);
}

// 3rd from the end
function thirdFromEnd(list) {
    let end = size(list) - 2;
    let current = list.head;
    let counter = 1;
    while (counter !== end) {
        counter++;
        current = current.next;
    }
    return current.value
}

// Middle of a list
function middleOfList(list) {
    let listSize = size(list)
    let middle = Math.ceil(listSize/2)
    let counter = 1;
    let current = list.head;
    while (counter !== middle) {
        counter++;
        current = current.next;
    }
    return current.value
}

// Cycle in a list
function cycleList(list) {
    let current = list.head;
    while (current.next !== null) {
        let newNode = current.next;
        while (newNode.next !== null) {
            if (current.value === newNode.next.value) {
                return true
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
    return false
}

// Sorting a list
function sortList(list) {
    let currNode = list.head;
    while (currNode !== null) {
        let nextNode = currNode.next;
        while (nextNode !== null){
            if(nextNode.value < currNode.value){
                let tempNode = nextNode;
                list.remove(nextNode.value);
                list.insertFirst(nextNode.value);
                nextNode = currNode;
                currNode = tempNode; 
            }
            nextNode = nextNode.next;
        }
        currNode = currNode.next;
    }
    display(list)
}