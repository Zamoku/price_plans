module.exports = function Priceplan(db){

    async function addPricePlan(username,priceplan){
            let results = await db.query("INSERT INTO users (username,price_planid) VALUES ($1,(SELECT price_plan.id FROM price_plan WHERE plan_name = $2));",[username],[priceplan])
    }

    return{
        addPricePlan
    }
}