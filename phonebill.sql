CREATE TABLE IF NOT EXISTS price_plan (
    id serial primary key, 
    plan_name VARCHAR(255) not null,
    sms_price VARCHAR(255) not null,
    call_price VARCHAR(255) not null
    -- ,town_tag text not null
    );

CREATE TABLE IF NOT EXISTS users(
   id serial primary key,
   username VARCHAR(255) NOT NUll,
   price_planId INT,
   FOREIGN KEY(price_planId) REFERENCES price_plan(id)
);

INSERT INTO price_plan(plan_name, sms_price, call_price) VALUES ('sms101', '0.40', '1.30'),('call102', '0.30', '1.20'),('anytime_plan', '0.50', '1.50');




