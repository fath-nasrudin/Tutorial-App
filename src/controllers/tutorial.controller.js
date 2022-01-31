const db = require('../models');

const TutorialModel = db.tutorials;

class TutorialCtrl {
  static create = (req, res) => {
    const { title, description, published } = req.body;

    if (!req.body.title) {
      res.status(400).send({ message: 'Content can not be empty!!' });
      process.exit(1);
    }

    const tutorial = new TutorialModel({
      title,
      description,
      published: published || false,
    });

    tutorial
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occured while creating the Tutorial.',
        });
      });
  };

  static findAll = (req, res) => {
    const { title } = req.query;
    const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};
    TutorialModel
      .find(condition)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'error has occur when retrieving data from the server',
        });
      });
  };

  static findOne = (req, res) => {
    const { id } = req.params;

    TutorialModel.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: 'Tutorial with given id is not found',
          });
        } else {
          res.send(data);
        }
      })
      .catch(() => {
        res
          .status(500)
          .send({
            message: `error retrieving Tutorial with id = ${id}`,
          });
      });
  };

  static update = (req, res) => {
    if (!req.body) {
      res.status(400).send({
        message: 'Data to update cannot be empty!!',
      });
    }

    const { id } = req.params;

    TutorialModel.findByIdAndUpdate(
      id,
      req.body,
      { useFindAndModify: false },
    )
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id = ${id}. Maybe Tutorial with that id is not found`,
          });
        } else res.send({ message: 'Tutorial was updated successfully.' });
      })
      .catch(() => {
        res.status(500).send({ message: `Error updating Tutorial with id = ${id}` });
      });
  };

  static delete = (req, res) => {
    const { id } = req.params;

    TutorialModel.findByIdAndRemove(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tutorial with id = ${id}. Maybe Tutorial with given id is not found`,
          });
        } else {
          res.send({
            message: 'Tutorial was deleted successfully!!',
          });
        }
      })
      .catch(() => {
        res.status(500).send({
          message: `Could not delete Tutorial with id = ${id}. Something wrong is happen`,
        });
      });
  };

  static deleteAll = (req, res) => {
    TutorialModel.deleteMany({})
      .then((data) => {
        res.send({
          message: `${data.deletedCount} Tutorials was deleted succesfully!`,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Somer rror occured while removing all tutorials',
        });
      });
  };

  static findAllPublished = (req, res) => {
    TutorialModel.find({ published: true })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occured while retrieving tutorials',
        });
      });
  };
}

module.exports = TutorialCtrl;
