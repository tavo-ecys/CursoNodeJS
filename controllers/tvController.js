const array = [1,2,3];
const obj = {};
const tvShows = [
    {
        Id: 1,
        Titulo: 'LQ1',
        anio: 2017,
        pais: 'USA'
    },
    {
        Id: 2,
        Titulo: 'LQ2',
        anio: 2015,
        pais: 'GT'
    },
    {
        Id: 3,
        Titulo: 'LQ3',
        anio: 2011,
        pais: 'IT'
    }
];

obj.getArray = (req, res, next)=>{
    res.send(tvShows);
};
obj.postArray = (req, res, next)=>{
    array.push(req.body.number);
    res.send(array);
};

obj.getById = (req, res, next) => {
    let tvFind = tvShows.find((tvShows) => tvShows.Id === Number.parseInt(req.params.id));

    if(!tvFind){
        return res.send({error: `Show: ${req.params.id}, no encontrado`});
    }

    res.send(tvFind);
};

obj.deleteTVShow = (req, res, next) => {
    let indexTvShow = tvShows.findIndex((tvShows) => tvShows.Id === Number.parseInt(req.params.id));
    if(indexTvShow < 0){
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }

    res.send(tvShows.splice(indexTvShow, 1));
};

obj.updateTVShow = (req, res, next) => {
    let indexTvShow = tvShows.findIndex((tvShows) => tvShows.Id === Number.parseInt(req.params.id));
    if(indexTvShow < 0){
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }

    let tvShowActual = tvShows[indexTvShow];

    tvShowActual.Titulo = req.body.Titulo;
    tvShowActual.anio = req.body.anio;
    tvShowActual.pais = req.body.pais;

    tvShows[indexTvShow] = tvShowActual;

    res.send(tvShows);
}

module.exports = obj;