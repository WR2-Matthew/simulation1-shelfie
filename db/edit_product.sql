update products
set product_name = $2, product_price = $3, image_url = $4
where product_id = $1;
