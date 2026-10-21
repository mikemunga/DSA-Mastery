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
//sorted array only
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
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    array.length = i + 1;
    return array;
}
console.log(removeDuplicate([1, 2, 2, 3, 3, 3]));
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
        let output = "";
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
        while (current.next && current.next !== this.tail) {
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
class StuckNode {
    value;
    next = null;
    constructor(value) {
        this.value = value;
    }
}
class Stack {
    top = null;
    size = 0;
    push(value) {
        const newNode = new StuckNode(value);
        if (this.size === 0) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
        return this.size;
    }
    pop() {
        if (this.size === 0)
            return null;
        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.value;
    }
}
const browserHistory = new Stack();
browserHistory.push('google.com');
browserHistory.push('github.com');
browserHistory.push('myreactapp.com');
console.log(browserHistory.pop());
function recurssion(value) {
    if (value <= 0)
        return;
    console.log(value);
    value = value - 1;
    recurssion(value);
}
recurssion(5);
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftPart = mergeSort(arr.slice(0, mid));
    const rightPart = mergeSort(arr.slice(mid));
    const sortedResult = [];
    let i = 0;
    let j = 0;
    while (i < leftPart.length && j < rightPart.length) {
        if (leftPart[i] < rightPart[j]) {
            sortedResult.push(leftPart[i]);
            i++;
        }
        else {
            sortedResult.push(rightPart[j]);
            j++;
        }
    }
    while (i < leftPart.length) {
        sortedResult.push(leftPart[i]);
        i++;
    }
    while (j < rightPart.length) {
        sortedResult.push(rightPart[j]);
        j++;
    }
    return sortedResult;
}
console.log(mergeSort([2, 7, 5, 4, 10, 3, 1, 0]));
function stich(arr1, arr2) {
    let sortedResult = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedResult.push(arr1[i]);
            i++;
        }
        else {
            sortedResult.push(arr2[j]);
            j++;
        }
    }
    return sortedResult
        .concat(arr1.slice(i))
        .concat(arr2.slice(j));
}
console;
console.log(stich([1, 2, 3, 4], [5, 6, 7, 8]));
console.log('**********');
function sort(arr) {
    if (arr.length <= 1)
        return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    let sortedLeft = sort(left);
    let sortedRight = sort(right);
    let i = 0;
    let j = 0;
    let sortedResult = [];
    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] > sortedRight[j]) {
            sortedResult.push(sortedLeft[i]);
            i++;
            console.log(sortedLeft, sortedRight);
        }
        else {
            sortedResult.push(sortedRight[j]);
            j++;
        }
    }
    return sortedResult
        .concat(sortedLeft.slice(i))
        .concat(sortedRight.slice(j));
}
console.log(sort([34, 23, 10, 25, 30, 50, 70, 80]));
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    //this pivot shrinks the array on each call
    let pivot = arr[arr.length - 1];
    let lesser = [];
    let greater = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            lesser.push(arr[i]);
        }
        else {
            greater.push(arr[i]);
        }
    }
    // we start the pivot in between the lesser and the greater and takeout the greater of each side
    return [...quickSort(lesser), pivot, ...quickSort(greater)];
}
console.log(quickSort([34, 23, 10, 25, 100, 200, 300, 30, 50, 70, 80]));
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midNo = arr[mid];
        if (midNo === target) {
            return midNo;
        }
        else if (midNo > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3));
