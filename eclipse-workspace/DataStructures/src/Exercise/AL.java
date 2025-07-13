package Exercise;

import java.util.ArrayList;

public class AL {
	public static void main(String[] args) {
	ArrayList<Integer> ls=new ArrayList<Integer>();
	ArrayList<Integer> ls2=new ArrayList<Integer>();
	ls.add(10);
	ls.add(20);
	ls.add(30);
	ls2.add(40);
	ls2.add(50);
	ls.addAll(ls2);
	System.out.println(ls);
	}
	
}
