import java.util.Stack;

public class TwoStack {
    public static void main(String[] args) {
        Stack<Integer>f=new Stack<>();
        Stack<Integer>s=new Stack<>();
        f.push(4);
        f.push(2);
        f.push(4);
        f.push(6);
        f.push(1);
        s.push(2);
        s.push(1);
        s.push(8);
        s.push(5);
        System.out.println(findMove(f,s,0,10,0));
    }

    public static int findMove(Stack<Integer>f,Stack<Integer>s,int c,int max,int sum){
        if(f.isEmpty()||s.isEmpty()){
            return c;
        }
        if(sum>max){
            return c;
        }
        int d=f.pop();
        int a=findMove(f, s, c+1, max, sum+d);
        f.push(d);
        d=s.pop();
        int b=findMove(f, s, c+1, max, sum+d);
        s.push(d);
        return Math.max( a,b);
    }
}
