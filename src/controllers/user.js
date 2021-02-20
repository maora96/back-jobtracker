const User = require('../repositories/user')
const Password = require('../middlewares/encrypt')
const bcrypt = require('bcryptjs')

const addUser = async (req, res) => {
  const { email = null, password = null, name = null } = req.body

  try {
    const existingUser = await User.getUserByEmail(email)

    if (existingUser) {
      return res.status(401).json({ message: 'User already registered.' })
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await User.addUser(email, hashedPassword, name)

    if (result) {
      res.status(201).json({ result })
    } else {
      return res
        .status(401)
        .json({ message: 'User possibly not created (returned null).' })
    }
  } catch (error) {
    res.status(401).json({ message: 'Something went wrong.' })
  }
}

const getUser = async (req, res) => {
  const { id = null } = req.params

  try {
    const user = await User.getUserById(id)
    if (user) {
      return res.status(200).json({ user })
    } else {
      return res.status(401).json({ message: 'No user found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const deleteUser = async (req, res) => {
  const { id = null } = req.params

  try {
    const user = await User.deleteUser(id)
    if (user) {
      return res.status(201).json({ user })
    } else {
      return res.status(401).json({ message: 'No user found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const getUserEntries = async (req, res) => {
  const { id = null } = req.params

  try {
    const entries = await User.getEntriesByUserId(id)
    if (entries) {
      return res.status(200).json({ entries })
    } else {
      return res.status(404).json({ message: 'No entries found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

module.exports = { addUser, getUser, deleteUser, getUserEntries }
