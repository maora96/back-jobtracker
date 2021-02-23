const Interaction = require('../repositories/interaction')

const addInteraction = async (req, res) => {
  const {
    entry_id = null,
    type = null,
    date = null,
    links = null,
    expected_response = null
  } = req.body

  if (entry_id === null) {
    res.status(401).json({ message: 'Entry id must not be null.' })
  }

  try {
    const result = await Interaction.addInteraction(
      entry_id,
      type,
      date,
      links,
      expected_response
    )

    if (result) {
      res.status(201).json({ result })
    } else {
      res.status(404).json({ message: 'Interaction returned null' })
    }
  } catch (error) {
    res.status(401).json({ error, message: 'Something went wrong.' })
  }
}

const getInteractionById = async (req, res) => {
  const { id = null } = req.params

  try {
    const interaction = await Interaction.getInteractionById(id)
    if (interaction) {
      return res.status(201).json({ interaction })
    } else {
      return res.status(404).json({ message: 'No interaction found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const updateInteractionById = async (req, res) => {
  const {
    entry_id = null,
    type = null,
    date = null,
    links = null,
    expected_response = null
  } = req.body

  const { id } = req.params

  try {
    if (id) {
      const interaction = await Interaction.getInteractionById(id)
      if (interaction) {
        const result = await Interaction.updateInteractionById(
          entry_id,
          type,
          date,
          links,
          expected_response,
          id
        )
        if (result) {
          res.status(201).json({ result })
        } else {
          res.status(404).json({
            message: 'Something went wrong with updating the interaction.'
          })
        }
      } else {
        res.status(404).json({ message: 'Interaction not found.' })
      }
    } else {
      res
        .status(404)
        .json({ message: 'ID must be provided for updating interaction.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

const deleteInteractionById = async (req, res) => {
  const { id = null } = req.params

  try {
    const interaction = await Interaction.deleteInteractionById(id)
    if (interaction) {
      return res.status(201).json({ interaction })
    } else {
      return res.status(404).json({ message: 'No interaction found.' })
    }
  } catch (error) {
    return res.status(401).json({ message: 'Something went wrong.' })
  }
}

module.exports = {
  addInteraction,
  getInteractionById,
  updateInteractionById,
  deleteInteractionById
}
