public class Pattern {
    public static void main(String[] args) {
        pattern(9);
    }

    public static void pattern(int n){
        int sn=n*2;
        for(int i=1;i<sn;i++){
            for(int j=1;j<sn;j++){
                int atIndex=n-Math.min(Math.min(i, j),Math.min(sn-i, sn-j))+1;
                System.out.print(atIndex+" ");
            }
            System.out.println();
        }

    }
}
