import java.util.Arrays;

public class SelectionSort {
    public static void main(String[] args) {
        int[] arr=new int[]{5,9,3,2,1,8,0};
        arr=selectionSort(arr,arr.length,0,0);
        System.out.println(Arrays.toString(arr));
    }
    static int[] selectionSort(int[] arr,int r,int c,int m){
        if(r==0){
            return arr;
        }
        if(c<r){
            if(arr[c]>arr[m]){
            return selectionSort(arr, r, c+1,c);
            }
            else{
                return selectionSort(arr, r, c+1,m);
            }
        }
        int temp=arr[m];
        arr[m]=arr[r-1];
        arr[r-1]=temp;
        return selectionSort(arr, r-1, 0,0);
    }
}
