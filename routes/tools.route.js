const express = require('express');
const toolsController = require('../controller/tools.controller.js');
const viewCount = require('../middleWare/viewController.js');
const limiter = require('../middleWare/limiter.js');


const router = express.Router();

// router.get('/:id' ,(req, res)=>{
// res.send("tools route with id")
// })

// router.post('/' ,(req, res)=>{
//     res.send("tools route to post")

// })

router.route('/')
.get(toolsController.getAllTools)
.post(toolsController.saveATools)

router.route("/:id")
.get(viewCount,limiter,toolsController.getToolsDetail)
.patch(toolsController.updateTool)
.delete(toolsController.deleteTools)
// router.route('/:id')
// .get((req, res)=>{
//     res.send("tools route with id")
//     })
// .post((req, res)=>{
//     res.send("tools route to post id")

// })


module.exports = router;
