# 🏥 Patient Management System

A full-stack **Spring Boot** web application for registering, tracking and managing hospital patients.  
Built with **Spring Boot 3, Spring Data JPA, Thymeleaf, Bootstrap 5 & MySQL** following a clean MVC architecture.

---

## ✨ Key Features

| Module | Details |
|--------|---------|
| **Patient CRUD** | Register, view, update and delete patient records |
| **Extended Patient Profile** | Stores DOB, gender, address, emergency contacts |
| **Search & Pagination** | Filter by name / phone; Bootstrap table with pages |
| **Responsive UI** | Thymeleaf + Bootstrap 5 for mobile / desktop |
| **REST-Ready** | Controller methods can return JSON as well as HTML |
| **Future-Ready** | Easily extend to Treatment, Appointment & Billing modules 

---

## 🧱 Core Entity – `Patient`

```java
@Entity
public class Patient {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String firstName;
  private String lastName;
  private String dob;                 // yyyy-MM-dd
  private String gender;              // M / F / O
  private String contactNumber;
  private String email;
  private String address;
  private String emergencyContactName;
  private String emergencyContactPhone;
}
👤 Author
Jivan Meharkar
MSc CS | Java & Spring Boot Developer
GitHub • LinkedIn • meharkarjivan195@gmail.com
