import java.util.Arrays;

public class BubbleSort {
    public static void main(String[] args) {
        int[] arr=new int[]{5,4,3,2,1};
        arr=bubbleSort(arr,arr.length-1,0);
        System.out.println(Arrays.toString(arr));
    }
    static int[] bubbleSort(int[] arr,int r,int c){
        if(r==0){
            return arr;
        }
        if(c<r){
            return bubbleSort(arr, r-1, 0);
        }
        if(arr[c]<arr[c+1]){
            int temp=arr[c];
            arr[c]=arr[c+1];
            arr[c+1]=temp;
            return bubbleSort(arr, r, c+1);
        }
        return bubbleSort(arr, r, c+1);
    }
}
