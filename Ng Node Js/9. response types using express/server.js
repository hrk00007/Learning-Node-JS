const path = require('path')
const express = require('express')
const app = express();


//html tag as response
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to Express JS</h2>`)
})
//html page as response
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

let jsonData = [{
    "login": "hrk00007",
    "id": 67812755,
    "node_id": "MDQ6VXNlcjY3ODEyNzU1",
    "avatar_url": "https://avatars.githubusercontent.com/u/67812755?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/hrk00007",
    "html_url": "https://github.com/hrk00007",
    "followers_url": "https://api.github.com/users/hrk00007/followers",
    "following_url": "https://api.github.com/users/hrk00007/following{/other_user}",
    "gists_url": "https://api.github.com/users/hrk00007/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/hrk00007/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/hrk00007/subscriptions",
    "organizations_url": "https://api.github.com/users/hrk00007/orgs",
    "repos_url": "https://api.github.com/users/hrk00007/repos",
    "events_url": "https://api.github.com/users/hrk00007/events{/privacy}",
    "received_events_url": "https://api.github.com/users/hrk00007/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Hritik manbattulwar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 18,
    "followers": 1,
    "following": 4,
    "created_at": "2020-07-04T02:06:36Z",
    "updated_at": "2022-11-28T18:02:55Z"
}]
//json as response
app.get('/json', (req, res) => {
    res.json(jsonData)
})
//download as response
app.get('/file', (req, res) => {
    res.download(path.join(__dirname, 'server.js'))
})

app.listen(5000);