const express = require('express')
// const { getItems, createItem, getItem, deleteItem } = require('../controllers/user')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('hello world')
  })
// router.get("/", getItems)
// router.get("/:id", getItem)
// router.post("/", createItem )
// router.delete("/:id", deleteItem)

module.exports = router