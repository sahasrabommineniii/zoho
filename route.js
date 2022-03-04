const express = require('express');
const router = express.Router();

const Contact = require('./models/contacts');

router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
    // res.send('Loading the contacts');
});

router.post('/contact',(req, res, next)=>{

    let newContact = new Contact({
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email
    })

    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'unable to add new contact'});
        }
        else{
            res.json({msg: 'Added your new contact'});
        }
    });
});

router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });

});


module.exports = router;