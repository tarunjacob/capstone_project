const repositoryProduct = require('../repositories/productsR');

exports.addProducts = (product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category) => {
    return new Promise(async (res, rej) => {
        
        if(!product_name || !product_price || !product_inventory || !product_category){
            let err = new Error(400);
            err.status = 400;
            err.response = "One or more fields missing";
            return rej(err)
        }
        try {
            await repositoryProduct.checkProductCategory(product_category);
            // await repositoryProduct.checkProductInventory(product_inventory);
            const product_id = await repositoryProduct.addProducts(product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category);
            res(product_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.updateProducts = (product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category) => {
    return new Promise(async (res, rej) => {

        try {
            const product_id = await repositoryProduct.updateProducts(product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category);
            res(product_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.deleteProducts = (product_id) => {
    return new Promise(async (res, rej) => {
        try {
            const product_id = await repositoryProduct.deleteProducts(product_name, product_description, product_price, product_image, product_barcode, product_inventory, product_category);
            res(product_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.addProductCategory = (category_name, category_description) => {
    return new Promise(async (res, rej) => {
        
        if(!category_name){
            let err = new Error(400);
            err.status = 400;
            err.response = "One or more fields missing";
            return rej(err)
        }
        try {
            const category_id = await repositoryProduct.addProductCategory(category_name, category_description);
            res(category_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.updateProductCategory = (category_name, category_description) => {
    return new Promise(async (res, rej) => {

        try {
            const category_id = await repositoryProduct.updateProductCategory(category_name, category_description);
            res(category_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.deleteProductCategory = (category_id) => {
    return new Promise(async (res, rej) => {
        try {
            const category_id = await repositoryProduct.deleteProducts(category_id);
            res(category_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.updateProductInventory = (quantity) => {
    return new Promise(async (res, rej) => {

        try {
            const inventory_id = await repositoryProduct.updateProductInventory(quantity);
            res(inventory_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.view = () => {
    return new Promise(async (res, rej) => {
        try {
            res(repositoryProduct.view());
        } catch (error) {
            return rej(error);
        }
    })
}

exports.viewCategories = () => {
    return new Promise(async (res, rej) => {
        try {
            res(repositoryProduct.viewCategories());
        } catch (error) {
            return rej(error);
        }
    })
}

exports.viewByCategory = (category_id) => {
    return new Promise(async (res, rej) => {
        try {
            const categorys_id = await repositoryProduct.viewByCategory(category_id);
            res(categorys_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.viewRecommendation = (uid) => {
    return new Promise(async (res, rej) => {
        try {
            const view_id = await repositoryProduct.viewRecommendation(uid);
            res(view_id);
        } catch (error) {
            return rej(error);
        }
    })
}

exports.viewedProducts = (uid, product_id) => {
    return new Promise(async (res, rej) => {

        try {
            const view_id = await view_repositoryProduct.viewedProducts(uid, product_id);
            res(view_id);
        } catch (error) {
            return rej(error);
        }
    })
}