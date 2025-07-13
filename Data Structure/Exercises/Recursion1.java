import java.util.ArrayList;
public class Recursion1 {

    public static void main(String[] args) {
        int[] arr={1,3,5,4,4,5,6,7,8};
        // ArrayList<Integer>l=new ArrayList<>();
        System.out.println(findIndeces(arr,arr.length-1,4));
    }
    public static ArrayList<Integer> findIndeces(int[] arr,int index,int target){
        ArrayList<Integer>list=new ArrayList<>();
        if(index==0){
            return list;
        }
        if(arr[index]==target){
            list.add(index);
        }
        list.addAll(findIndeces(arr, index-1, target));
        return list;
    }
}