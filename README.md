# ResumePro

## Live URL
https://resume-assist-nwlq.onrender.com/

## Description
ResumePro is here to assist you in your job search. Powered by OpenAI API, upload your resume, and recieve AI feedback with educational resources for self improvement. Users must create an account or login to use the AI features

- Secure user login using jwt
http only cookies 
password hashing
OpenAI API for resume feedback 
mammoth package to parse resume into readable (text) format

## Table of Contents
[Technologies Used](#technologies-used)
[Usage](#usage)
[Contact](#contact)

## Technologies Used
Backend: 
- Express.js / Node.js: Handles api requests for user and login/sign up, resume upload
- Json Web Token: Handles secure login, with sending the token to the client in Http only cookies for max security
- Mammoth npm package: Parses uploaded resume into text, making it readable for OpenAI API

Front-end:
- React.js: Provids a dynamic and interactive user interfac, focusing on reusable components for better scalability.

Deployment: 
- Render: Hosts backend and frontend for seamless performance

## Usage
User login / sign up
- Enter your name, email and create a password
- After a successful login, upload your resume, enter the amount of experience you have (entry level, junior, etc.) and recieve AI feedback

## Contact
[GitHub](https://github.com/Ryan3389)
[Portfolio](https://ryancuthbert.netlify.app/)