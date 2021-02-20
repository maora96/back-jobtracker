const Password = require('../utils/password')

const encrypt = async (req, res, next) => {
  const { password = null } = req.body
  console.log(password)
  if (!password) {
    res.status(404).send({ message: 'Bad request.' })
  }

  const hash = await Password.encrypt(password)

  return next()
}

module.exports = { encrypt }
