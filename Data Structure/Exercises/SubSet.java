import java.util.ArrayList;
import java.util.List;

public class SubSet {
    public static void main(String[] args) {
        int[] arr={1,2,3};
        System.out.println(subSet(arr));
        
    }


    static List<List<Integer>> subSet(int[] arr){
        List<List<Integer>>outer=new ArrayList<>();
        outer.add(new ArrayList<>());
        for(int num:arr){
            int l=outer.size();
            for(int i=0;i<l;i++){
                List<Integer>list=new ArrayList<>(outer.get(i));
                list.add(num);
                outer.add(list);
            }
        }
        return outer;
    }
}
