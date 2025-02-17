const express = require('express');
const userService = require('./src/controllers/userController');
const db = require('./src/config/database');
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await userService.getUsers();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
});

app.post('/users', async (req, res) => {
  const id = await userService.addUser(req.body);
  res.json({ id });
});

app.put('/users/:id', async (req, res) => {
  await userService.updateUser(req.params.id, req.body);
  res.sendStatus(200);
});

app.delete('/users/:id', async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

try {
    db.connect;
    console.log("Database connection success");
} catch (error) {
    console.log(error);
}