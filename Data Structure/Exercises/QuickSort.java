import java.util.Arrays;

public class QuickSort {
    public static void main(String[] args) {
        int[] arr={5,3,2,1,8,1,4,7,9,5,2,0};
        quickSort(arr,0,arr.length-1);
        System.out.println(Arrays.toString(arr));
    }
    static void quickSort(int[] arr,int low,int high){
        if(low>=high){
            return;
        }
        int s=low;
        int e=high;
        int m=s+(e-s)/2;
        while(s<=e){
            while(arr[s]<arr[m]){
                s++;
            }
            while(arr[e]>arr[m]){
                e--;
            }
            if(s<=e){
                int temp=arr[e];
                arr[e]=arr[s];
                arr[s]=temp;
                s++;
                e--;
            }
        }
        quickSort(arr, low, e);
        quickSort(arr, s, high);


    }
}
