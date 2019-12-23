import React from 'react';
import './add-product.css';

class AddProductPage extends React.Component {

    imageInput = React.createRef();
    productName = React.createRef();
    description = React.createRef();
    expireDate = React.createRef();
    stockUnits = React.createRef();

    state = {
        productName: '',
        description: '',
        expireDate: '',
        stockUnits: 0
    }

    onHandleElements = () => {
        this.setState({
            productName: this.productName.current.value,
            description: this.description.current.value,
            expireDate: this.expireDate.current.value,
            stockUnits: this.stockUnits.current.value
        })
    }

    onImageInput = () => {
        this.imageInput.click();
    }

    onUploadFile = (e) => {
        const fileSize = Math.round((e.target.files[0].size/1024));

        if (fileSize > 1024)  {
            alert('The file size can\'t be more than 1 MB');
            return false;
        }
    }

    onAddNewProduct = () => {

        let wholeStorage = JSON.parse(localStorage[('adminData')]);
        const updatedProductList = wholeStorage.productsPage.products;

        const obj = {
            unitSold: 5,
            name: this.state.productName,
            stock: this.state.stockUnits,
            expireDate: this.state.expireDate
        }

        updatedProductList.push(obj);
        wholeStorage.productsPage.products = updatedProductList;

        localStorage.setItem('adminData', JSON.stringify(wholeStorage));

        this.props.history.push('/products');

    }

    render() {
        return (
            <div className="add-product-page mt-5">
                <h2 className="tm-block-title d-inline-block">Add Product</h2>
                
                <div className='add-product-blocks'>

                    <form action="" className="tm-edit-product-form">
                        <div className="form-group mb-3">
                            <label htmlFor="name">Product Name</label>
                            <input ref={this.productName} onChange={this.onHandleElements} name="name" type="text" className="form-control validate name" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea ref={this.description} onChange={this.onHandleElements} className="form-control validate" rows="3" required></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="category">Category</label>
                            <select className="custom-select tm-select-accounts category" >
                                <option defaultValue="">Select category</option>
                                <option value="1">New Arrival</option>
                                <option value="2">Most Popular</option>
                                <option value="3">Trending</option>
                            </select>
                        </div>
                        <div className="expire-stock">
                            <div className="form-group mb-3 col-xs-12 col-sm-6 expire">
                                <label htmlFor="expire_date">Expire Date
                                </label>
                                <input ref={this.expireDate} onChange={this.onHandleElements} name="expire_date" type="date" className="expire_date form-control validate hasDatepicker" />
                            </div>
                            <div className="form-group mb-3 col-xs-12 col-sm-6 stock">
                                <label htmlFor="stock">Units In Stock</label>
                                <input ref={this.stockUnits} onChange={this.onHandleElements} name="stock" type="text" className="form-control validate stock" required />
                            </div>
                        </div>
                    
                    </form>

                    <div className="upload-image">
                        <div className="tm-product-img-dummy mx-auto">
                            <i className="fas fa-cloud-upload-alt tm-upload-icon" onClick={this.onImageInput}></i>
                        </div>
                        <div className="custom-file mt-3 mb-3">
                            <input onChange={(e)=>{this.onUploadFile(e)}} accept=".jpg, .png, .bmp, .svg, .webp" ref={input => this.imageInput = input} className="fileInput" type="file" style={{display: 'none'}} />
                            <input type="button" className="btn btn-primary btn-block mx-auto" defaultValue="UPLOAD PRODUCT IMAGE" onClick={this.onImageInput} />
                        </div>
                    </div>

                </div>
                <button onClick={this.onAddNewProduct} type="submit" class="btn btn-primary btn-block text-uppercase">Add Product Now</button>
            </div>
        )
    }
}

export default AddProductPage;