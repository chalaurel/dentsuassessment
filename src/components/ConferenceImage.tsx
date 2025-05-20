import React, { useState } from 'react';
import Image from 'next/image';
import { LocationProps } from '@/interfaces/Card.d';
import styles from '@/styles/global.module.scss';

interface ConferenceImageProps {
    locations?: LocationProps[];
    conferenceName: string;
    fallbackImagePath?: string;
}

const ConferenceImage: React.FC<ConferenceImageProps> = ({
    locations,
    conferenceName,
    fallbackImagePath = 'https://picsum.photos/800/400'
}) => {
    // Check if locations exist and have image data
    const hasValidImage =
        locations &&
        locations.length > 0 &&
        locations[0].image &&
        locations[0].image.url;


    if (!hasValidImage) {
        // Use fallback image (default is a remote placeholder)
        return (
            <div className={styles.image}>
                <Image
                    src={fallbackImagePath}
                    alt={`${conferenceName} placeholder`}
                    fill
                    onError={() => {
                        console.warn('Failed to load fallback image');
                    }}
                />
            </div>
        );
    }

    return (
        <div className={styles.image}>
            <Image
                src={locations[0].image.url}
                alt={locations[0].image.title || conferenceName}
                fill
                onError={() => {
                    console.warn('Failed to load fallback image');
                }}
            />
        </div>
    );
};

export default ConferenceImage;
