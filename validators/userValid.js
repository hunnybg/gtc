const Joi = require('joi');

module.exports.signupValidation = (user)=>{
    const schema = Joi.object().keys({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        email: Joi.string().email().required(),
        venmo_account:Joi.string().required(),
    });
    return Joi.validate(user, schema);
}