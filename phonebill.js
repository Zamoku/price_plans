module.exports = function Priceplan(db){

    async function addUser(username,priceplanId){
            let results = await db.none("INSERT INTO users (username,price_planid) VALUES ($1,(SELECT id FROM price_plan WHERE plan_name = $2));",[username, priceplanId])
    }

    async function displayUser(){
        let results = await db.manyOrNone("SELECT username, price_plan.plan_name from users Inner join price_plan on price_plan.id = users.price_planid")

        
        return results
    }

    

    return{
        addUser,
        displayUser
    }
}