public class LinkedListMain {
    public static void main(String[] args) {
        LinkedListAbs ll=new LinkedList();
        ll.insertLast(100);
        ll.insertLast(200);
        ll.insertLast(300);
        ll.insertLast(400);
        ll.insertLast(500);
        ll.display();
        System.out.println();
        ll.rotateList(13);
        ll.display();

      

    }
}
