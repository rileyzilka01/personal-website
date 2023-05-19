
import styles from '../styles/scheme-switch.module.css'

export default function SchemeSwitch({ toggleClicked }) {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.circle} onClick={toggleClicked}>

                </div>
            </div>
        </>
    )
}
