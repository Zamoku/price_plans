module.exports = function PriceplanRoutes(price_plan){

    async function add(req, res){
        console.log(req.body.setPriceplan);
        await price_plan.addUser(req.body.setUsername, req.body.setPriceplan)

        res.redirect('/')
    }

    async function show(req,res){
        res.render('index',{
            
            user: await price_plan.displayUser()
        })
    }
    return{
        add,
        show
    }
}