public interface LinkedListAbs {
    void insertFirst(int data);
    void insertLast(int data);
    void insertAtIndex(int data,int val);
    void display();
    void insertAtIndexRec(int data,int index);
    void removeDup();
    void reverseLinkedList();
    void bubbleSortRec();
    void mergeSortRec();
    boolean isPalindrome();
    void inPlaceReverse();
    void reversePartList(int l,int r);
    void reverKList(int k);
    void rotateList(int k);
}
