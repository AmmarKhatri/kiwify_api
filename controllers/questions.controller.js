const db = require('../models');

exports.deleteQuestions = (req, res) => {
    let id = req.params.id;
   
    if (!id) {
        res.status(500).send({
            success: false,
            error: 'id not selected',
            data: null
        });
        return;
    }
    
    db.questions.destroy({
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

exports.updateQuestions = (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }

    db.questions.update(req.body
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

exports.getQuestions = (req, res) => {
    db.questions.findAll().then(quizs => {
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

exports.getQuestionsById = (req, res) => {
    let id = req.params.id;
    db.questions.findAll({
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
exports.createQuestions = function (req, res) {
    db.questions.create(req.body)
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