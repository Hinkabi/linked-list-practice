const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }
  insert(data){
    //create node
    let node = new Node(data);
    if(!this.head){
      this.head=node;
    }else {
      node.next=this.head;
      this.head=node;
    }
  }
  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++
      node = node.next;
    }
    return count;
  }
  delete(data){
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let node = this.head;
    while(node.next){
      node = node.next;
    }
    return node;
  }
  search(key){
    let node = this.head;
    while(node !== null && node.data !==key){
      node = node.next;
    }
    return node;
  }
  getKth(){

  }
  getKthToLast(){

  }
  isEmpty(){
    if (!this.head) {
      return true;
    }
    return false;
  }
  clear(){
    this.head = null;
  }
}

module.exports = {
  Node,
  LinkedList,
};
