
function findGreatNo(arr: number[]) : number {
  if(arr.length === 0) return 0;
 return Math.max(...arr)
}

console.log(findGreatNo([34,12,6,8,9]))

function duplicateNo(arr: number[]): number[]{
 const seen = new Set<number>();
 const duplicates = new Set<number>();
 for(const num of arr){
  if(seen.has(num)){
    duplicates.add(num)
  } else {
    seen.add(num)
  }
 }
 return Array.from(duplicates);
}

console.log(duplicateNo([1,2,1,3,3,4]))

function reverseArray(arr: number[]){
  if(arr.length<=1) return

    let left = 0;
    let right = arr.length -1;

    while(left < right) {
        [arr[left], arr[right]] = [arr[right]!, arr[left]!];

        left++
        right--
    }
    return arr;
}

console.log(reverseArray([1,2,3,4]))
//sorted array only

function findTargetSum(arr:number[], target: number): number[] | null{
  if(arr.length<=1) 0

    let left = 0;
    let right = arr.length -1;
    while(left<right){
    let currentSum = arr[left]! + arr[right]!
      if(currentSum === target){
        return [arr[left]!, arr[right]!]
      } else if(currentSum > target){
        right--;
      }else {
        left++
      }
    }
    return null
}


console.log(findTargetSum([1,2,3,4,5,6,9], 13))


function palindrome(str: string):string{
let left = 0;
let right=str.length-1;

  while(left<right){
    if(str[left] !== str[right]){
        return 'not'
    }
    left++
    right--
  }
  return ' palindrome'
}

console.log(palindrome('roar'));


function removeDuplicate(array: number[]){
  if(array.length<=1) return
  let i=0;
  for(let j=1; j<array.length; j++){
   if(array[i] !==array[j]){
    i++
    array[i] = array[j]!
    
   }
}

array.length =i+1;
return array
}
console.log(removeDuplicate([1,2,2,3,3,3]))



class node<T> {
  name: T;
  next: node<T> | null = null
  constructor(name: T){
    this.name = name;
    this.next =null;
  }
}


class SingleLinkedList<T> {
  head: node<T> | null;
  tail: node<T> | null;
  length: number
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
  }


  push(value: T){
  const newNode= new node(value);
  if(!this.head) {
    this.head= newNode;
    this.tail = this.head
  }else{
    if(this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  this.length++;
  return this;
  }

 
  print() {
    let current = this.head;
    let output="";

    while(current !==null){
      output +=current.name + "_>";
      current = current.next
    }
    console.log(output + "null")
  }

  pop(){
    if(!this.head) return undefined;

   const poppedNode = this.tail;
   if(this.head === this.tail) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return poppedNode;
   }
   
   let current = this.head;
   while(current.next && current.next !==this.tail) {
    current = current.next;
   }
   this.tail = current;
   this.tail.next = null;
   this.length--;

   return poppedNode;
  }

 
  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if(this.length === 0){
      this.tail=null;
    }
    return currentHead
  }



  
  reverse(){
    if(this.length<=1) return this;
    let current = this.head;
    let prev = null;
    let next = null;

    this.tail = this.head

    while(current !==null){
      //store the next
      next = current.next;
      //then unlick it

      current.next= prev;
      prev = current;

      //current = next is the loop driver
      current = next  
    }

    this.head = prev;
    return this
  }

  unshift (val: T) {
    const newNode = new node(val)
    if(!this.head){
     this.head = newNode;
     this.tail=newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
   this.length++;
    return this
  }

  get(index: number) :node<T> | null{
    if(index>=this.length || index<0) return null;
    let current = this.head;
    let counter = 0;

    while(counter<index && current){
      current = current.next;
      counter++;
    }
    return(current)
  }

  set(index: number, value:T): boolean {
    let foundNode = this.get(index)
    if(foundNode){
      foundNode.name = value
      return true
  }
  return false;
}



insert(val: T, index: number): boolean {
  if(index < 0 || index > this.length) return false;

  if(index === 0) {
    this.unshift(val);
    return true;
  }
  if(index === this.length ) {
    this.push(val);
    return true
  }

  const newNode = new node(val);
  const prev = this.get (index -1);

  if(prev) {
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true
  }
  return false
}

remove(index: number) : node<T> | null |undefined {
if(index < 0 || index>=this.length) return null;

if(index === this.length -1) return this.pop();

const prev = this.get(index -1);

if(prev && prev.next) {
  const removedNode = prev.next;
  prev.next = removedNode.next;
  this.length--;
  return removedNode
}
return null;
}

}


