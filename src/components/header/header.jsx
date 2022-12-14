import style from './header.module.css';
import {FiUser, FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import useUser from '../../hooks/useUser';


const Header = () => {
    const { logged, setLogged } = useUser()

    return (
        <header className= {style.Wrapper}>
            <div>
                <Link to='/' className={style.Link}>
                LOGO
                </Link>
            </div>
            <div className={style.SearchWrapper}>
                <input type="text" placeholder='search' className={style.SearchBox}/>
            </div>
            <div className={style.ButtonsWrapper}>
                <Link to={!logged?"/login" : "/profile"}>
                <FiUser size={28} className={style.IconButtom} />
                </Link>
                <FiShoppingCart size={28} className={style.IconButtom} />
            </div>
        </header>
    )
}

export default Header