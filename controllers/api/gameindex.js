module.exports = {
    getAll
}
async function getAll(req, res) {
    try { const lists = await fetch('https://www.mmobomb.com/api1/games').then(res => res.json()) 
    console.log(lists)
    }
    catch (err) {
        res.status(400).json(err)
    }
}
