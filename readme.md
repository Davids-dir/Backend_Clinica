# 🏥 Dental Clinic Backend 🏥

In this project the owner wants offer the possibility to their customers make reservations throught an aplication.
## 💾 Technologies

### Language
Coding in [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Framework 
[Node.js](https://nodejs.org/es/) with [NPM](https://www.npmjs.com/)

### Packages used
* Express
* Mongoose
* Bcrypt
* Nodemon

### Database
 [Mongo DB](https://www.mongodb.com/es) as main Database with [Mongoose](https://mongoosejs.com/) working as ODM.

##  How to start
Type in terminal

```javascript
node main.js or nodemon main.js
```

## 🤔 ¿What can i do?  
You can add new costumers into your Database, your costumers can Login into their profiles and Logout, create new reservation and manage their dates that includes see next date and remove it.

## 📝 Avaible Endpoints
#### Customers
**POST:** */signup*

**POST:** */login*

**GET:** */logout/email*

#### Dates
**POST:** */create/id*

**GET:** */show/id*

**DELETE:** */remove/id*


## License
[MIT](https://choosealicense.com/licenses/mit/)