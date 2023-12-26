const userModel = require("../Models/UserModel");


// API Sign Up
module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel
    .findOne({ email: email })
    .then((result) => {
      console.log(result);
      if (result) {
        res.send({ message: "email id is already registered", alert: false });
      } else {
        const data = new userModel(req.body);
        return data.save();
      }
    })
    .then(() => {
      res.send({ message: "Successfully sign up", alert: true });
    })
    .catch((err) => console.log(err));
};

// API Login
module.exports.login = async (req, res) => {
  console.log(req.body)
  const {email, password} = req.body 
  userModel
  .findOne({ email: email, password: password})
  .then((result) => {
    if(result){
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image
      }
      console.log(dataSend);
      res.send({message: "Login is successfully", alert:true,dataSend});
    }
    else{
      res.send({message: "email or password not valid, Please Sign Up",alert: false});
    }
  })
};
