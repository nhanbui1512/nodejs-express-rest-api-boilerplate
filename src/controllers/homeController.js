class HomeController {
    async index (req, res) {
        return res.send('Home Router')
    }
}

export default new HomeController()