//graphs and network traversals next topic
function rangeGenerator(startNum, endNum) {
    if (startNum > endNum)
        return [];
    if (startNum === endNum) {
        return [startNum];
    }
    return [startNum, ...rangeGenerator(startNum + 1, endNum)];
}
console.log(rangeGenerator(10, 20));
function countDown(num) {
    if (num === 0) {
        return;
    }
    console.log(num);
    countDown(num - 1);
}
countDown(5);
function factoral(num) {
    if (num === 1) {
        return num;
    }
    let number = factoral(num - 1) * num;
    return number;
}
console.log(factoral(5));
function byTen(num) {
    if (num === 1)
        return num;
    let number = byTen(num - 1) * 100;
    return number;
}
console.log(byTen(5));
function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr[0] === target) {
        return 1 + countOccurrences(arr.slice(1), target);
    }
    return 0 + countOccurrences(arr.slice(1), target);
}
console.log(countOccurrences([1, 2, 3, 3, 3, 5], 3));
function double(arr) {
    if (arr.length === 0) {
        return [];
    }
    return [arr[0] * 2, ...double(arr.slice(1))];
}
console.log(double([2, 2, 2, 2]));
function findTarg(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let currentSum = arr[i] + arr[j];
        if (currentSum === target) {
            return true;
        }
        else if (currentSum < target) {
            i++;
        }
        else {
            j--;
        }
    }
    return false;
}
function counter(arr) {
    if (arr.length < 1)
        return [];
    let current = arr[0];
    let rest = arr.slice(1);
    return [current / 2, ...counter(rest)];
}
console.log(counter([1, 2, 3, 4]));
class Names {
    name;
    next = null;
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}
class List {
    length = 0;
    head = null;
    tail;
    constructor() {
        this.length = length;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Names(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0)
            return;
        let currentNode = this.head;
        let poppedNode = null;
        if (this.head === this.tail) {
            poppedNode = currentNode;
            this.length = 0;
            this.head = null;
            this.tail = null;
            return poppedNode;
        }
        while (currentNode && currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        poppedNode = currentNode.next;
        this.tail = currentNode;
        this.tail.next = null;
        this.length--;
        return poppedNode;
    }
    get(val) {
        if (this.length === 0)
            return undefined;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (val === currentNode.name) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return undefined;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        let currentHead = this.head;
        if (currentHead === this.tail) {
            return this.pop();
        }
        this.head = currentHead.next;
        this.length--;
        return currentHead;
    }
    unshift(val) {
        if (this.length === 0) {
            return this.push;
        }
        let currentHead = this.head;
        let newNode = new Names(val);
        this.head = newNode;
        this.head.next = currentHead;
    }
    find(index) {
        if (this.length === 0)
            return undefined;
        let currentNode = this.head;
        if (index > this.length) {
            return undefined;
        }
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    findIndex(value) {
        let currentNode = this.head;
        let count = 0;
        while (currentNode !== null) {
            if (currentNode.name <= value) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
    reverse() {
        let prev = null;
        let currentNode = this.head;
        let next = null;
        while (currentNode !== null) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
    }
    insert(index, value) {
        if (this.length === 0)
            return this.push;
        if (index === 0)
            return this.unshift(value);
        let currentNode = this.head;
        let count = 0;
        let prev = null;
        let newNode = new Names(value);
        while (count < index - 1) {
            currentNode = currentNode.next;
            count++;
        }
        prev = currentNode;
        currentNode = prev.next;
        newNode.next = currentNode;
        prev.next = newNode;
        this.length++;
        return this;
    }
    delete(index) {
        if (this.length === 0)
            return null;
        if (index === this.length - 1) {
            this.length--;
            return this.pop;
        }
        else if (index === 0) {
            return this.shift();
        }
        let currentNode = this.head;
        let count = 0;
        let prev = null;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        prev = currentNode;
        currentNode = prev.next;
        prev.next = currentNode.next;
        currentNode.next = null;
        this.length--;
    }
    print() {
        if (this.length === 0)
            return undefined;
        let data = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            data.push(currentNode.name);
            currentNode = currentNode.next;
        }
        return (data);
    }
}
const myNames = new List();
myNames.push("Apple");
myNames.push("Banana");
myNames.push("orange");
myNames.push("pineapple");
console.log(myNames);
console.log(myNames.insert(2, 'Juice'));
console.log(myNames.print());
function nums(arr) {
    if (arr.length < 1) {
        return 0;
    }
    let num = arr[0];
    let rest = arr.slice(1);
    return nums(rest) + num;
}
console.log(nums([1, 2, 3, 4, 5]));
function multiply(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    let currentNum = arr[0];
    let rest = arr.slice(1);
    return currentNum * multiply(rest);
}
console.log(multiply([2, 3, 4]));
const myComputer = {
    name: "Root",
    files: ["photo.jpg", "notes.txt"],
    subfolders: [
        {
            name: "Documents",
            files: ["resume.pdf"],
            subfolders: [
                {
                    name: "Taxes",
                    files: ["2025_tax.pdf", "2026_tax.pdf"],
                    subfolders: []
                }
            ]
        },
        {
            name: "Music",
            files: ["song.mp3"],
            subfolders: []
        }
    ]
};
function countFolders(folder) {
    let total = 1;
    for (const sub of folder.subfolders) {
        total += countFolders(sub);
    }
    return total;
}
function findFolderByName(folder, targetName) {
    if (folder.name === targetName) {
        return folder;
    }
    for (const sub of folder.subfolders) {
        let result = findFolderByName(sub, targetName);
        if (result !== null) {
            return result;
        }
    }
    return null;
}
console.log(findFolderByName(myComputer, "Music"));
class TreeNode {
    value;
    left;
    right;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class TreeNode1 {
    value;
    left = null;
    right = null;
    constructor(value) {
        this.value = value;
    }
}
function insertNode(root, newValue) {
    if (root === null) {
        return new TreeNode1(newValue);
    }
    if (newValue < root.value) {
        root.left = insertNode(root.left, newValue);
    }
    else if (newValue > root.value) {
        root.right = insertNode(root.right, newValue);
    }
    return root;
}
let nodeA = new TreeNode1(23);
let nodeB = new TreeNode1(10);
let nodeC = new TreeNode1(5);
nodeA.left = nodeB;
nodeB.left = nodeC;
insertNode(nodeA, 100);
console.log(nodeA);
function multipyBy(arr) {
    if (arr.length < 1)
        return [];
    let [elem = 0, ...rest] = arr;
    return [elem * 2, ...multipyBy(rest)];
}
console.log(multipyBy([1, 2, 3, 6, 8]));
function evenNums(arr) {
    if (arr.length < 1)
        return [];
    const elem = arr[0];
    const rest = arr.slice(1);
    if (elem % 2 !== 0) {
        //if the element doest meet our goal call next the rest
        return evenNums(rest);
    }
    else {
        //else put it inside the returned array
        return [elem - 2, ...evenNums(rest)];
    }
}
console.log(evenNums([4, 56, 23, 44, 5, 9, 3]));
function sumAllNumbers(arr, acc = 0) {
    if (arr.length < 1)
        return acc;
    let [elem, ...rest] = arr;
    return sumAllNumbers(rest, acc + elem);
}
console.log(sumAllNumbers([34, 56, 78], 10));
function flattenArray(array, acc = []) {
    if (array.length < 1)
        return acc;
    let first = array[0];
    let rest = array.slice(1);
    if (Array.isArray(first)) {
        //keep the conveyor belt forward
        return flattenArray(rest, [...acc, ...flattenArray(first)]);
    }
    else {
        return flattenArray(rest, [...acc, first]);
    }
}
console.log(flattenArray([1, 2, 3, [34, 18, [90, 56, [90, 100]]]]));
class ThreadEngine {
    countTotalComments(threads, acc = 0) {
        if (threads.length < 1)
            return acc;
        const current = threads[0];
        const rest = threads.slice(1);
        const currentWithRepliesCount = 1 + this.countTotalComments(current.replies, 0);
        return this.countTotalComments(rest, acc + currentWithRepliesCount);
    }
    flattenThreads(threads, acc = []) {
        if (threads.length < 1)
            return acc;
        const current = threads[0];
        const rest = threads.slice(1);
        const flatItem = { id: current.id, author: current.author, text: current.text };
        const accWithReplies = this.flattenThreads(current.replies, [...acc, flatItem]);
        return this.flattenThreads(rest, accWithReplies);
    }
}
const postDiscussion = [
    {
        id: "c1",
        author: "Alice",
        text: "I love learning recursion!",
        replies: [
            {
                id: "c2",
                author: "Bob",
                text: "Same! Accumulators are magic.",
                replies: [
                    { id: "c3", author: "Charlie", text: "It finally clicked for me today.", replies: [] }
                ]
            }
        ]
    },
    {
        id: "c4",
        author: "David",
        text: "Can someone explain the slice method again?",
        replies: []
    }
];
const engine = new ThreadEngine();
console.log("Total Comments in Database:", engine.countTotalComments(postDiscussion));
console.log("Flat Feed for Mobile:", engine.flattenThreads(postDiscussion));
function buildCommentIndex(threads, indexMap = new Map()) {
    if (threads.length < 1)
        return indexMap;
    const currentThread = threads[0];
    const rest = threads.slice(1);
    indexMap.set(currentThread.id, currentThread);
    if (currentThread.replies && currentThread.replies.length > 0) {
        buildCommentIndex(currentThread.replies, indexMap);
    }
    return buildCommentIndex(rest, indexMap);
}
const commentIndex = buildCommentIndex(postDiscussion);
console.log(commentIndex.get("c2"));
export {};
//# sourceMappingURL=DSA.js.map