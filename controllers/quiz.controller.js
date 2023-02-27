const db = require('../models');

exports.deleteQuiz = (req, res) => {
    let id = req.params.id;
   
    if (!id) {
        res.status(500).send({
            success: false,
            error: 'id not selected',
            data: null
        });
        return;
    }
    
    db.quiz.destroy({
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


exports.updateQuiz = (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }

    db.quiz.update(req.body
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

exports.getQuiz = (req, res) => {
    db.quiz.findAll().then(quizs => {
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


exports.getQuizById = (req, res) => {
    let id = req.params.id;
    db.quiz.findAll({
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

exports.createQuiz = function (req, res) {
    db.quiz.create(req.body)
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