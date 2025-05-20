"use client";

import styles from '@/styles/global.module.scss';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useConferenceDetails } from "@/graphql/hooks";
import ConferenceImage from '@/components/ConferenceImage';
import SeriesComponent from '@/components/SeriesComponent';

export default function ConferenceDetail() {
    const params = useParams();
    const id = params.id as string;

    console.log('Conference ID:', id);

    const { loading, error, conference } = useConferenceDetails(id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!conference) return <p>Conference not found</p>;
    return (

        <>
            <Link href="/" className={`${styles.mt20}`}>
                &larr; Back to Conferences
            </Link>
            <div className={`${styles.detailPageLayout}`}>

                <div>
                    <ConferenceImage
                        locations={conference.locations}
                        conferenceName={conference.name}
                    />
                </div>
                <div className={`${styles.mt20}, ${styles.card}`}>

                    {/* Event Details */}
                    <div className={`${styles.card}`}>
                        <div className={`${styles.details}`}>
                            <h3>Event Details</h3>
                            <div className={`${styles.title}`}>
                                {conference.name}
                            </div>
                            <p> {new Date(conference.startDate).toLocaleDateString('en-US', { year: "numeric", month: 'long', day: 'numeric' })} - {new Date(conference.endDate).toLocaleDateString('en-US', { year: "numeric", month: 'long', day: 'numeric' })}</p>
                            <div className={`${styles.location}`}>
                                {conference.locations && conference.locations.length > 0 ? (
                                    <p>{conference.locations[0].name}, {conference.locations[0].city},  {conference.locations[0].country.name}</p>
                                ) : (
                                    <p>Location not available</p>
                                )}
                            </div>
                            <p className={`${styles.slogan}`}>&quot;{conference.slogan}&quot;</p>
                            <Link href={conference.websiteUrl} className={`${styles.mt20}`}>
                                {conference.websiteUrl}
                            </Link>
                        </div>
                    </div>



                    {/* Organizers Details */}
                    <div className={`${styles.card}`}>
                        <div className={`${styles.details}`}>
                            <h3>Organizers Details</h3>
                            <div className={`${styles.title}`}>
                                {conference.organizers[0].firstName}
                                {conference.organizers[0].lastName}
                            </div>
                            <p className={`${styles.about}`}> {conference.organizers[0].about}</p>
                        </div>
                    </div>

                    {/* Series Details */}
                    <div className={`${styles.card}`}>
                        <div className={`${styles.details}`}>
                            <h3>Series Details</h3>
                            <SeriesComponent
                                key={conference.series?.id}
                                id={conference.series?.id}
                                name={conference.series?.name}
                                conferences={conference.series?.conferences}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
