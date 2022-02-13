import s from './Header.module.css';
import LoginBlock from "./LoginBlock/LoginBlock";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                <h1 className={s.title}>ABOBA</h1>
            </div>
            <LoginBlock className={s.loginBlock} {...props} />
        </header>
    );
}

export default Header;
