const {Polls} = require("../models/poll.model");


module.exports.createpoll = (req,res) =>{
  const {questionName,choicea,choiceb,choicec,choiced} = req.body
  Polls.create({
      questionName,choicea,choiceb,choicec,choiced
  })
  .then(Polls=> res.json(Polls))
  .catch(err => res.status(500).json(err))
}

module.exports.getAllPolls = (request, response) => {
  Polls.find({}).sort({_id:-1})
    .then((allPolls) => response.json(allPolls))
    .catch((err) => response.json(err));
};

module.exports.findPoll = (request, response) => {
  Polls.findOne({ _id: request.params.id })
    .then((onePoll) =>
      response.json( onePoll )
    )
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};

module.exports.updatePoll = (request, response) => {
  Polls.findOneAndUpdate(
    { _id: request.params.id },
    request.body,
    { new: true }
  )
   .then((updatedpoll) => res.json(updatedpoll))
   .catch(err => response.status(400).json(err))
}
