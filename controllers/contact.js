const { contactModel } = require('../models')

/**
 * 
 * @param {null} req 
 * @param {array} res 
 */
const getItems = (req, res)=>{
    contactModel.find({})
        .then((data)=>{
            res.status(200).json({data:data})
        }).catch((error)=>{
            res.status(400).json({error:error})
        })
}

/**
 * 
 * @param {id: String} req 
 * @param {array} res 
 */
const getItem = (req, res)=>{
    contactModel.find({_id:req.params['id']})
        .then((data)=>{
            res.status(200).json({data:data})
        }).catch((error)=>{
            res.status(400).json({error:error})
        })
}

/** 
 * 
 * @param { contactModel } req 
 * @param { JSON } res 
 */
const createItem = (req, res)=>{
    const { body } = req
    contactModel.create(body)
        .then((data)=>{
            res.status(201).json({data:data})
        }).catch((error)=>{
            res.status(400).json({error:error})
        })
}

/**
 * 
 * @param {null} req 
 * @param {array} res 
 */
const updateItem = (req, res)=>{
    const { body } = req
    contactModel.find({_id:req.params['id']})
        .then((data)=>{
            if(data.length < 1){
                res.status(400).json({message:'contact not exist'})
            }else{
                contactModel.updateOne({_id:req.params['id']}, body)
                    .then((response)=>{
                        res.status(201).json({response:response})
                    }).catch((error)=>{
                        res.status(400).json({error:error})
                    })
            }
        })
}

/**
 * 
 * @param {null} req 
 * @param {array} res 
 */
const deleteItem = (req, res)=>{
    contactModel.deleteOne({_id:req.params['id']})
        .then((response)=>{
            res.status(200).json({message:response})
        }).catch((error)=>{
            res.status(400).json({error:error})
        })
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }