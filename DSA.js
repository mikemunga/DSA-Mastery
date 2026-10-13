function findGreatNo(arr) {
    if (arr.length === 0)
        return 0;
    return Math.max(...arr);
}
console.log(findGreatNo([34, 12, 6, 8, 9]));
function duplicateNo(arr) {
    const seen = new Set();
    const duplicates = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        }
        else {
            seen.add(num);
        }
    }
    return Array.from(duplicates);
}
console.log(duplicateNo([1, 2, 1, 3, 3, 4]));
function reverseArray(arr) {
    if (arr.length <= 1)
        return;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 3, 4]));
function findTargetSum(arr, target) {
    if (arr.length <= 1)
        0;
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [arr[left], arr[right]];
        }
        else if (currentSum > target) {
            right--;
        }
        else {
            left++;
        }
    }
    return null;
}
console.log(findTargetSum([1, 2, 3, 4, 5, 6, 9], 13));
function palindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return 'not';
        }
        left++;
        right--;
    }
    return ' palindrome';
}
console.log(palindrome('roar'));
function removeDuplicate(array) {
    if (array.length <= 1)
        return;
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
    }
    array.length = i + 1;
    return array;
}
class node {
    name;
    next = null;
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}
class SingleLinkedList {
    head;
    tail;
    length;
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
        this.length++;
        return this;
    }
    print() {
        let current = this.head;
        let output = '';
        while (current !== null) {
            output += current.name + "_>";
            current = current.next;
        }
        console.log(output + "null");
    }
    pop() {
        if (!this.head)
            return undefined;
        const poppedNode = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return poppedNode;
        }
        let current = this.head;
        while (current.next !== null && current.next.next !== null) {
            current = current.next;
        }
        this.tail = current;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head)
            return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    reverse() {
        if (this.length <= 1)
            return this;
        let current = this.head;
        let prev = null;
        let next = null;
        this.tail = this.head;
        while (current !== null) {
            //store the next
            next = current.next;
            //then unlick it
            current.next = prev;
            prev = current;
            //current = next is the loop driver
            current = next;
        }
        this.head = prev;
        return this;
    }
    unshift(val) {
        const newNode = new node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index >= this.length || index < 0)
            return null;
        let current = this.head;
        let counter = 0;
        while (counter < index && current) {
            current = current.next;
            counter++;
        }
        return (current);
    }
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.name = value;
            return true;
        }
        return false;
    }
    insert(val, index) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true;
        }
        const newNode = new node(val);
        const prev = this.get(index - 1);
        if (prev) {
            newNode.next = prev.next;
            prev.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === this.length - 1)
            return this.pop();
        const prev = this.get(index - 1);
        if (prev && prev.next) {
            const removedNode = prev.next;
            prev.next = removedNode.next;
            this.length--;
            return removedNode;
        }
        return null;
    }
}
const list = new SingleLinkedList();
list.push('hello world');
list.push('hello world 2');
list.push('hello world 3');
list.push('hello world 4'); //
list.push('hello world 5');
list.unshift('hello javascript');
console.log(list);
function findTarget(arr, target) {
    if (arr.length <= 1)
        return;
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let complement = target - current;
        if (seen[complement] !== undefined) {
            return [seen[complement], current];
        }
        else {
            seen[current] = i;
        }
    }
    return null;
}
function findDuplicat(array) {
    if (array.length <= 1)
        return;
    let seen = {};
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (seen[current] !== undefined) {
            return true;
        }
        else {
            seen[current] = current;
        }
    }
    return seen;
}
console.log(findDuplicat([2, 3, 3, 7, 4, 23, 56, 100]));
function anagram(str) {
    if (str.length <= 1)
        return;
    let counter = {};
    for (let i = 0; i < str.length; i++) {
        let seen = str[i];
        if (counter[seen] !== undefined) {
            counter[seen]++;
        }
        else {
            counter[seen] = 1;
        }
    }
    return counter;
}
function twoSum(arr, target) {
    if (arr.length <= 1)
        return;
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let complement = target - current;
        if (seen[complement] !== undefined) {
            return [seen[complement], i];
        }
        else {
            seen[current] = i;
        }
    }
}
console.log(twoSum([2, 3, 3, 56, 7, 8], 64));
function validString(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        let current = str[0];
        if (array[i] === current) {
        }
    }
}
function test(array, target) {
    if (array.length <= 1)
        return;
    let store = {};
    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        let complement = target - current;
        if (store[complement] !== undefined) {
            return [store[complement], i];
        }
        else {
            store[current] = i;
        }
    }
}
console.log(test([2, 7, 11, 15], 9));
function reverse1(str) {
    if (str.length <= 1)
        return "not input";
    let arr = str.split('');
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [str[right], str[left]];
        left++;
        right--;
    }
    return arr.join('');
}
console.log(reverse1('hello'));
function sliding(array, k) {
    if (array.length <= 1)
        return 0;
    let currentSum = 0;
    if (array.length < k)
        return 0;
    for (let i = 0; i < k; i++) {
        currentSum += array[i];
    }
    let maxSum = currentSum;
    for (let i = k; i < array.length; i++) {
        currentSum = currentSum + array[i] - array[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
console.log(sliding([1, 2, 3, 4, 5, 6, 7, 8], 2));
let records = {
    hello: 'name'
};
const p = {
    name: 'Alice', age: 30, addresses: [
        { type: "home", home: '123 main st', city: "Anytown" },
        { type: "work", street: "456 Merket St", city: "Workville" }
    ]
};
const newPerson = { ...p };
const deepCopy = structuredClone(p);
console.log(deepCopy);
console.log(Object.values(p));
const studentsDatabase = [
    {
        studentId: "STU-101",
        studentName: "Alex",
        classGrade: "Grade 5"
    },
    {
        studentId: "STU-102",
        studentName: "jimy",
        classGrade: "Grade 5"
    },
    {
        studentId: "STU-103",
        studentName: "maggy",
        classGrade: "Grade 5"
    },
    {
        studentId: "STU-104",
        studentName: "Sarah Smith",
        classGrade: "Grade 6"
    },
    {
        studentId: "STU-105",
        studentName: "miriam",
        classGrade: "Grade 6"
    },
    {
        studentId: "STU-105",
        studentName: "janet",
        classGrade: "Grade 6"
    }
];
function parentLogin(enteredId) {
    const matchedStudent = studentsDatabase.find(st => st.studentId === enteredId);
    if (matchedStudent) {
        return console.log(matchedStudent);
    }
    console.log('no student available with this id');
    return 'no student found with this id';
}
const studentMap = new Map();
studentsDatabase.forEach(student => studentMap.set(student.studentId, student));
const gradesMap = new Map();
function addTestScore(studentsDatabase, score) {
    const studentExists = studentMap.has(score.studentId);
    if (!studentExists) {
        return;
    }
    const existingGrades = gradesMap.get(score.studentId) || [];
    existingGrades.push(score);
    gradesMap.set(score.studentId, existingGrades);
}
console.log(list);
class QueueNode {
    value;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
class Queue {
    first = null;
    last = null;
    size = 0;
    enqueue(value) {
        const newNode = new QueueNode(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }
    deque() {
        if (this.size === 0)
            return null;
        const servedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return servedNode.value;
    }
}
const printQueue = new Queue();
printQueue.enqueue("Document_A.pdf");
printQueue.enqueue("Photo_B.png");
printQueue.enqueue("Document_A.pdf");
printQueue.enqueue("Photo_B.png");
console.log(printQueue);
export {};
//# sourceMappingURL=DSA.js.map