const db = require('../models');

exports.deleteAttempts = (req, res) => {
    let id = req.params.id;
   
    if (!id) {
        res.status(500).send({
            success: false,
            error: 'id not selected',
            data: null
        });
        return;
    }
    
    db.attempts.destroy({
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

exports.updateAttempts = (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }

    db.attempts.update(req.body
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

exports.getAttempts = (req, res) => {
    let id = req.params.id;
    db.attempts.findAll({}).then(quizs => {
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
exports.getAttemptsById = (req, res) => {
    let id = req.params.id;
    db.attempts.findAll({
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
exports.createAttempts = function (req, res) {
    db.attempts.create(req.body)
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