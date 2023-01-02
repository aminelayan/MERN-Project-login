
const PollController = require('../controllers/poll.controller')
module.exports = app =>{
    app.post('/api/polls',PollController.createpoll)
    app.get('/api/polls',PollController.getAllPolls)
    app.get('/api/polls/:id',PollController.findPoll)
    app.put('/api/polls/:id',PollController.updatePoll)
}