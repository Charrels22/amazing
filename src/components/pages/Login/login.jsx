import style from './login.module.css';
import useUser from '../../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setLogged } = useUser()
    const navigate = useNavigate()

    const makeFakeLogin = () => {
        setLogged(true)
        navigate('/')
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.TitleWrapper}>
                <div className={style.Title}>
                    Login Page
                </div>
            </div>
            <div className={style.ButtomWrapper}>
            <button onClick={makeFakeLogin}>
                Login
            </button>
            </div>
        </div>
    )
}

export default Login;