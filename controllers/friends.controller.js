const addFriend =  (res,req,next) => {
    console.log(friend) ;

}

const listFriends = (req,res,next) => {

    return res.status(200).json([{id : 1},{id : 2},{ id: 3}])
}

module.exports = { addFriend, listFriends }