# storytel-message-board

## Instructions

**Clone and download repository**

**Install dependencies**

`npm install`

**start json-server**

_server needs to run on localhost:3000_

`json-server --watch db.json`

**start development server**
open a new terminal window

`npm start`

**testing**

App uses localStorage to set a authorId. For testing purposes you can clear the localStorage-token, with the button "New Author".

json-server uses lowdb to save entries in db.json.

## TO-DO

_random order_

1. Add threading
2. Add date created (last reply by)
3. Add auth and login-functionality
4. Add statistics (views, replies etc.)
5. Add titles to messages
