const db = require('../models');

exports.deleteAnswers = (req, res) => {
    let id = req.params.id;
   
    if (!id) {
        res.status(500).send({
            success: false,
            error: 'id not selected',
            data: null
        });
        return;
    }
    
    db.answers.destroy({
        where: {
            id: id
        }
    })
        .then(result => res.json({
            success: true,
            error: null,
            data: result
        }))
        .catch(err => res.json({
            success: false,
            error: err,
            data: null
        }));;
}


exports.updateAnswers = (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }

    db.answers.update(req.body
        ,
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(result => res.json({
        success: true,
        error: null,
        data: result
    }))  
    .catch(err => {
        return res.status(400).json({
            success: false,
            error: err,
            data: null
        })
    })
}

exports.getAnswers = (req, res) => {
    let id = req.params.id;
    db.answers.findAll({}).then(quizs => {
        return res.status(200).json({
            success: true,
            error: null,
            data: quizs
        })
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err,
            data: null
        })
    })
}
exports.getAnswersById = (req, res) => {
    let id = req.params.id;
    db.answers.findAll({
        where: {
            id: id
        }
    }).then(quizs => {
        return res.status(200).json({
            success: true,
            error: null,
            data: quizs
        })
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err,
            data: null
        })
    })
}
exports.createAnswers = function (req, res) {
    db.answers.create(req.body)
    .then(result => res.json({
        success: true,
        error: null,
        data: result
    }))
    .catch(err => res.json({
        success: false,
        error: err,
        data: null
    }));
}