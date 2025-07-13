public class PatternRecursion {
    public static void main(String[] args) {
        printPat(5,0);
    }
    static void printPat(int r,int c){
        if(r==0){
            return;
        }
        if(c<r){
            System.out.print("* ");
            printPat(r, c+1);
            System.out.print("* ");
        }
        else{
            System.out.println();
            printPat(r-1, 0);
            System.out.println();
        }
    }
}
