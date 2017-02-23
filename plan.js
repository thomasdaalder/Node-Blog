Sketch mockup // DONE

Front-end // IN PROGRESS

Construct routes
  LOGGED OUT
    + Index (All posts with char limit)
    + Register
      - GET
      - Post => Auto login
    + Login (Navbar)
      - Post
  LOGGED IN
    + Log out
      - GET
    + Profile [view own posts]
      - GET
    + Create post
      - GET
      - POST
        => New Page
           => Comments
           => Post Comments

Setup database
  + User
    - User
    - Password

    + Posts
      - Title
      - Body
      - Date

        + Comments
          - Username
          - Body text
