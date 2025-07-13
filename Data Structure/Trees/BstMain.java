package Trees;

public class BstMain {
    public static void main(String[] args) {
        int[] num={1,2,3,4,5,6,7,8,9};
        BinarySearchTree bst=new BinarySearchTree();
        bst.populate(num);
        bst.display();
    }
}
