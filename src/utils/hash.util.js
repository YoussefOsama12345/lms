const bcrypt = require('bcrypt')
const hashConfig = require('../config/hash.config')

exports.createHashPassword = async (password) => {
  return await bcrypt.hash(password, Number(hashConfig.saltRounds))
}

exports.compareHashPassword = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword)
}
