import style from './login.module.css';
import useUser from '../../../hooks/useUser';

const Home = () => {
    const { logged, setLogged } = useUser()

    const makeFakeLogin = () => {
        setLogged(true)
        window.location.replace('/')
    }
    return (
        <div className={style.Wrapper}>
            <div className={style.TitleWrapper}>
                <div className={style.Title}>
                    Login Page
                </div>
            </div>
            <button onClick={makeFakeLogin}>
                Login
            </button>
        </div>
    )
}

export default Home;