const list = new SingleLinkedList();
list.push('hello world');
list.push('hello world 2');
list.push('hello world 3');
list.push('hello world 4');//
list.push('hello world 5');  
list.unshift('hello javascript') 



console.log(list)



function findTarget(arr: number[], target: number){
  if(arr.length<=1) return
  let seen: Record<number, number>={};
  for(let i=0; i<arr.length; i++){
    let current = arr[i]!;
    let complement = target-current!;

    if(seen[complement] !==undefined){
      return [seen[complement], current]
    }else{
      seen[current] = i; 
    }
  }
  return null
}

function findDuplicat(array:number[]){
  if(array.length<=1) return
  let seen: Record<number, number> = {};
  for(let i=0; i<array.length; i++){
    let current = array[i]!;
    if(seen[current] !==undefined){
      return true
    } else {
      seen[current] = current
    }
  }
  return seen
}

console.log(findDuplicat([2,3,3,7,4,23,56,100]))

function anagram(str: string){
  if(str.length<=1) return
  let counter: Record<string, number> ={};
  for(let i=0; i<str.length; i++){
    let seen = str[i]!
    if(counter[seen] !==undefined){
      counter[seen] ++
    }else{
      counter[seen] = 1
    }
  } 
  return counter
}
function twoSum(arr: number[], target:number){
  if(arr.length<=1) return
  let seen:Record<string, number> = {};
  for(let i=0; i<arr.length; i++){
    let current = arr[i]!
    let complement = target-current;

    if(seen[complement] !==undefined){
      return [seen[complement], i]
    }else{
      seen[current] = i
    }
  }
}

console.log(twoSum([2,3,3,56,7,8],64))


function validString(str: string){
  let array: string[] = [];
  for(let i=0; i<str.length; i++){
    let current=str[0];
    if(array[i] ===current){
    }
  }
}



function test(array: number[], target: number) {
  if(array.length<=1) return
  let store: Record<string, number> = {};
  for(let i=0; i<array.length; i++){
    let current = array[i]!;
    let complement = target-current;

    if(store[complement] !==undefined){
      return [store[complement], i]
    } else {
      store[current] = i
    }
  }
}
console.log(test([2,7,11,15], 9))



function reverse1(str: string): string{
  if(str.length<=1) return "not input"

  let arr=str.split('')
  let left=0;
  let right = str.length -1;
  while(left < right){
    [arr[left], arr[right]] = [str[right]!, str[left]!];
    left++;
    right--
  }
  return arr.join('');
}
console.log(reverse1('hello'))


function sliding(array:number[], k:number){
  if(array.length<=1) return 0;
  let currentSum=0
  
if(array.length < k) return 0;
for(let i=0; i<k; i++){
  currentSum +=array[i]!
}
let maxSum = currentSum;

for(let i=k; i<array.length; i++){
  currentSum = currentSum + array[i]! - array[i-k]!;
  maxSum = Math.max(maxSum, currentSum)
}

return maxSum
}
console.log(sliding([1,2,3,4,5,6,7,8],2))

let records={
  hello:'name'
}




const p ={
  name: 'Alice', age: 30, addresses: [
    {type: "home", home:'123 main st', city: "Anytown"},
    {type: "work", street: "456 Merket St", city: "Workville"}
  ]
}

const newPerson = {...p}

const deepCopy = structuredClone(p);
console.log(deepCopy);
console.log(Object.values(p));


interface StudentsProfile {
  studentId: string;
  studentName: string;
  classGrade: string
}

interface GradeRecord {
  id: string;
  studentId: string;
  score: number;
  teacherComments?: string
  updatedDate: Date;
}



const studentsDatabase: StudentsProfile[] = [
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
]



function parentLogin(enteredId: string):StudentsProfile | string {
 const matchedStudent =studentsDatabase.find(st=>st.studentId === enteredId);
 if(matchedStudent) {
  return console.log(matchedStudent)!
 }
 console.log('no student available with this id');
 return 'no student found with this id'
}



const studentMap = new Map<string, StudentsProfile>();
studentsDatabase.forEach(student=> studentMap.set(student.studentId, student));
 
