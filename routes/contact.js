const express = require('express')
const { getItems, createItem, getItem, deleteItem, updateItem } = require('../controllers/contact')
const router = express.Router()

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", createItem )
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)

module.exports = router