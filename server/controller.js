module.exports = {

    getHouses: async (req, res) => {
        const db = req.app.get('db')
        let houses = await db.get_houses()

        res.status(200).send(houses)
    },
    addHouse: async (req, res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zipCode} = req.body
        await db.add_house(name, address, city, state, zipCode)

        res.sendStatus(200)
    },
    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        await db.delete_house(id)

        res.sendStatus(200)
    }
}