const gradesMap = new Map<string, GradeRecord[]>();
function addTestScore(studentsDatabase: StudentsProfile[],score:GradeRecord){
  const studentExists = studentMap.has(score.studentId);
  if(!studentExists){
    return
  }
  const existingGrades = gradesMap.get(score.studentId) || [];
  existingGrades.push(score);
  gradesMap.set(score.studentId, existingGrades);

  

}

console.log(list)


class QueueNode<T> {
  value: T;
  next: QueueNode<T> | null = null;
  constructor (value: T) {
    this.value = value;
  }
}



class Queue<T> {
  first: QueueNode<T> | null = null;
  last: QueueNode<T> | null = null;
  size :number = 0;


  enqueue(value: T): number {
    const newNode = new QueueNode(value)
    if(this.size === 0) {
      this.first = newNode;
      this.last = newNode
    } else {
      this.last!.next = newNode;
      this.last = newNode
    }
    this.size++;
    return this.size
  }
  deque(): T | null{
    if(this.size === 0) return null;
    const servedNode = this.first!;

    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first!.next;
    this.size--;
    return servedNode.value
  }
}

const printQueue = new Queue<string>();
printQueue.enqueue("Document_A.pdf");
printQueue.enqueue("Photo_B.png");
printQueue.enqueue("Document_A.pdf");
printQueue.enqueue("Photo_B.png")
console.log(printQueue)


