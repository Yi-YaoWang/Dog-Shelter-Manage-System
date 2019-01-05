# Dog-Shelter-Manage-System
It's a simple manage system for Dog Shelter 

We simulate a dog shelter manage system. We assume only the dog shelter employee would use the system. 
You can edit the dog information and customers or users information by the manage system.

Due to the purpose of the system, its database would be set in local.
Therefore if you need to run our codes you need to set up the enviroment first.
We are using 'ejs' for our front-end, 'express' for server and 'mySQL' for database system.

---

You need to make sure you have the node.js and mySQL be set in your local.

First, add an databse(or schema in mySQL Workbench) by naming "doge".
Then run our sql code "doge_shelter.sql" to add some fake dogs and users data in your local database.
Now, we have alraedy set up our system.
Run 'npm install' at your local folder in the terminal.
Then run 'npm start' to start our interface in your browser.(localhost:3000 for default)
Please enjoy our code and if you have any problem please contact me by this email: justin17728@gmail.com

---

Notice

If you found error by running our code. Run "alter user 'root'@'localhost' identified with mysql_native_password by '0000'"
in database "doge", then try run it again.
