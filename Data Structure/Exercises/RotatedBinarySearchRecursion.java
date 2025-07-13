public class RotatedBinarySearchRecursion {
    public static void main(String[] args) {
        int[] arr={5,6,7,9,1,2,3,4};
        System.out.println(search(arr,0,arr.length-1,5));
    } 
    public static int search(int[] arr,int s,int e,int t){
        if(s>e){
            return -1;
        }
        int m=s+(e-s)/2;
        if(arr[m]==t){
            return m;
        }
        if(t<arr[m]&&t>arr[s]){
            return search(arr,s,m-1,t);
        }
        if(t>arr[m]&&t<arr[e]){
            return  search(arr,m+1,e,t);
        }
        return -1;
    }
}
