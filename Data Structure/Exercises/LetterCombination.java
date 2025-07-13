import java.util.ArrayList;
import java.util.List;

public class LetterCombination {
    public static void main(String[] args) {
        String num="";
        System.out.println(findCombination("",num));
    }

    static ArrayList<String> findCombination(String p,String up){
        int x=0,e=0;
        ArrayList<String>list=new ArrayList<>();
        if(up.isEmpty()){
            list.add(p);
            return list;
        }
        char digit=(char)(up.charAt(0)-'0');
        if(digit<=1){
            list.addAll(findCombination(p, up.substring(1)));
            return list;
        }
        if(digit>7){
            x=1;
        }
        if(digit==7||digit==9){
            e=1;
        }
        for(int i=(digit-2)*3+x;i<(digit-1)*3+x+e;i++){
            
            String ch=(char)(i+97)+"";
            list.addAll(findCombination(p+ch, up.substring(1)));
        }
        return list;
    }
}
