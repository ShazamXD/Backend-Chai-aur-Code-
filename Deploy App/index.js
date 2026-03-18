require('dotenv').config() // Load environment variables from a .env file this line loads environment variables from a .env file into process.env. This allows us to use environment variables in our application, which can be useful for storing sensitive information like API keys or database credentials without hardcoding them in our code.so, that they don't become public and remain safe and personal to us.
const express = require('express') // Import the Express library this allows us to create a web server using Express and this must be declared at the start of the file before we can use it in our code.
const app = express() // Create an instance of the Express application this creates an instance of the Express application and assigns it to the variable app. We can use this variable to define routes and start the server.
const port = 3000 // Define the port number on which the server will listen this defines a constant variable named port and assigns it the value 3000. This is the port number on which our Express server will listen for incoming requests.

const githubData = {
  "login": "ShazamXD",
  "id": 140273638,
  "node_id": "U_kgDOCFxn5g",
  "avatar_url": "https://avatars.githubusercontent.com/u/140273638?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ShazamXD",
  "html_url": "https://github.com/ShazamXD",
  "followers_url": "https://api.github.com/users/ShazamXD/followers",
  "following_url": "https://api.github.com/users/ShazamXD/following{/other_user}",
  "gists_url": "https://api.github.com/users/ShazamXD/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ShazamXD/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ShazamXD/subscriptions",
  "organizations_url": "https://api.github.com/users/ShazamXD/orgs",
  "repos_url": "https://api.github.com/users/ShazamXD/repos",
  "events_url": "https://api.github.com/users/ShazamXD/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ShazamXD/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Chitransh Pal",
  "company": null,
  "blog": "https://bento.me/chitransh-pal",
  "location": "Delhi, India ",
  "email": null,
  "hireable": null,
  "bio": "BTech'26 || Full Stack Developer ",
  "twitter_username": "PALKaisaPAL",
  "public_repos": 25,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2023-07-22T18:22:55Z",
  "updated_at": "2026-03-16T03:01:35Z"
}


app.get('/', (req, res) => { // Define a route for the root URL ("/") this defines a route for the root URL ("/") of our web application. When a GET request is made to this URL, the provided callback function will be executed.
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => { // Define a route for the "/twitter" URL this defines a route for the "/twitter" URL. When a GET request is made to this URL, the provided callback function will be executed.
    res.send('Kem Palty !!!!')
})

app.get('/login', (req,res) => {
    res.send("<h2>Login at Chai aur Code</h2>")
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req,res) => {
    res.json(githubData) // This defines a route for the "/github" URL. When a GET request is made to this URL, the provided callback function will be executed. The res.json() method is used to send a JSON response back to the client. In this case, it sends the githubData object as a JSON response when the "/github" route is accessed.
})

app.listen(process.env.PORT, () => { // Start the server and listen on the defined port this starts the Express server and makes it listen for incoming requests on the specified port. The provided callback function will be executed once the server is successfully started.
  console.log(`Example app listening on port ${process.env.PORT}`) // This logs a message to the console indicating that the server is running and listening on the specified port. The message includes the value of process.env.PORT, which is the port number defined in the .env file.
})