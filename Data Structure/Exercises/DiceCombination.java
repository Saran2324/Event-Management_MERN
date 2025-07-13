public class DiceCombination {
    public static void main(String[] args) {
        findCombination(0, 4);
    }
    static void findCombination(int ans,int n){
        if(n<=0){
            System.out.println(ans);
            return;
        }
        for(int i=1;i<=n;i++){
            findCombination(ans*10+i, n-i);
        }
    }
}
