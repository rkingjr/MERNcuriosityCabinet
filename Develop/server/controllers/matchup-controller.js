const { Matchup } = require('../models');

module.exports = {
  async createMatchup({ body }, res) {
    const matchup = await Matchup.create(body);

    if (!matchup) {
      return res.status(400).json({ message: 'Unable to create matchup' });
    }

    res.status(200).json(matchup);
  },
  async createVote(req, res) {
    const vote = await Matchup.findOneAndUpdate(
      { _id: req.body.id },
      { $inc: { [`tech${req.body.techNum}_votes`]: 1 } },
      { new: true }
    );

    if (!vote) {
      return res.status(400).json({ message: 'Unable to vote on matchup' });
    }

    res.status(200).json(vote);
  },
  async getAllMatchups(req, res) {
    const allMatchups = await Matchup.find({});

    if (!allMatchups) {
      return res.status(400).json({ message: 'No matchups found' });
    }

    res.status(200).json(allMatchups);
  },
  async getMatchup({ params }, res) {
    const matchup = await Matchup.findOne({ _id: params.id });

    if (!matchup) {
      return res.status(400).json({ message: 'No matchup found by that id' });
    }

    res.status(200).json(matchup);
  },
};
