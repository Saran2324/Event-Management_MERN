public class LinkedList implements LinkedListAbs {
    Node head;
    Node tail;
    int size;

    public void reversePartList(int left,int right){
        head=reversePartList(head, left, right);
    }
    private Node reversePartList(Node head,int left,int right){
        if(head==null||head.next==null){
            return head;
        }
        Node cur=head;
        Node pre=null;
        for (int i = 0; i<left-1; i++) {
            pre=cur;
            cur=cur.next;
        }
        Node newLast=cur;
        Node last=pre;
        for (int i = 0; cur!=null&&i < right-left+1; i++) {
            Node next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        if(last!=null){
            last.next=pre;
        }
        else{
            head=pre;
        }
        newLast.next=cur;
        return head;
    }
 
    public void reverKList(int k){
        head=reverKList(k, head);
    }
    private Node reverKList(int k,Node node){
        if(node==null||node.next==null){
            return node;
        }
        Node temp=node;
        int count=0;
        while(count<k&&temp!=null){
            temp=temp.next;
            count++;
        }
        if(count<k){
            return node;
        }
        Node cur=node;
        Node pre=null;
        Node next=null;
        for (int i = 0; cur!=null&&i<k; i++) {
            next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        node.next=reverKList(k, cur);
        if(node.next==null){
            tail=node;
        }
        return pre;
    }

    public void rotateList(int k){
        Node cur=head;
        int c=0;
        while(cur!=null){
            cur=cur.next;
            c++;
        }
        rotateList(head,k%c,-1);
    }
    private int rotateList(Node node,int k,int c){
        if(k<1){
            return -1;
        }
        if(node.next==null){
            node.next=head;
            return 0;
        }
        int count= rotateList(node.next,k,c);
        count++;
        if(count==k){
            head=node.next;
            node.next=null;
            tail=node;
        }
        return count;
    }

    public void bubbleSortRec(){
        bubbleSortRec(size-1,0);
    }
    private void bubbleSortRec(int row,int col){
        if(row==0){
            return;
        }
        if(col<row){
            Node first=getIndex(col);
            Node second=getIndex(col+1);
            if(first.val>second.val){
                if(first==head){
                    head=second;
                    first.next=second.next;
                    second.next=first;
                }
                else{
                    if(second==tail){
                        tail=first;
                    }
                    Node pre=getIndex(col-1);
                    first.next=second.next;
                    second.next=first;
                    pre.next=second;   
                }
            }
            bubbleSortRec(row,col+1);
        }
        else{
            bubbleSortRec(row-1,0);
        }    
    }

    public void mergeSortRec(){
        mergeSortRec(head);
    }
    private Node mergeSortRec(Node node){
        if(node==null || node.next==null){
            return node;
        }
        Node mid=findMid(node);
        Node afterMid=mid.next;
        mid.next=null;
        Node left=mergeSortRec(node);
        Node right=mergeSortRec(afterMid);
        return mergeList(left,right);
    }   

    public Node mergeList(Node left,Node right){
        if(left==null)return right;
        if(right==null)return left;
        Node ans;
        if(left.val<=right.val){
            ans=left;
            ans.next=mergeList(left.next, right);
        }
        else{
            ans=right;
            ans.next=mergeList(left, right.next);
        }
        return ans;
    }

    public Node findMid(Node head){
        if(head.next==null){
            return head;
        }
        Node slow=head;
        Node fast=head;
        while(fast.next!=null&&fast.next.next!=null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow;
    }

    public Node getIndex(int index){
        if(index>=size){
            return null;
        }
        Node cur=head;
        while(index-->0){
            cur=cur.next;
        }
        return cur;
    }


    public void reverseLinkedList(){
        head=reverseLinkedList(head);
    }

    private Node reverseLinkedList(Node node){
        if(node.next==null){
            return node;
        }
        Node nextNode=reverseLinkedList(node.next);
        nextNode.next=node;
        node.next=null;
        tail=node;
        return node;
    }
    public void inPlaceReverse(){
        head = inPlaceReverse(head);
    }

    private Node inPlaceReverse(Node node){
        if(node==null||node.next==null){
            return node;
        }
        tail=node;
        Node pre=null;
        Node cur=node;
        while(cur!=null){
            Node next=cur.next;
            cur.next=pre;
            pre=cur;
            cur=next;
        }
        return pre;
    }

    public void insertAtIndexRec(int data,int index){
        if(index>=size){
            insertLast(data);
            return;
        }
        insertAtIndexRec(data, index, head);
    }

    private Node insertAtIndexRec(int data,int index,Node nextEle){
        if(index==0){
            Node node=new Node(data,nextEle);
            size++;
            return node;
        }
        nextEle.next=insertAtIndexRec(data, index-1, nextEle.next);
        return nextEle;
    }
    
    public boolean isPalindrome(){
        if(head==null){
            return false;
        }
        Node mid=findMid(head);
        mid.next=inPlaceReverse(mid.next);
        Node second=mid.next;
        Node first=head;
        while(second!=null){
            if(second.val!=first.val){
                mid.next=inPlaceReverse(mid.next);
                return false;
            }
            second=second.next;
            first=first.next;

        }
        mid.next=inPlaceReverse(mid.next);
        return true;
    }

    public void insertFirst(int data){
        Node node=new Node(data);
        node.next=head;
        head=node;
        size++;
        if(tail==null){
            tail=head;
        }
    }

    public void insertAtIndex(int data,int index){
        if(index>=size){
            insertLast(data);
            return;
        }
        if(index==0){
            insertFirst(data);
            return;
        }
        Node cur=head;
        while(--index>0){
            cur=cur.next;
        }
        Node node=new Node(data,cur.next);
        cur.next=node;
        size++;
    }

    public void insertLast(int data){
        Node node=new Node(data);
        if(tail==null){
            insertFirst(data);
            return;
        }
        tail.next=node;
        tail=node;
        size++;
    }

    public void removeDup(){
        if(size<=1){
            return;
        }
        Node cur=head;
        Node temp=cur.next;
        while(temp!=null){
            if(temp.val!=cur.val){
                cur.next=temp;
                cur=cur.next;
            }
            else{
                size--;
            }
            temp=temp.next;
        }
        cur.next=null;
        tail=cur;
    }

    public void display(){
        display(head);
    }

    private void display(Node head){
        if(size==0){
            return;
        }
        Node cur=head;
        while(cur!=tail.next){
            System.out.print(cur.val+"->");
            cur=cur.next;
        }
        System.out.println("END");
    }

    private class Node{
        int val;
        Node next;
        Node(int val){
            this.val=val;
        }
        Node(int val,Node next){
            this.val=val;
            this.next=next;
        }
    }
}
