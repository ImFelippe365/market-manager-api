module.exports = (req, res, next) => {
    res.header('X-Hello', 'World')
    // if (req.method == 'POST') {
    res.jsonp("AAAAAAAAAAA")
    // }
    next()
}