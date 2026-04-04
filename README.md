 Password-Analyzer

This project is a simple and practical web application that helps users check how strong their passwords are. It gives instant feedback and suggestions so users can create safer and more secure passwords.

 About the Project

In today’s digital world, weak passwords are one of the biggest security risks. Many users still use common or simple passwords that can be easily guessed.

This project was built to solve that problem by analyzing passwords in real time and guiding users to improve them. It also demonstrates basic cybersecurity concepts like password validation and hashing.

 Features

- Checks password strength instantly while typing  
- Classifies passwords as Weak, Medium, or Strong  
- Suggests improvements to make passwords stronger  
- Detects commonly used passwords (like "123456", "password")  
- Displays a visual strength meter  
- Uses hashing to show how passwords are secured  

 Technologies Used

- HTML, CSS, JavaScript (Frontend)  
- Node.js & Express (Backend)  
- bcrypt (for password hashing)  

 How It Works

1. The user enters a password in the input field  
2. The frontend sends the password to the backend  
3. The backend checks:
   - Password length  
   - Use of uppercase and lowercase letters  
   - Numbers and special characters  
   - Whether it is a common password  
4. Based on these checks, a score is calculated  
5. The system returns:
   - Strength level (Weak / Medium / Strong)  
   - Suggestions to improve the password  
6. The frontend displays the result with a visual indicator  

How to Run the Project

Backend
Go to the backend folder and run:
cd backend  
npm install  
node server.js  

Frontend
Open the `index.html` file in your browser  

 Example Outputs

- `123` → Very Weak 
- `hello123` → Medium  
- `H@ck3r#2026` → Strong  

 Deployment

The project can be deployed using:
- Vercel (for frontend)  
- Render (for backend)  

 What I Learned

- How to build a full-stack web application  
- How password strength is evaluated  
- Basic cybersecurity practices  
- How hashing works using bcrypt  
- How frontend and backend communicate  

 Future Improvements

- Add database to store password history  
- Implement user login system  
- Use advanced algorithms for better strength analysis  
- Integrate with security APIs for real-world checks  

 Author
Puneeth goud .G 

 Conclusion

This project shows how simple techniques can improve password security. It helps users understand the importance of strong passwords and demonstrates how secure systems can be designed using basic web technologies.
