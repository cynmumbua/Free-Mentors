# Free-Mentors
Free Mentors is a social initiative where accomplished professionals become role models to young people to provide free mentorship sessions. 

[![Build Status](https://travis-ci.org/cynmumbua/Free-Mentors.svg?branch=ft-update-to-mentor-168000713)](https://travis-ci.org/cynmumbua/Free-Mentors)
[![Maintainability](https://api.codeclimate.com/v1/badges/b204eca8eace469092db/maintainability)](https://codeclimate.com/github/cynmumbua/Free-Mentors/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/cynmumbua/Free-Mentors/badge.svg?branch=develop)](https://coveralls.io/github/cynmumbua/Free-Mentors?branch=develop)
<b>Built with</b>
- [Node.js](https://nodejs.org)
---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node Installation
- #### Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Ubuntu/linux

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v10.16.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g
### For developers
Clone the source locally:

```sh
$ git clone https://github.com/cynmumbua/Free-Mentors
```
Install project dependencies:

```sh
$ npm install
```
Start the app:

```sh
$ npm start
```
To run tests:

```sh
$ npm test
```
## Features
- ### Users can sign up. 
- ### Users can sign in. 
- ### Admin can change a user to a mentor. 
- ### Users can view mentors. 
- ### Users can view a specific mentor. 
- ### Users can create a mentorship session request with a mentor. 
- ### A mentor can accept a mentorship session request. 
- ### A mentor can decline a mentorship session request. 
Pivotal tracker (https://www.pivotaltracker.com/n/projects/2380161)

## API 

Documentation:
[Swagger] (https://app.swaggerhub.com/apis/cynmumbua/FreeMentors/1.0.0)

Deploymet:
[Heroku] (https://free-mentors-api.herokuapp.com)

### API Routes
<table>
    <tr>
        <th>HTTP VERB</th>
        <th>ENDPOINT</th>
        <th>FUNCTIONALITY</th>
    </tr>
    <tr>
        <td>POST</td>
        <td>[ users ] /api/v1/auth/signup</td>
        <td>Create user account</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>[ users ] /api/v1/auth/signin</td>
        <td>Sign in to user account</td>
    </tr>
    <tr>
        <td>PATCH</td>
        <td>[ admin ] /api/v1/user/:userId</td>
        <td>Change user to mentor</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>[ users ] /api/v1/mentors</td>
        <td>Get all available mentor</td>
    </tr>
     <tr>
        <td>GET</td>
        <td>[ users ] /api/v1/mentors/:mentorId</td>
        <td>Get a specific mentor</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>[ users ] /api/v1/sessions</td>
        <td>Create a mentorship session</td>
    </tr>
    <tr>
        <td>PATCH</td>
        <td>[ mentor ] /api/v1/sessions/:sessionId/accept</td>
        <td>A mentor can accept a mentorship session</td>
    </tr>
    <tr>
        <td>PATCH</td>
        <td>[ mentor ] /api/v1/sessions/:sessionId/reject</td>
        <td>A mentor can reject a mentorship session</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>[ users ] /api/v1/sessions</td>
        <td>Get all mentorship session request</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>[ users ] /api/v1/sessions/:sessionId/review</td>
        <td>A user can review a mentorship session</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>[ admin ] /api/v1/sessions/:sessionId/review</td>
        <td>Admin can delete session review a deemed inanpropiate</td>
    </tr>
</table>

## Acknowledgments
 Andela
 
## Authors
- ### Cynthia Muinde

