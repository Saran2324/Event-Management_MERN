import java.util.ArrayList;

public class SubSequence {
    public static void main(String[] args) {
       System.out.println( subSeq("","abc"));
       System.out.println(subSeqWithAscii("","abc"));
    }
    static ArrayList<String> subSeq(String b,String ori){
        ArrayList<String> list=new ArrayList<>();
        if(ori.isEmpty()){
            if(!b.isEmpty()){
                list.add(b);
            }
             return list;    
        }
        char ch=ori.charAt(0);
        list.addAll(subSeq(b, ori.substring(1)));
        list.addAll(subSeq(b+ch, ori.substring(1)));
        return list;
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////

     static ArrayList<String> subSeqWithAscii(String b,String ori){
        ArrayList<String> list=new ArrayList<>();
        if(ori.isEmpty()){
            list.add(b);
             return list;    
        }
        char ch=ori.charAt(0);
        list.addAll(subSeqWithAscii(b, ori.substring(1)));
        list.addAll(subSeqWithAscii(b+ch, ori.substring(1)));
        list.addAll(subSeqWithAscii(b+(ch+0), ori.substring(1)));
        return list;
    }
}
