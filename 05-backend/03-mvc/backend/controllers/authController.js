const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password } = req.body;
  encryptPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ email, encryptPassword });
  res.send(user);
}

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    bcrypt.compare(password, user.encryptPassword, (err, result) => {
      if (result) {
        res.send({message: "Login correcto"}); // Mandar el JWT
      } else {
        res.status(401).send({ message: "Password incorrecto" });
      }
    });
  } else {  
    res.status(404).send({ message: "Usuario no encontrado" }); 
  }
}

module.exports = { register, login }