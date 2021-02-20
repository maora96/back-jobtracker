const Entry = require('../repositories/entry')

const addEntry = async (req, res) => {
  const {
    user_id = null,
    company = null,
    role = null,
    level = null,
    skills = null,
    recruiter = null
  } = req.body

  try {
    const result = await Entry.addEntry(
      user_id,
      company,
      role,
      level,
      skills,
      recruiter
    )

    if (result) {
      res.status(201).json({ result })
    } else {
      return res.status(404).json({ message: 'Entry returned null.' })
    }
  } catch (error) {
    res.status(401).json({ error, message: 'Something went wrong.' })
  }
}

const getAllEntries = async (req, res) => {
  try {
    const result = Entry.getAllEntries()

    if (result) {
      res.status(201).json({ result })
    } else {
      return res.status(404).json({ message: 'No entries found.' })
    }
  } catch (error) {
    res.status(401).json({ error, message: 'Something went wrong.' })
  }
}

const getEntryById = async (req, res) => {
  const { id = null } = req.params

  try {
    const entry = await Entry.getEntryById(id)
    if (entry) {
      return res.status(201).json({ entry })
    } else {
      return res.status(404).json({ message: 'No entry found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const getInteractionsByEntryId = async (req, res) => {
  const { id = null } = req.params

  try {
    const interactions = await Entry.getInteractionsByEntryId(id)
    if (interactions) {
      return res.status(201).json({ interactions })
    } else {
      return res.status(404).json({ message: 'No interactions found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong' })
  }
}

const deleteEntryById = async (req, res) => {
  const { id = null } = req.params

  try {
    const entry = await Entry.deleteEntryById(id)
    if (entry) {
      return res.status(201).json({ entry })
    } else {
      return res.status(404).json({ message: 'No entry found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const updateEntryById = async (req, res) => {
  const {
    company = null,
    role = null,
    level = null,
    skills = null,
    recruiter = null
  } = req.body

  const { id } = req.params

  try {
    if (id) {
      const entry = await Entry.getEntryById(id)
      if (entry) {
        const result = await Entry.updateEntryById(
          company,
          role,
          level,
          skills,
          recruiter
        )
        if (result) {
          res.status(201).json({ result })
        } else {
          res
            .status(404)
            .json({ message: 'Something went wrong with updating the entry.' })
        }
      } else {
        res.status(404).json({ message: 'Entry not found.' })
      }
    } else {
      res
        .status(404)
        .json({ message: 'ID must be provided for updating entry.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

module.exports = {
  addEntry,
  getAllEntries,
  getEntryById,
  getInteractionsByEntryId,
  deleteEntryById,
  updateEntryById
}
