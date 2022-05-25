const con = require('../../config/dbconfig')

const userDao = {
    table: 'user',

    create: (req, res)=> {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO user SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res)=> {
        if (Object.keys(req.body) === 0) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `UPDATE user SET ${fields.join(' =?, ')} = ? WHERE user_id = ?`,
                [...values, req.body.user_id],
                (error, dbres)=> {
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log(' DAO ERROR ', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    },

    signIn: (req, res)=> {
        let user = {};
        con.execute(
            `SELECT * FROM user WHERE user.username = ?`,
            [req.body.username],
            (error, rows)=> {
                if(!error) {
                    if(rows.length > 0) {
                        user = rows[0]
                        if(user.password === req.body.password) {
                            res.json({
                                status: 200,
                                message: 'successful login',
                                user_id: user.user_id,
                                username: user.username,
                                balance: user.balance,
                            })
                        } else {
                            res.json({
                                status: 401,
                                message: 'Incorrect username/password'
                            })
                        }
                    } else {
                        res.json({
                            status: 401,
                            message: 'Incorrect username/password'
                        })
                    }
                   
                } else {
                    console.log(' DAO ERROR ', error)
                }
            }
        )
    }
}

module.exports = userDao