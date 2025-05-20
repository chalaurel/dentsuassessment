import React from 'react';
import { CardProps } from '../interfaces/Card.d';
import styles from '@/styles/global.module.scss';
import ButtonComponent from './ButtonComponent';
import { useRouter } from 'next/navigation';
import ConferenceImage from '@/components/ConferenceImage';

const CardComponent: React.FC<CardProps> = ({ id, name, slogan, locations, endDate, startDate }) => {
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
            <p> {new Date(startDate).toLocaleDateString('en-US', { year: "numeric", month: 'long', day: 'numeric' })} - {new Date(endDate).toLocaleDateString('en-US', { year: "numeric", month: 'long', day: 'numeric' })}</p>
            <p className="">
                {locations && locations.length > 0 ? (
                    <p>{locations[0].name}, {locations[0].city},  {locations[0].country.name}</p>
                ) : (
                    <p>Location not available</p>
                )}
            </p>
            <p className={`${styles.italic}`}>{slogan}</p>

            <div className="">
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
