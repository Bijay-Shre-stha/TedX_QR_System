import './Update.css'

const Update = () => {

    return (
        <div className="content__container">
            <div className="login__container">
                <form>
                <div className="input__container">
                        <label className='label' htmlFor="uuid">UUID</label>
                        <input className='input__info' type="text" id="uuid" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="firstName">First name</label>
                        <input className='input__info' type="text" id="firstName" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="lastName">Last name</label>
                        <input className='input__info' type="text" id="LastName" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="email">Email</label>
                        <input className='input__info' type="email" id="email" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="phone">Phone</label>
                        <input className='input__info' type="number" id="phone" />
                    </div>
                    <div className="input__container">
                        <label className='label' htmlFor="Address">Address</label>
                        <input className='input__info' type="text" id="address" />
                    </div>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
