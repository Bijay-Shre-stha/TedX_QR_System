import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header__container' style={{ color: `var(--tertiary)` }}>
            <div className='header__content'>
                <h1 className='heading text-5xl mt-5' style={{ color: 'var(--primary)' }}>TED<sup style={{ color: 'var(--primary)' }}>X</sup></h1>
                <span className='heading__text'>DWIT College</span>
            </div>
            <div className="button__action">
                <Link to="/update" className="button__action bg-yellow-500 hover:bg-yellow-600 text-b font-bold py-2 px-4 rounded-full">
                    Update
                </Link>
            </div>
            <div className="button__action">
                <button className="button__action bg-green-500 hover:bg-green-600 text-{`color :var(--primary)`} font-bold py-2 px-4 rounded-full">
                    Events
                </button>
            </div>
            <div className="button__action">
                <button className="button__action bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                    Subscribed Events
                </button>
            </div>
        </div>
    );
}

export default Header;
