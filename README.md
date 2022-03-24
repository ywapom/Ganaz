# Simple API

This is a Koa simple application used for testing purposes that exposes few endpoints.

### First, You must

1. Fork the public repository https://github.com/GanazHQ/SimpleAPI.git
2. Have Node 16.x.x installed locally
3. Have a Rest client installed locally, preferably Postman to quickly test the endpoints
4. You must know that this project has Jest configured by default, but you are able to use any other testing framework

### Steps to run the application

Once you have the public repository locally, go to the <code>SimpleApi</code> directory.

1. Install dependencies: <code>yarn</code>
2. Build: <code>yarn build</code>
3. Start the application: <code>yarn start</code>
4. Two endpoints will be available once the app is started:
   1. <code>GET</code> method: <code>http://localhost:9999/api/foo/X </code> where <code>X</code> can be any number
   2. <code>POST</code> method: <code>http://localhost:9999/api/foo </code> where the body must be like <code>{ id: X }</code> and <code>X</code> can be any number
5. The application is ready to use <code>Jest</code> framework for your test cases

### What the endpoints do

1. GET <code>http://localhost:9999/api/foo/X </code>
   1. If <code>X</code> is divisible by 2, it returns <code>200</code> code with <code>OK</code> message
   2. If <code>X</code> is not a number, it returns <code>400</code> code with <code>ERROR: Value X is not a number</code> message
   3. Otherwise, it returns <code>501</code> error code
2. POST <code>http://localhost:9999/api/foo </code>
   1. If body <code>{ id: 1 }</code>, it returns <code>200</code> code with <code>bar</code> message
   2. If body <code>{ id: 2 }</code>, it returns <code>200</code> code with <code>bass</code> message
   3. If body <code>{ id: anynumber }</code>, it returns <code>200</code> code with <code>unmatched</code> message
   4. If body does not contain property <code>id</code>, it returns <code>400</code> code with <code>ERROR: JSON body must contain id property</code> message


