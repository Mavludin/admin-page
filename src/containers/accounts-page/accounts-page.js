import React from 'react';
import './accounts-page.css';

class AccountsPage extends React.Component {

    name = React.createRef();
    email = React.createRef();
    password = React.createRef();
    rePassword = React.createRef();
    phone = React.createRef();
    selectingRole = React.createRef();

    state = {
        currentRole: 'Admin',
        currentValues: {},
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
        avatar: ''
    }

    onHandleElements = () => {

        this.setState({
            // name: this.name.current.value,
            // email: this.email.current.value,
            // password: this.password.current.value,
            // phone: this.phone.current.value,
            // currentRole: this.selectingRole.current.selectedOptions[0].label,
        })

    }

    onUploadFile = (e) => {
        this.setState({
            avatar: e.target.value
        });
    }

    onUpdateProfile = () => {

        let wholeStorage = JSON.parse(localStorage[('adminData')]);
        let updatedAccount = wholeStorage.accountsPage[this.state.currentRole];

        const obj = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password,
            phone: this.state.phone,
            profilePic: this.state.avatar
        }

        updatedAccount = obj;
        wholeStorage.accountsPage[this.state.currentRole] = updatedAccount;

        localStorage.setItem('adminData', JSON.stringify(wholeStorage));

    }

    componentDidMount() {
        const data = JSON.parse(localStorage[('adminData')]).accountsPage;

        const renderingData = data[this.state.currentRole];

        this.setState({
            name: renderingData.name,
            email: renderingData.email,
            password: renderingData.password,
            phone: renderingData.phone,
            avatar: renderingData.profilePic
        })

    }

    onSelectOption = () => {

        const data = JSON.parse(localStorage[('adminData')]).accountsPage;

        const renderingData = data[this.selectingRole.current.selectedOptions[0].label];

        this.setState({
            name: renderingData.name,
            email: renderingData.email,
            password: renderingData.password,
            phone: renderingData.phone,
            avatar: renderingData.profilePic
        })

    }

    render() {

        return (
            <div className="accounts-page container mt-5">
                <div className="accounts-content">
                    <h2 class="tm-block-title">List of Accounts</h2>
                    <p class="text-white">Accounts</p>
                    <select ref={this.selectingRole} onChange={this.onSelectOption} class="custom-select">
                        <option value="0">Select account</option>
                        <option value="1">Admin</option>
                        <option value="2">Customer</option>
                        <option value="3">Editor</option>
                        <option value="4">Merchant</option>
                    </select>
                </div>

                <div class="row tm-content-row">
                    <div class="tm-block-col tm-col-avatar">
                        <div class="tm-bg-primary-dark tm-block tm-block-avatar">
                            <h2 class="tm-block-title">Change Avatar</h2>
                            <div class="tm-avatar-container">
                                {/* <img src={this.state.avatar} alt="Avatar" class="tm-avatar img-fluid mb-4" /> */}
                                <img src="file://c:/123.jpg" alt="Avatar" class="tm-avatar img-fluid mb-4" />
                                
                                <a href="#" class="tm-avatar-delete-link">
                                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                                </a>
                            </div>
                            <button onClick={()=>this.avatar.click()} class="btn btn-primary btn-block text-uppercase">
                                Upload New Photo
                            </button>
                            <input onChange={(e)=>{this.onUploadFile(e)}} accept=".jpg, .png, .bmp, .svg, .webp" ref={input => this.avatar = input} className="fileInput" type="file" style={{display: 'none'}} />
                        </div>
                    </div>
                    <div class="tm-block-col tm-col-account-settings">
                        <div class="tm-bg-primary-dark tm-block tm-block-settings">
                        <h2 class="tm-block-title">Account Settings</h2>
                            <form onSubmit={(e)=>e.preventDefault()} action="" class="tm-signup-form row">
                                <div class="form-group col-lg-6">
                                <label for="name">Account Name</label>
                                <input ref={this.name} onChange={this.onHandleElements} value={this.state.name} id="name" name="name" type="text" class="form-control validate" />
                                </div>
                                <div class="form-group col-lg-6">
                                <label for="email">Account Email</label>
                                <input ref={this.email} onChange={this.onHandleElements} value={this.state.email} id="email" name="email" type="email" class="form-control validate" />
                                </div>
                                <div class="form-group col-lg-6">
                                <label for="password">Password</label>
                                <input ref={this.password} onChange={this.onHandleElements} value={this.state.password} id="password" name="password" type="password" class="form-control validate" />
                                </div>
                                <div class="form-group col-lg-6">
                                <label for="password2">Re-enter Password</label>
                                <input ref={this.rePassword} onChange={this.onHandleElements} id="password2" name="password2" type="password" class="form-control validate" />
                                </div>
                                <div class="form-group col-lg-6">
                                <label for="phone">Phone</label>
                                <input ref={this.phone} onChange={this.onHandleElements} value={this.state.phone} id="phone" name="phone" type="tel" class="form-control validate" />
                                </div>
                                <div class="form-group col-lg-6">
                                <label class="tm-hide-sm">&nbsp;</label>
                                <button onClick={this.onUpdateProfile} type="submit" class="btn btn-primary btn-block text-uppercase">
                                    Update Your Profile
                                </button>
                                </div>
                                <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block text-uppercase">
                                    Delete Your Account
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AccountsPage;