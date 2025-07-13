package Trees;

public class BinarySearchTree {
    Node root;

    public void populate(int[] arr){
        for(int num:arr){
            insert(num);
        }
    }

    public void insert(int val){
        root=insert(val, root);
    }
    private Node insert(int val,Node node){
        if(node==null){
            node=new Node(val);
            return node;
        }
        if(val<=node.val){
            node.left=insert(val, node.left);
        }
        else if(val>node.val){
            node.right=insert(val, node.right);
        }
        node.height=Math.max(height(node.left),height(node.right))+1;
        return node;
    }

    public int height(Node node){
        if(node==null){
            return -1;
        }
        return node.height;
    }

    public void display(){
        this.display(root,"");
    }
    private void display(Node node,String space){
        if(node==null)return;
        display(node.right,space+"\t");
        System.out.println(space+node.val+"("+node.height+")"+ "|");
        display(node.left,space+"\t");
    }

    public class Node{
        int val;
        Node left;
        Node right;
        int height;
        public Node(int val){
            this.val=val;
        }
    }
}
