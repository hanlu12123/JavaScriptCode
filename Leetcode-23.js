class ListNode {
constructor(val, next) {
this.val = (val === undefined? 0 : val);
this.next = (next === undefined? null : next);
}
}
class PriorityQueue {
constructor() {
this.queue = [];
}
count() {
return this.queue.length;
}
peek() {
return this.queue.length > 0? this.queue[0] : null;
}
add(item) {
this.queue.push(item);
this.heapifyUp(this.queue.length - 1);
}
pop() {
if (!this.queue.length) return null;
const res = this.queue[0];
if (this.queue.length === 1) {
this.queue.pop();
return res;
}
const last = this.queue.pop();
this.queue[0] = last;
this.heapifyDown();
return res;
}
heapifyUp(index) {
let current = index;
let parent = Math.floor((current - 1) / 2);
while (parent >= 0 && this.queue[parent].val > this.queue[current].val) {
[this.queue[parent], this.queue[current]] = [this.queue[current], this.queue[parent]];
current = parent;
parent = Math.floor((current - 1) / 2);
}
}
heapifyDown() {
let current = 0;
while (current * 2 + 1 < this.queue.length) {
let swapIndex = current * 2 + 1;
if (current * 2 + 2 < this.queue.length && this.queue[current * 2 + 2].val < this.queue[current * 2 + 1].val) {
swapIndex = current * 2 + 2;
}
if (this.queue[current].val > this.queue[swapIndex].val) {
[this.queue[current], this.queue[swapIndex]] = [this.queue[swapIndex], this.queue[current]];
}
current = swapIndex;
}
}
}
function mergeKLists(lists) {
if (lists.length <= 1) return lists[0] || null;
const priorityQueue = new PriorityQueue();
for (const list of lists) {
if (list) priorityQueue.add(list);
}
let head = new ListNode();
let tail = head;
while (priorityQueue.count() > 0) {
const minNode = priorityQueue.pop();
tail.next = minNode;
tail = tail.next;
if (minNode.next) priorityQueue.add(minNode.next);
}
return head.next;
}
