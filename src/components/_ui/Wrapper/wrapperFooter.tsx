import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function WrapperFooter ({children}:IChildren ) {
    return (
        <footer className={`${styles.Wrapper} ${styles.WrapperFooter} `} >
            {children }
        </footer>
    )
}