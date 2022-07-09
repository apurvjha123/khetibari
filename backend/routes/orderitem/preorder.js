const express = require('express');
const Preorder = require('../../models/Orderitem/Preorder');
const router = express.Router();

// get preorder

router.get('/',async (req,res)=>{
    try {
        const preorder = await Preorder.find();
        if(! preorder){
        return res.status(404).json({message : 'Preorder not found'})
        }
        return res.status(200).json({ preorder });
    } catch (error) {
        console.log(error);
    }
})

// get preorder

router.get('/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const preorder = await Preorder.findById(id);
        if(! preorder){
        return res.status(404).json({message : 'Preorder not found'})
        }
        return res.status(200).json({ preorder });
    } catch (error) {
        console.log(error);
    }
})



//create preorder

router.post('/',async (req,res)=>{
    try{
        const {name , category, ordersummary, price,needwithin ,seller, image }= req.body
        const preorder = new Preorder({
            name,
            category,
            ordersummary,
            price,
            needwithin,
            seller,
            image
        })
        await preorder.save();

        if(! preorder){
           return res.status(404).json({message : 'Unable to add this preorder'})
        }
        console.log(preorder)
        return res.status(201).json({ preorder });
    } catch (error) {
        console.log(error)
    }
})

//UPDATE Preorder



router.put('/:Id', async (req, res)=>{
    let preorder;
    try {
        const id = req.params.Id;
        const {name , category, ordersummary, price,needwithin ,seller, image }= req.body
        preorder = await Preorder.findByIdAndUpdate(id,{
            name,
            category,
            ordersummary,
            price,
            needwithin,
            seller,
            image
        })
        preorder = await preorder.save()

        if(! preorder){
          return  res.status(404).json({message : 'Unable to update'})
        }
        return res.status(201).json({ preorder });
    }catch(error){
        console.log(error);
    }
})




// Delete Preorder

router.delete('/:id',async (req,res)=>{
    const id = req.params.id;
    try {
        const preorder = await Preorder.findByIdAndRemove(id);
        if(! preorder){
        return res.status(404).json({message : 'Preorder not found'})
        }
        return res.status(200).json({ preorder });
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;