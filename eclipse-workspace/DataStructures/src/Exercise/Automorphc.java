package Exercise;

public class Automorphc {
    public static void main(String[] args) {
		int num=-25;
		int n=num;
		if(num<0)n=~num+1;
		int c=(int)Math.pow(n, 2)%(int)(Math.pow(10,(int)Math.log10(n)+1));
		System.out.println(num+" "+((n==c)?"is a  automorphic number":"is not a automorphic number"));
	}
}