class StuckNode<T>{
  value: T;
  next: StuckNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class Stack<T> {
  top: StuckNode<T> | null = null;
  size : number = 0;

  push(value: T) : number {
      const newNode = new StuckNode(value);
      
      if(this.size === 0) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.size++;
      return this.size
   }

   pop(): T | null {
    if(this.size === 0) return null;

    const poppedNode = this.top;
    this.top = this.top!.next 

    this.size--;
    return poppedNode!.value
   }
}

const browserHistory = new Stack<string>();
browserHistory.push('google.com')
browserHistory.push('github.com')
browserHistory.push('myreactapp.com')
console.log(browserHistory.pop())

function recurssion(value: number){
 if(value <=0 ) return;
 console.log(value)
 value =value - 1
 recurssion(value)
}

recurssion(5);





function mergeSort(arr: number[]) {
  if(arr.length <=1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  const leftPart = mergeSort(arr.slice(0, mid));
  const rightPart = mergeSort(arr.slice(mid));
  const sortedResult: number[] = [];
  let i = 0;
  let j = 0;

  while (i < leftPart!.length && j < rightPart!.length) {
    if(leftPart[i]! < rightPart[j]!) {
      sortedResult.push(leftPart[i]!);
      i++;
    } else {
      sortedResult.push(rightPart[j]!);
      j++
    }
  }
  while(i < leftPart.length) {
    sortedResult.push(leftPart[i]!);
    i++
  }
  while(j < rightPart.length) {
    sortedResult.push(rightPart[j]!);
    j++
  }

  return sortedResult;
}


  console.log(mergeSort([2,7,5,4,  10,3,1,0]))




  function stich(arr1:number[], arr2:number[]): number[] {
    let sortedResult: number[] =[];
    let i: number = 0;
    let j: number  = 0;
  
    while(i < arr1.length && j < arr2.length) {
      if(arr1[i]! < arr2[j]!) {
        sortedResult.push(arr1[i]!)
        i++
      } else {
        sortedResult.push(arr2[j]!)
        j++
      }
    }


    return sortedResult
    .concat(arr1.slice(i))
    .concat(arr2.slice(j))
  }
 console
  console.log(stich([1,2,3,4], [5,6,7,8]));

console.log('**********')



  function sort(arr: number[]) {

   if(arr.length <=1) return arr;
   let mid = Math.floor(arr.length/2);

   let left = arr.slice(0,mid);
    
   let right = arr.slice(mid);
   let sortedLeft:number[] = sort(left);
   let sortedRight: number[]= sort(right);
   
   let i = 0;
   let j = 0;
   let sortedResult : number[] = [];
   
  while(i < sortedLeft.length && j < sortedRight.length) {
    if(sortedLeft[i]! > sortedRight[j]!) {
      sortedResult.push(sortedLeft[i]!);
      i++  
      console.log(sortedLeft, sortedRight)
    } else {
      sortedResult.push(sortedRight[j]!);
      j++
    } 
  }

  return sortedResult
  .concat(sortedLeft.slice(i))
  .concat(sortedRight.slice(j))
  }



 console.log(sort([34,23,10,25, 30,50,70,80]))
 
function quickSort(arr: number[]): number[] {
  if(arr.length <= 1) return arr
 //this pivot shrinks the array on each call
  let pivot = arr[arr.length -1]!;

  let lesser: number[] = [];
  let greater: number[] = [];

  for(let i=0; i<arr.length -1; i++) {
     if(arr[i]! < pivot!) {
       lesser.push(arr[i]!)
      } else {
      greater.push(arr[i]!)
   }
  }
// we start the pivot in between the lesser and the greater and takeout the greater of each side
  return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

console.log(quickSort([34,23,10,25,100,200,300,30,50,70,80]));



function binarySearch(arr:number[], target:number): number {
  let left = 0;
  let right = arr.length - 1;

  
  while(left <= right) {
  let mid = Math.floor((left+right)/2);
  let midNo = arr[mid];
    if(midNo === target) {
      return midNo
    } else if (midNo! > target) {
     right = mid-1
    } else {
      left = mid + 1
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7],3))
//graphs and network traversals next topic




function rangeGenerator(startNum: number, endNum:number) :number[]{
  if(startNum > endNum) return []
  if(startNum === endNum) {
    return [startNum]
  }

 return [startNum,...rangeGenerator(startNum+1, endNum)]
}

console.log(rangeGenerator(10, 20))


function countDown(num: number): void {
  if(num === 0) {
    return 
  }
  console.log(num)
  countDown(num -1)
}

countDown(5)

function factoral(num: number) : number {
  if(num === 1){
    return num
  }

  let number = factoral(num -1) * num
  return number
}

console.log(factoral(5))


function byTen(num:number):number{
  if(num === 1)  return num
  let number = byTen(num-1) * 100
  return number
}

console.log(byTen(5))

function countOccurrences(arr:number[], target:number): number{

  if(arr.length === 0){
    return 0
  }
  if(arr[0] === target) {
    return 1+ countOccurrences(arr.slice(1), target)
  }
  return 0 + countOccurrences(arr.slice(1), target)

}

console.log(countOccurrences([1,2,3,3,3,5],3))

function double(arr:number[]):number[]{
  if(arr.length === 0){
    return []
  }
  return[arr[0]!* 2,...double(arr.slice(1))]
}

console.log(double([2,2,2,2]))


function findTarg(arr:number[], target:number): boolean {
  let i = 0;
  let j=arr.length-1;

  while(i<j){
  let currentSum = arr[i]! + arr[j]!
   if(currentSum === target){
    return true
   } else if(currentSum< target){
    i++
   } else {
    j--
   }
  }
  return false
}

function counter(arr:number[]): number[] {
 if(arr.length<1) return []
 let current = arr[0];
 let rest = arr.slice(1);
 return [current!/2,...counter(rest)]
  
}

console.log(counter([1,2,3,4]))



class Names<T> {
  name: T
  next:Names<T> | null = null 

  constructor(name: T){
    this.name = name
    this.next = null
  }

}





class List<T> {
  length:number=0;
  head: Names<T> |null=null
  tail: Names<T> | null


  constructor(){
    this.length = length
    this.head = null
    this.tail = null

  }

  push(val:T){
    let newNode = new Names(val)
  
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    this.tail!.next = newNode
    this.tail = newNode
    this.length++
    return this
  
  }
 
  pop(){
    if(this.length ===0) return;
    let currentNode = this.head
    let poppedNode=null
    if(this.head === this.tail){
     poppedNode = currentNode
     this.length = 0;
     this.head = null
     this.tail = null
     return poppedNode;
    }
    
    while(currentNode && currentNode.next !== this.tail){
      currentNode = currentNode.next
    }

    poppedNode = currentNode!.next
    this.tail = currentNode
    this.tail!.next = null
    this.length--
    return poppedNode
  }

  get(val: T) {
    if(this.length === 0) return undefined
    let currentNode = this.head;
    
    while(currentNode !==null){
      if(val === currentNode!.name){
        return currentNode
      }
     currentNode= currentNode!.next
      
    }
    return undefined
  }

 

  shift(){
    if(this.length === 0) return undefined;
    let currentHead = this.head
    if(currentHead === this.tail){
     return this.pop()
    }
    this.head = currentHead!.next
    this.length--
    return currentHead
  }
  unshift(val: T){
    if(this.length === 0 ){
      return this.push
    }

    let currentHead = this.head
    let newNode = new Names(val);
    this.head = newNode;
    this.head.next = currentHead
  }

  find(index: number) {
    if(this.length === 0) return undefined
    let currentNode = this.head;
    if(index > this.length){
      return undefined
    }
    let counter = 0
    while(counter < index) {
      currentNode = currentNode!.next
      counter++
    }
    return currentNode
     
  }
  findIndex(value:T){
    let currentNode = this.head
    let count = 0
    while(currentNode !==null){
      if(currentNode.name <= value){
       return count
      }
      currentNode = currentNode.next
      count++
    }
    return -1
  }
  reverse(){
    let prev = null
    let currentNode = this.head;
    let next = null

    while(currentNode !== null){
      next = currentNode!.next
      currentNode.next = prev;
      prev = currentNode
      currentNode = next

    }

  }

  insert( index:number, value:T) {
    
    if(this.length === 0) return this.push
    if(index === 0) return this.unshift(value)
    let currentNode = this.head
    let count = 0;
    let prev = null
    let newNode = new Names(value)

    while(count < index-1){
      currentNode = currentNode!.next
      count++
    }
    prev = currentNode;
    currentNode = prev!.next
    newNode.next = currentNode;
    prev!.next = newNode
    this.length++
   return this
  }

  delete(index:number){
    if(this.length ===0) return null
    if(index === this.length-1){
      this.length--
      return this.pop
    }else if(index === 0){
      return this.shift()
    }

 

    let currentNode = this.head
    let count = 0
    let prev= null
    
    while(count < index){
      currentNode = currentNode!.next
      count++
    }
    prev = currentNode
    currentNode = prev!.next
    prev!.next = currentNode!.next
    currentNode!.next = null
    this.length--
    

  }
  print(){
    if(this.length === 0) return undefined
    let data = [];
    let currentNode = this.head
   
    while(currentNode !==null){
      data.push(currentNode.name)
      currentNode = currentNode!.next
    }
    return(data)
  }
}

const myNames = new List<string>()
myNames.push("Apple")
myNames.push("Banana")
myNames.push("orange")
myNames.push("pineapple")
console.log(myNames)

console.log(myNames.insert(2, 'Juice'))
console.log(myNames.print())

function nums(arr: number[]): number {
  if(arr.length  < 1) {
    return 0
  }

  let num = arr[0]
  let rest = arr.slice(1);

  return nums(rest) + num!
}

console.log(nums([1,2,3,4,5]))


function multiply(arr:number[]):number{
 
if(arr.length === 1) {
  return arr[0]!
}
let currentNum = arr[0]
let rest = arr.slice(1)
  return currentNum! * multiply(rest)
}
console.log(multiply([2,3,4]))







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

function countFolders(folder): number {
 let total = 1

 for (const sub of folder.subfolders){
   total+= countFolders(sub);

  
 }
 return total
}







interface Folder {
  name: string;
  files: string[];
  subfolders:Folder[];
} 

function findFolderByName(folder: Folder, targetName: string): Folder | null {
  
  
  if (folder.name === targetName) {
    return folder; 
  }

  
  for (const sub of folder.subfolders) {
  
    let result = findFolderByName(sub, targetName);  
    if(result !==null) {
      return result
    }
  
  }
  return null;
}


    
console.log(findFolderByName(myComputer, "Music")); 


class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null

  constructor (value: number){
    this.value=value
    this.left = null
    this.right = null
  }
}


class TreeNode1 {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

function insertNode(root: TreeNode1 | null, newValue: number): TreeNode1 {
  
  if (root === null) {
    return new TreeNode1(newValue);
  }

 
  if (newValue < root.value) {
    root.left = insertNode(root.left, newValue)
  } else if (newValue > root.value) {

    root.right = insertNode(root.right, newValue)
  }

 
  return root;
}
let nodeA = new TreeNode1(23);
let nodeB = new TreeNode1(10);
let nodeC = new TreeNode1(5);

nodeA.left = nodeB
nodeB.left = nodeC
insertNode(nodeA, 100)
console.log(nodeA)