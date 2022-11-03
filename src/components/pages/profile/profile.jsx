import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import style from './profile.module.css';



const Profile = () => {
    const { setLogged } = useUser()

    const navigate = useNavigate()


    return <div className={style.Wrapper}>
                <div className={style.Title}>
                    Profile
                </div>
                <div className={style.ButtomWrapper}>
                    <button onClick={()=>{
                        setLogged(false)
                        navigate('/')
                    }}>
                        Logout
                    </button>
                </div>
            </div>
}

export default Profile;