# Login and Token Management using Fetch API

Welcome to the **Login and Token Management** demo project! This project showcases a simple login system implemented using the Fetch API. It covers the process of authenticating users, obtaining an access token, and using it to fetch user profile data.

## Files

This project includes the following files:

- `index.html`: Contains the HTML structure for the login form and data display.
- `app.js`: Implements the login and token management functionalities using JavaScript.
- `style.css`: Provides styling for the HTML elements.

## Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/Rukchanokksm/Login-wAPI.git
   ```

2. Open the `index.html` file in your browser to access the login form and profile display.

## Usage

1. Open `index.html` in your browser.

2. Fill in the username and password fields in the login form.

3. Click the "Login" button.

4. If successful, the application will obtain an access token and fetch the user's profile data, displaying it below the login form.

> **Note:** If you want to try logging in, please use the following credentials:
>
> - Username: peo123
> - Password: 123456
>
> Please note that these are test credentials since I've manually registered in the database for demonstration purposes.

## API Endpoints

- Login Endpoint: `https://api.learnhub.thanayut.in.th/auth/login`

  - Method: POST
  - Request Body: JSON object containing username and password
  - Response: JSON object with access token on successful login

- Profile Endpoint: `https://api.learnhub.thanayut.in.th/auth/me`
  - Method: GET
  - Headers: Authorization header with bearer token
  - Response: JSON object containing user profile data

## Notes

- Ensure your API endpoints and URLs are correctly configured in the JavaScript code.
- Use appropriate error handling mechanisms for production applications.
- This project is for educational purposes and may require additional security measures for real-world usage.

Feel free to explore the code and modify it according to your needs!

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.

---

_This documentation provides an overview of the login and token management project. For detailed implementation and code comments, refer to the source code in the repository._

For contributions, issues, and questions, please visit the [GitHub repository](https://github.com/Rukchanokksm).
