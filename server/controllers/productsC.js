const serviceProduct = require('../services/productsS');

exports.addProducts = async (req, res) => {
    const { product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category } = req.body;
    try {
        const result = await serviceProduct.addProducts(product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category);
        res.status(200).send(result);
    } catch (err) {
        res.status(err.status || 500).send(err);
    }
};

exports.updateProducts = async (req, res) => {
    const { product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category} = req.body;

    try {
        const result = await serviceProduct.updateProducts(product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};


exports.deleteProducts = async (req, res) => {
    const { product_id } = req.params.product_id;

    try {
        const result = await serviceProduct.deleteProducts(product_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};

exports.addProductCategory = async (req, res) => {
    const { category_name, category_description } = req.body;
    try {
        const result = await serviceProduct.addProductCategory(category_name, category_description);
        res.status(200).send(result);
    } catch (err) {
        res.status(err.status || 500).send(err);
    }
};

exports.updateProductCategory = async (req, res) => {
    const { category_name, category_description } = req.body;

    try {
        const result = await serviceProduct.updateProductCategory(category_name, category_description);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};


exports.deleteProductCategory = async (req, res) => {
    const { category_id } = req.params.category_id;

    try {
        const result = await serviceProduct.deleteProducts(category_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};


exports.updateProductInventory = async (req, res) => {
    const { quantity } = req.body;

    try {
        const result = await serviceProduct.updateProductInventory(quantity);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};

exports.view = async (req, res) => {
    try {
        const result = await serviceProduct.view();
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};

exports.viewCategories = async (req, res) => {
    try {
        const result = await serviceProduct.viewCategories();
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};

exports.viewByCategory = async (req, res) => {
    const category_id  = req.params.category_id;
    try {
        const result = await serviceProduct.viewByCategory(category_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};

exports.viewSpecificProduct = async (req, res) => {
    const product_id  = req.params.product_id;
    try {
        const result = await serviceProduct.viewSpecificProduct(product_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
};
viewSpecificProduct

exports.viewRecommendation = async (req, res) => {
    const uid = req.params.uid;
    try {
        const result = await serviceProduct.viewRecommendation(uid);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status || 500).send(error);
    }
}; 

exports.viewedProducts = async (req, res) => {
    const { uid, product_id } = req.body;

    try {
        const result = await serviceProduct.viewedProducts(uid, product_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(error.status).send(error);
    }
};