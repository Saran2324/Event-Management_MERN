package Trees;
import java.util.Scanner;

public class BinaryTree {
    Node root;
    public void insert(Scanner s){
        if(root==null){
            System.out.print("Enter root Node: ");
            Node node=new Node(s.nextInt());
            root=node;
        }
        insertletright(s,root);
    }

    private void insertletright(Scanner s,Node node){
        System.out.print("Do you enter left of "+node.val+" y/n: ");
        char ch=s.next().charAt(0);
        if(ch=='y'){
            System.out.print("Enter left of "+node.val+": ");
            Node newnode=new Node(s.nextInt());
            node.left=newnode;
            insertletright(s, newnode);
        }   
        System.out.print("Do you enter right of "+node.val+  " y/n: ");
        char c=s.next().charAt(0);
        if(c=='y'){
            System.out.print("Enter right of "+node.val+": ");
            Node newnode=new Node(s.nextInt());
            node.right=newnode;
            insertletright(s, newnode);
        }   
    }
    public void display(){
        display(root,"");
    }
    private void display(Node node,String space){
        if(node==null)return;
        display(node.left,space+"    ");
        System.out.println(space+"--"+node.val+ "|");
        display(node.right,space+"    ");
    }

    private class Node{
        int val;
        Node left;
        Node right;
        public Node(int val){
            this.val=val;
        }
    }
}
