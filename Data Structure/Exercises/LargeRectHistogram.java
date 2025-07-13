public class LargeRectHistogram {
    public static void main(String[] args) {
        int max=0;
        int[] arr={1,2,2,2,2,1};
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
            }
            int sum=arr[i];
            int pre=i-1;
            int next=i+1;
            while(next<arr.length||pre>=0){
                if(pre>=0&&arr[pre]>=arr[i]){
                    sum+=arr[i];
                    pre--;
                }
                else{
                    pre=-1;
                }
                if(next<arr.length&&arr[next]>=arr[i]){
                    sum+=arr[i];
                    next++;
                }
                else{
                    next=arr.length;
                }
            }
            max=Math.max(max,sum);
        }
        System.out.println(max);
    }
}
