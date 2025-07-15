package shopManagement;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

public class Demo {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/shop";
        String user = "root";
        String password = "Saran@2324";
        
        try {
            // Load MySQL Driver (optional in newer Java versions)
           // Class.forName("com.mysql.cj.jdbc.Driver");

            Connection conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to database!");

            // INSERt
            PreparedStatement insertStmt = conn.prepareStatement("INSERT INTO EMPLOYEE VALUES (?, ?, ?, ?)");
            insertStmt.setInt(1, 101);                 // id
            insertStmt.setString(2, "Smith");        // name
            insertStmt.setInt(3, 60000);              // price
            insertStmt.setInt(4, 2);                  // quantity
            insertStmt.addBatch();
            insertStmt.setInt(1, 102);                 // id
            insertStmt.setString(2, "Martin");        // name
            insertStmt.setInt(3, 50000);              // price
            insertStmt.setInt(4, 1);   
            insertStmt.addBatch();
            insertStmt.setInt(1, 103);                 // id
            insertStmt.setString(2, "John");        // name
            insertStmt.setInt(3, 90000);              // price
            insertStmt.setInt(4, 3);   
            insertStmt.addBatch();
            insertStmt.setInt(1, 104);                 // id
            insertStmt.setString(2, "Jeniper");        // name
            insertStmt.setInt(3, 40000);              // price
            insertStmt.setInt(4, 1);   
            insertStmt.addBatch();
            insertStmt.setInt(1, 105);                 // id
            insertStmt.setString(2, "Rosy");        // name
            insertStmt.setInt(3, 70000);              // price
            insertStmt.setInt(4, 2);   
            insertStmt.addBatch();
            
            
            
            int[] rowsInserted = insertStmt.executeBatch();
            System.out.println(rowsInserted.length+ " row(s) inserted.");

            ResultSet rs = conn.createStatement().executeQuery("SELECT * FROM PRODUCT");

            while (rs.next()) {
                System.out.println("Product: " + rs.getString("name") + ", Price: " + rs.getInt("price"));
            }

            // ✅ Close all
            rs.close();
            insertStmt.close();
            conn.close();

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
