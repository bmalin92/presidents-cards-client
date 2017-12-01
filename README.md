
<h1 align="center">POTUS Facts</h1>
<p><em>This document provides general information on the POTUS Facts client-side application.  For more information about the POTUS Facts API, please see <a href="hhttps://github.com/jackseabolt/president-cards-server">president-cards-server</a>.</em></p>

Why POTUS Facts
-------------
Are you a US history student? Maybe you just like presidential trivia. This application is for you! This application uses a spaced repition algorithm to sort presidential trivia questions. The more often you get a question correct, the less you see that question.  

How it Works
------------
<table layout="fixed">
  <tr>
    <td width="55%">
      <p>POTUS Facts keeps a custom set of trivia questions for each user. Create a user and sign in</p>
    </td>
    <td width = "40%">
      <img src="/images/readme_image1.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td width="55%">
      <p>The application will provide a question. Answer the question by filling in the input and clicking submit. The application will let you know if you got the question right or wrong. Click next to be given a new question.</p>
    </td>
    <td width = "40%">
      <img src="/images/readme_image2.png" max-height="240px" width="auto">
    </td>
  </tr>
</table>

For local use
--------

```bash
# Clone repository
git clone https://github.com/bmalin92/presidents-cards-client

# Change directory
cd presidents-cards-client

# Install NPM dependencies
npm install

# Start the server
npm start
```
