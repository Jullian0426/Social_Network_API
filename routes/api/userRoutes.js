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
router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// Routes for friends
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

module.exports = router;
