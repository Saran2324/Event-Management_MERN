import java.util.Arrays;

public class MergeSort {
    public static void main(String[] args) {
        int arr[]={9,5,7,3,2,6,1};
        arr=mergeSort(arr);
        System.out.println(Arrays.toString(arr));
        System.out.println("=======================================");
        mergeSortInplace(arr,0,arr.length);
        System.out.println(Arrays.toString(arr));

    }
    
    
    public static int[] mergeSort(int[] arr){
        if(arr.length==1){
            return arr;
        }
        int m=arr.length/2;
        int[] left=mergeSort(Arrays.copyOfRange(arr, 0, m));
        int[] right=mergeSort(Arrays.copyOfRange(arr, m, arr.length));
        return mergeArray(left,right);
    }
    public static int[] mergeArray(int[] left,int[] right){
        int[] mix=new int[left.length+right.length];
        int i=0,j=0,k=0;
        while(i<left.length&&j<right.length){
        if(left[i]<right[j]){
            mix[k++]=left[i++];
        }
        else{
            mix[k++]=right[j++];
        }
        }
        while(i<left.length){
        mix[k++]=left[i++];
        }
        while (j<right.length) {
        mix[k++]=right[j++];
        }
        return mix;
    }


    public static void mergeSortInplace(int[] arr,int s,int e){
        if(e-s<=1){
            return;
        }
        int m=s+(e-s)/2;
        mergeSortInplace(arr, s, m);
        mergeSortInplace(arr, m, e);
        mergeInplace(arr,s, e,m);

    }

    public static void mergeInplace(int[] arr,int s,int e,int m){
        int[] mix=new int[e-s];
        int i=s,j=m,k=0;
        while(i<m&&j<e){
        if(arr[i]<arr[j]){
            mix[k++]=arr[i++];
        }
        else{
            mix[k++]=arr[j++];
        }
        }
        while(i<m){
        mix[k++]=arr[i++];
        }
        while (j<e) {
        mix[k++]=arr[j++];
        }
        System.arraycopy(mix, 0, arr, s,e-s);
    }
}