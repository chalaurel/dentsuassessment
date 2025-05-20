import React from 'react';

import { ButtonProps } from '@/interfaces/Button.d'
import styles from '@/styles/global.module.scss'

const ButtonComponent: React.FC<ButtonProps> = ({ type = 'default', label, onClick }) => {
    const buttonClass = type === 'primary' ? styles.primary :
        type === 'secondary' ? styles.secondary :
            styles.default;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default ButtonComponent;
