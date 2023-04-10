const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js');

// Routes for all thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought);

// Routes for single thoughts
// :thoughtId is the thought's _id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Routes for reactions
// :thoughtId is the thought's _id
router.route('/:thoughtId/reactions/')
    .post(addReaction)
    .delete(deleteReaction)

module.exports = router;
