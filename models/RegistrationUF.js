const mongoose = require('mongoose');

const registrationUFSchema = new mongoose.Schema({
    firstNameUF: {
        type: String,
        required: 'Please Enter first name'
    },
    lastNameUF: String,
    userNameUF: String,
    dobUF:String,
    dorUF:String,
    idNumber: String,
    ufNIN:  {
        type: String,
        required: 'Please Enter NIN number'
    },
    phoneNumberUF: String,
    phoneNumberUF2: String,
    wardUF: String,
    productType: String,
    gender: String,
  });

  module.exports = mongoose.model('RegistrationUF', registrationUFSchema);