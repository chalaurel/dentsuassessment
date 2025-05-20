import react from 'react';
import styles from '@/styles/global.module.scss';
import { ConferenceDetailProps } from '@/interfaces/Card.d'

const ConferenceComponent: React.FC<ConferenceDetailProps> = ({ id, name, websiteUrl, slogan, startDate, endDate, image, organizers }) => {

    return (
        <>
            <div className={`${styles.card}`}>
                <div>{id} </div>
                <div>{name}</div>
                <div>{slogan}</div>
                <div>{startDate}</div>
                <div>{endDate}</div>
                {/* {locations} */}
                {/* {image} */}
                <div>{organizers}</div>
                <div>{websiteUrl}</div>
            </div>
        </>
    )
}

export default ConferenceComponent;