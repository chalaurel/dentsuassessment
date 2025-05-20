import React from 'react';
import { CardProps } from '../interfaces/Card.d';
import styles from '@/styles/global.module.scss';
import ButtonComponent from './ButtonComponent';
import { useRouter } from 'next/navigation';
import ConferenceImage from '@/components/ConferenceImage';

const CardComponent: React.FC<CardProps> = ({ id, name, slogan, locations }) => {
    const router = useRouter();

    const handleDetailsClick = () => {
        if (id) {
            console.log('Navigating to conference:', id);
            router.push(`/conference/${id}`);
        } else {
            console.error('No conference ID provided');
        }
    };

    return (
        <div className={`${styles.container}, ${styles.card}, ${styles.mainList}`}>
            <div className={styles.m20}>
                <ConferenceImage
                    locations={locations}
                    conferenceName={name}
                />
            </div>
            <h2 className={styles.cardtitle}>{name}</h2>
            <div>

            </div>

            <p className="text-gray-600 mb-4">{slogan}</p>
            <div className="mt-4 flex justify-end">
                <ButtonComponent
                    type="primary"
                    label="Details"
                    onClick={handleDetailsClick}
                />
            </div>
        </div>
    );
};
export default CardComponent;
