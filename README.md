# Password Manager App

A React-based Password Manager application that enables users to securely store and manage their passwords for various websites. The app allows users to add, search, view, and delete their passwords, providing a seamless and intuitive user experience.

## Features

- **#AddPasswords**: Users can add new passwords by providing the website name, username, and password. Password entries are assigned a randomly generated background color for visual distinction.
- **#SearchFunctionality**: Search through stored passwords using a search bar that filters the list based on the entered website name.
- **#ShowHidePasswords**: Users can toggle between showing and hiding passwords for privacy using a checkbox.
- **#DeletePassword**: Users can delete individual password entries by clicking the delete icon.
- **#DeleteAllPasswords**: A feature to delete all stored passwords at once, with a confirmation prompt to prevent accidental deletion.
- **#LocalStoragePersistence**: All password data is stored in the browser's local storage to persist between sessions.

## App Sections and Screenshots

### Logo and Header Section
This section contains the app logo for easy recognition.

### Add New Password Section
Users can add a new password by entering the website name, username, and password. An option to toggle password visibility is provided for easy input validation.

### Your Passwords Section
Displays a count of stored passwords, a search bar to filter passwords based on website name, and the ability to delete individual or all passwords.

### Delete All Passwords Feature
A modal confirmation prompt is shown when attempting to delete all passwords, ensuring user data safety.

### Toggle Show/Hide Passwords
Users can toggle between displaying the password text or hiding it with asterisks for added privacy.

## How to Use

### Adding a New Password:

1. Enter the website name in the **"Enter Website"** input field.
2. Enter the associated username and password in the respective input fields.
3. Check the **"Show Password"** checkbox to view the password before adding (optional).
4. Click on the **"Add"** button to store the password. The entry will be displayed in the list below.

### Search for Passwords:

- Use the search bar to filter the passwords list based on the website name. As you type, only matching entries will be displayed.

### Toggle Password Visibility:

- To show all stored passwords, check the **"Show Passwords"** checkbox at the top of the password list. Uncheck it to hide the passwords again.

### Delete Password:

- To delete a password, click on the **delete icon** next to the respective password entry.

### Delete All Passwords:

- Click the **"Delete All Passwords"** button to remove all stored passwords. A confirmation prompt will be displayed to avoid accidental deletions.

## Future Updates

- **Password Strength Indicator**: A feature to assess and display the strength of entered passwords.
- **Import/Export Passwords**: Allow users to import/export password data to/from CSV files for easier management.
- **Encryption**: Implement encryption for stored passwords to enhance security.
- **User Authentication**: Add user login to separate and secure different users' data.

Feel free to explore the app and manage your passwords securely! 😊
