Project name : Pathz
Live url : https://pathz.netlify.app/

Project Overview =>

    This blog application is a full-stack web project where users can read blogs, add their own blogs, interact with featured content, and maintain a personalized wishlist. Authentication ensures secure access to private routes, and the UI provides an engaging and responsive experience.

Key Features =>

        Authentication System :

            Email and Password Authentication: Users can register and log in with email and password.

            Social Login: Login via Google or GitHub.

            Error Handling: Errors displayed for invalid credentials or registration requirements.

            Private Routes: Add Blog, Wishlist, and Update Blog are accessible only to logged-in users.

        Navbar :

            Dynamic links based on authentication state:

            Logged Out: Home, All Blogs, Featured Blogs, Login, Register.

            Logged In: Home, Add Blog, All Blogs, Featured Blogs, Wishlist, Profile Picture, Logout.

        Home Page :

            Hero Section: Introduction to the website with a visually appealing banner.
            Recent Blogs Section: Display six recent blogs with details and wishlist buttons.
            Newsletter Section: Users can subscribe to a newsletter and see a toast confirmation.

        All Blogs Page :

            Features:

                Display all blogs with title, image, short description, category, details button, and wishlist button.
                Search by blog title and filter by category.
                Wishlist Integration:
                Add blogs to wishlist (specific to logged-in users).
                Maintain wishlist in a separate MongoDB collection.
                Blog Details Page

        Content:

            Full blog details.
            Comment section: Users can comment on blogs (excluding their own blogs).

            Dynamic Features:
            Update button for blog owners to edit their blogs.
            Conditional rendering for commenting.

        Add Blog Page

            Form to input blog details (title, image URL, category, short description, long description).
            Dropdown for category selection.

        Update Blog Page

            Pre-filled form for editing blog details.
            Only accessible to blog owners.

        Featured Blogs Page

            Display the top 10 blogs based on long description word count.
            Data table implementation using libraries like Tanstack Table or React Data Table.
            Sortable columns.

        Wishlist Page

            Display all blogs added to the user's wishlist.
            Include details button and remove button to delete from wishlist.

        Error Pages

            404 Page: Custom design for "Page Not Found."

Tech Stack => 

    Frontend

        React.js: For building the user interface.
        Framer Motion: Animations on the home page.
        React Router: For routing and private routes.
        React Toastify: Toast notifications for newsletter subscription.

    Backend

        Node.js: Backend runtime.
        Express.js: Web server framework.
        MongoDB: Database for storing blogs, wishlists, and comments.
        JWT: Authentication for private routes.

    Other Libraries/Tools

    Tanstack Table: For sortable data tables.
    Firebase: Authentication (email/password and social logins).