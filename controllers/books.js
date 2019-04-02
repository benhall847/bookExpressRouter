function create(req,res){
    res.json({message:"BOOKS CREATED"})
}

function retrieveAll(req,res){
    res.json({message:"ALL BOOKS RETRIEVED" })
}
function update(req,res){
    res.json({message:"BOOKS UPDATED" })
}
function deleter(req,res){
    res.json({message:"DATABASE DESTROYED"})
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleter
}