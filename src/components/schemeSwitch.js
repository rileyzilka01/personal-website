
import styles from '../styles/scheme-switch.module.css'

export default function SchemeSwitch({ toggleClicked }) {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.circle} onClick={toggleClicked}>
                    {sun()}
                    {cloud('scale(0.85)', '5px', '45px')}
                    {cloud('scale(0.6)', '5px', '80px')}
                    {cloud('scale(1.0)', '18px', '65px')}
                    {moon()}
                    {star('scale(0.3)', '5px', '-35px')}
                    {star('scale(0.35)', '24px', '-45px')}
                    {star('scale(0.35)', '10px', '-60px')}
                    {star('scale(0.3)', '18px', '-20px')}
                </div>
            </div>
        </>
    )
}

function sun() {
    return (
        <div className={styles.sunWrapper}>
            <div className={styles.sun} />
        </div>
    )
}

function moon() {
    return (
        <div className={styles.moonWrapper}>
            <div className={styles.moon}>
                <div className={styles.moonCrater} style={{
                    'top': '0px',
                    'left': '0px',
                    'height': '10px',
                    'width': '10px'
                }}/>
                <div className={styles.moonCrater} style={{
                    'top': '10px',
                    'left': '10px',
                    'height': '8px',
                    'width': '8px'
                }}/>
                <div className={styles.moonCrater} style={{
                    'top': '20px',
                    'left': '0px',
                    'height': '14px',
                    'width': '14px'
                }}/>
                <div className={styles.moonCrater} style={{
                    'top': '20px',
                    'left': '20px',
                    'height': '6px',
                    'width': '6px'
                }}/>
                <div className={styles.moonCrater} style={{
                    'top': '2px',
                    'left': '22px',
                    'height': '14px',
                    'width': '14px'
                }}/>
            </div>
        </div>
    )
}

function cloud(scale, top, left) {
    return (
        <div className={styles.cloudWrapper} style={{
            'transform': scale,
            'top': top,
            'left': left,
        }}>
            <div className={styles.cloud} style={{
                'top': '0',
                'left': '8px',
                'width': '12px',
                'height': '12px',
            }}/>
            <div className={styles.cloud} style={{
                'top': '4px',
                'left': '0',
                'width': '16px',
                'height': '16px',
            }}/>
            <div className={styles.cloud} style={{
                'top': '4px',
                'left': '16px',
                'width': '14px',
                'height': '14px',
            }}/>
            <div className={styles.cloud} style={{
                'top': '6px',
                'left': '8px',
                'width': '16px',
                'height': '16px',
            }}/>
        </div>
    )
}

function star(scale, top, left) {

    return (
        <div className={styles.starWrapper} style={{
            'transform': scale,
            'top': top,
            'left': left,
        }}>
            <div className={styles.star}/> 
        </div>
    )
}
