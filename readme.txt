PROJECT SETUP


IIS Configuration

I used IIS as webserver to work on localhost
-Open IIS then create a new website
-Connect the local path of the project to your IIS website
-Assign a port to the website, then edit IIS permissions of the website
-Open http://localhost:port  to start project

json-server Configuration

Database of the project is created via json-server. So you must install json-server.
-Open command prompt and go to your project's folder
-install json-server with this command -> npm install -g json-server
-When installation is completed, enter the following command to start your json-server database: json-server --watch db.json 

or you can check: https://github.com/typicode/json-server



