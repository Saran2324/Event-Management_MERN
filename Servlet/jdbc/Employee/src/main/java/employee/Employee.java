package employee;



import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

public class Employee {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/employeemanagementsystem";
        String user = "root";
        String password = "Saran@2324";
        
        try {
            // Load MySQL Driver (optional in newer Java versions)
           //Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to database!");

            ResultSet rs = conn.createStatement().executeQuery("SELECT * FROM employee");

            while (rs.next()) {
                System.out.println("Employee: " + rs.getString("ename") + ", salary: " + rs.getInt("salary"));
            }
            	
            // INSERt
           // PreparedStatement insertStmt = conn.prepareStatement("INSERT INTO EMPLOYEE VALUES (?, ?, ?, ?)");
            PreparedStatement insertStmt = conn.prepareStatement("UPDATE EMPLOYEE SET ENAME= ? WHERE EID= ? ");
            insertStmt.setString(1, "A");        // name
            insertStmt.setInt(2, 101);                 // id
            insertStmt.addBatch();
            
            insertStmt.setString(1, "B");        // name   
            insertStmt.setInt(2, 102);                 // id
            insertStmt.addBatch();
//            insertStmt.setInt(1, 103);                 // id
//            insertStmt.setString(2, "John");        // name
//            insertStmt.setInt(3, 90000);              // price
//            insertStmt.setInt(4, 3);   
//            insertStmt.addBatch();
//            insertStmt.setInt(1, 104);                 // id
//            insertStmt.setString(2, "Jeniper");        // name
//            insertStmt.setInt(3, 40000);              // price
//            insertStmt.setInt(4, 1);   
//            insertStmt.addBatch();
//            insertStmt.setInt(1, 105);                 // id
//            insertStmt.setString(2, "Rosy");        // name
//            insertStmt.setInt(3, 70000);              // price
//            insertStmt.setInt(4, 2);   
//            insertStmt.addBatch();
//            
//            
//            
            int[] rowsInserted = insertStmt.executeBatch();
            System.out.println(rowsInserted.length+ " row(s) inserted.");

            rs = conn.createStatement().executeQuery("SELECT * FROM employee");

            while (rs.next()) {
                System.out.println("Employee: " + rs.getString("ename") + ", salary: " + rs.getInt("salary"));
            }
            	
            
            // ✅ Close all
            rs.close();
            //insertStmt.close();
            conn.close();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
