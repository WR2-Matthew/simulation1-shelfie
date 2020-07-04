module.exports = {

  getProducts: async (req, res) => {
    const db = req.app.get('db')

    const inventory = await db.retrieve_inventory()
    // console.log(inventory)
    res.status(200).send(inventory)
  },

  createProduct: async (req, res) => {
    // console.log('hit')
    const { name, price, image } = req.body
    const db = req.app.get('db')

    const newInv = db.create_product(name, price, image)
    res.status(200).send(newInv)
  },

  deleteProduct: async (req, res) => {
    const { product_id } = req.params
    const db = req.app.get('db')
    // console.log(product_id)

    const deleted = await db.remove_product(product_id)
    res.sendStatus(200)
  },

  getSingProd: async (req, res) => {
    // console.log('hit')
    const { id } = req.params
    // console.log(id, 'id')
    const db = req.app.get('db')

    const single = await db.get_single_product(id)
    // console.log(single, 'selected')
    res.status(200).send(single)
  },

  editProduct: async (req, res) => {
    // console.log('hit')
    const { id } = req.params
    const { name, image, price } = req.body
    const db = req.app.get('db')

    await db.edit_product(id, name, price, image)
    res.sendStatus(200)
  }

}