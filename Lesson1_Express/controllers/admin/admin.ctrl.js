exports.get_products = ( _ , res ) => {
    res.render( 'admin/products.html', { message : 'Hello'} );
}

exports.get_products_write = ( _ , res ) => {
    res.render( 'admin/write.html' );
}

exports.post_products_write = ( _ , res ) => {
    res.send(req.body);
}