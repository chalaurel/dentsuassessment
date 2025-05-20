import React from 'react';
import styles from '@/styles/global.module.scss';
import { SeriesProps } from '@/interfaces/Card.d';
import ConferenceComponent from '@/components/ConferenceComponent';

const SeriesComponent: React.FC<SeriesProps> = ({ id, name, conferences }) => {

    return (
        <>
            <div className={`${styles.title}`}>
                {name}
            </div>
            <div>
                {/* {JSON.stringify(conferences)} */}
                {conferences.map((conf) => (
                    <ConferenceComponent
                        key={conf.id}
                        id={conf.id}
                        name={conf.name}
                        websiteUrl={conf.websiteUrl}
                        slogan={conf.slogan}
                        startDate={conf.startDate}
                        endDate={conf.endDate}
                        organizers={conf.organizers}
                    />
                ))}
            </div>

        </>
    )
}

export default SeriesComponent;