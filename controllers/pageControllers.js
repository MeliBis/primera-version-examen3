const vistaPrincipal = (req, res) => {
    res.render('layout')
}
const vistaTables = (req,res)=>{
    res.render('tables')
}

module.exports = {
    vistaPrincipal,
    //vistaTables,
}