const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Routes for all users
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// Routes for single users
// :userId is the user's _id
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// Routes for friends
// // :userId is the user's _id and :friendId is that user's _id
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;
