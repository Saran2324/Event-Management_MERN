package Trees;

public class AvlMain {
    public static void main(String[] args) {
        AvlTree tree=new AvlTree();
        for(int i=1;i<=12;i++){
            tree.insert(i);
        }
        System.out.println(tree.height());
        tree.display();
    }
}
