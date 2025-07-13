package flipkart;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DeleteServlet extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id=req.getParameter("id");
		String email =req.getParameter("email");
		String phone =req.getParameter("phone");
		String password =req.getParameter("password");
		
		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
			Connection c=DriverManager.getConnection("jdbc:mysql://localhost:3306/flipkart","root","Saran@2324");
			PreparedStatement p=c.prepareStatement("insert into login_details values(?,?,?,?)");
			p.setInt(1, Integer.parseInt(id));
			p.setString(2,email);
			p.setString(3, phone);
			p.setString(4, password);
			int num=p.executeUpdate(); 
			System.out.println(num+" rows added");
			c.close();
			p.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
				
		req.getRequestDispatcher("home.jsp").forward(req, resp);
	}
	
}
