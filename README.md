# 2D Diagram Editor

MyEAN Stack project for creating and editing images using [fabric.js](http://fabricjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [Bower](https://bower.io/), [MySQL](https://www.mysql.com/) installed.

```sh
git clone https://github.com/prabjot-singh/2d-editor.git # or clone your own fork

cd 2d-editor

cd client
npm install
bower install

cd ..
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Add your MySQL user and password in 2d-editor/server/config.js

```
db: {
    host: 'localhost',
    user: 'root'
    password: 'password'
  }
```
## Notes

- Undo and Redo buttons are disabled right after performing the action for a few seconds, to prevent rapid clicking.

## Bugs - ToDo's

- Font color does not change, need to fix the scope watch
- Edit and Save a perviously saved diagram i.e, implement UPSERT in MySQL queries

