import java.util.Scanner;
public class project {
	String[] products={"Groceries","Vegetables","Milk Products","Bakery Items", "Biscuits" ,"Cold Drinks"};
	public void hi() {
		System.out.println("Welcome To Our Shop");
		System.out.println("\nSelect Your Product Categories");
		for(int i=0;i<products.length;i++){
			System.out.println(i+1+")"+products[i]);
		}
	}
	public String printProduct(int i){
		if(i<0||i>6){
			return "";
		}
		return products[i-1];
	}
	
	public static void main(String[] args) {
		project o=new project();
		o.hi();
		Scanner sc=new Scanner(System.in);
		String ex="";
		int i=0;
		while(i++<3){
			System.out.print("Enter your Product: ");
			int n=sc.nextInt();
			ex=o.printProduct(n);
			if(!ex.equals("")){
				System.out.println(ex);
				break;
			}
			else{
				System.out.println("Invalid!. Select a valid product");
			}
		}
		if(i>=3){
			System.out.println("Invalid Selection. Try again Later.");
		}
		else{
			System.out.println("Thank you for shopping.");
		}

	}
	}