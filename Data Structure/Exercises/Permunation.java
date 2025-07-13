import java.util.ArrayList;

public class Permunation {

    public static void main(String[] args) {
        String str="abc";
        System.out.println(perumutation("",str));
    }
    static ArrayList<String> perumutation(String ans,String str){
        ArrayList<String> list=new ArrayList<>();
        if(str.isEmpty()){
            list.add(ans);
            return list;
        }
        char ch=str.charAt(0);
        for(int i=0;i<=ans.length();i++){
            String f=ans.substring(0, i);
            String l=ans.substring(i,ans.length());
            list.addAll( perumutation(f+ch+l, str.substring(1))); 
        }
        return list;
    }
}