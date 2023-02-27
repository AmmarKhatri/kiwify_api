const db = require('../models');

exports.deleteUsers = (req, res) => {
    let id = req.params.id;

    if (!id) {
        res.status(500).send({
            success: false,
            error: 'id not selected',
            data: null
        });
        return;
    }

    db.users.destroy({
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

exports.updateUsers = (req, res) => {
    let id = req.params.id;
    if (!id) {
        res.status(500).send('No Selected');
        return;
    }

    db.users.update(req.body
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

exports.getUsers = (req, res) => {
    db.users.findAll().then(users => {
        return res.status(200).json({
            success: true,
            error: null,
            data: users
        })
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err,
            data: null
        })
    })
}


exports.getUsersById = (req, res) => {
    let id = req.params.id;
    db.users.findAll({
        where: {
            id: id
        }
    }).then(users => {
        return res.status(200).json({
            success: true,
            error: null,
            data: users
        })
    }).catch(err => {
        return res.status(400).json({
            success: false,
            error: err,
            data: null
        })
    })
}

exports.createUsers = function (req, res) {
    db.users.create(req.body)
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