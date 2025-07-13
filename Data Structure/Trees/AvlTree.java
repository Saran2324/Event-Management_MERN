package Trees;

public class AvlTree {
    private Node root;

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
        node.height=Math.max(height(node.left),height(node.right)+1);
        return rotate(node);
    }
    private Node rotate(Node node){
        if(height(node.left)-height(node.right)>1){
            if(height(node.left.left)-height(node.left.right)>0){
                return rightRotate(node);
            }
            if(height(node.left.left)-height(node.left.right)<0){
                node.left=leftRotate(node.left);
                return rightRotate(node);
            }
        }
        if(height(node.left)-height(node.right)<-1){
            if(height(node.right.left)-height(node.right.right)<0){
                return leftRotate(node);
            }
            if(height(node.right.left)-height(node.right.right)>0){
                node.right=rightRotate(node.right);
                return leftRotate(node);
            }
        }
        return node;
    }

    public Node rightRotate(Node p){
        Node c=p.left;
        Node t=c.right;
        p.left=t;
        c.right=p;
        p.height=Math.max(height(p.left), height(p.right))+1;
        c.height=Math.max(height(c.left), height(c.right))+1;
        return c;

    }
    public Node leftRotate(Node c){
        Node p=c.right;
        Node t=p.left;
        p.left=c;
        c.right=t;
        c.height=Math.max(height(c.left), height(c.right))+1;
        p.height=Math.max(height(p.left), height(p.right))+1;
        return p;
    }
    public int height(){
       return height(root);
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

    private class Node{
        int val;
        Node left;
        Node right;
        int height;
        public Node(int val){
            this.val=val;
        }
    }
}
