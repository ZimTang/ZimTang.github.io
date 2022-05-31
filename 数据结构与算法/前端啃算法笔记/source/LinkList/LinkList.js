class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkList{
  constructor() {
    this.head = null
    this.length = 0
  }

  append(val) {
    let node = new Node(val)
    let p = this.head
    if(this.head) {
      while(p.next) {
        p = p.next
      }
      p.next = node
    }else {
      this.head = node
    }
    this.length++
  }

  print() {
    let p = this.head
    let res = ''
    if(this.head) {
      while(p.next) {
        res += p.val + '=>'
        p = p.next
      }
      res += p.val
      console.log(res)
    }else{
      console.log('is empty')
    }
  }

}

const linkList = new LinkList()

linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)

linkList.print()
console.log(linkList.length)