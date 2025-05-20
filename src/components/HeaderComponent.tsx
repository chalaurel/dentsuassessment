import React from "react";
import styles from '@/styles/global.module.scss';

const HeaderComponent = () => {
    return (
        <header className={styles.container}>
            <div>
                <h1>Welcome to My App</h1>
            </div>
        </header>
    );
};
export default HeaderComponent;