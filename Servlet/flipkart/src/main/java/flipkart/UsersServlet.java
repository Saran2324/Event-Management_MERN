package flipkart;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/users")
public class UsersServlet extends HttpServlet{
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
			Connection c=DriverManager.getConnection("jdbc:mysql://localhost:3306/flipkart","root","Saran@2324");
			Statement s=c.createStatement();
			ResultSet rs=s.executeQuery("select * from login_details");
			req.setAttribute("rs", rs);
			req.getRequestDispatcher("users.jsp").forward(req, resp);
			rs.close();
			c.close();
			s.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
}
