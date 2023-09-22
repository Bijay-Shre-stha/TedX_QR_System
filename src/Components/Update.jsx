import './Update.css';
import { useNavigate  } from 'react-router-dom'; 

const Update = () => {
    const navigate = useNavigate (); // Initialize the useHistory hook

    const handleUpdate = (e) => {
        e.preventDefault();
        const uuid = document.getElementById('uuid').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        const data = {
            uuid,
            firstName,
            lastName,
            email,
            phone,
            address
        };

        console.log(data);

        navigate('/');
    };

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
                        <input className='input__info' type="text" id="lastName" /> 
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
                        <label className='label' htmlFor="address">Address</label>
                        <input className='input__info' type="text" id="address" />
                    </div>
                    <button onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update
