const mongoose = require('mongoose');
const TVShow = mongoose.model('TVShow');

const obj = {};

obj.getArray = (req, res, next) => {
    TVShow.find()
    .then(tvshows => res.send(tvshows))
    .catch(err => res.send({error: err}));
};

obj.postArray = (req, res, next)=>{
    let newTVShow = new TVShow({
        titulo: req.body.titulo,
        pais: req.body.pais,
        anio: req.body.anio
    });
    newTVShow.save()
    .then(result => res.send(result))
    .catch(err => res.send({error: err}));
};

obj.getById = (req, res, next) => {
    TVShow.findById(req.params.id)
    .then(tvshows => res.send(tvshows))
    .catch(err => res.send({error: err}));
};

obj.deleteTVShow = (req, res, next) => {
    TVShow.findByIdAndRemove(req.params.id)
    .then(tvshows => res.send(tvshows))
    .catch(err => res.send({error: err}));
};

obj.updateTVShow = (req, res, next) => {
    TVShow.findByIdAndUpdate(req.params.id, req.body)
    .then(tvshows => res.send(tvshows))
    .catch(err => res.send({error: err}));
}

module.exports = obj;