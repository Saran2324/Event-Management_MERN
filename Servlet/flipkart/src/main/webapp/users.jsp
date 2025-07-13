<%@page import="java.sql.ResultSet"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Users</title>
<style>
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

button {
    padding: 6px 12px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #c82333;
}
</style>

</head>
<body>
<h1>All Users</h1>
<table>
     <tr>
         <th>ID</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Password</th>
         <th>Action</th>
     </tr>

<%
	ResultSet rs=(ResultSet)request.getAttribute("rs");
	while(rs!=null&&rs.next()){
		%><tr>
        <td><%= rs.getString("id") %></td>
        <td><%= rs.getString("email") %></td>
        <td><%= rs.getString("phone") %></td>
        <td><%= rs.getString("password") %></td>
        <td>
        <a href="delete?id="<%= rs.getString("id")%>><button type="button">delete</button></a>
        </td>
        
        
    </tr>
	<% }%>
	
	</table>


</body>
</html>