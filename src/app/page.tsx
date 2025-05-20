"use client";

import { useQuery } from "@apollo/client";
import CardComponent from "@/components/CardComponent";
import { GET_CONFERENCES } from "@/graphql/queries";
import styles from '@/styles/global.module.scss';
import { ConferenceDetailProps } from '@/interfaces/Card.d';


interface QueryData {
  conferences: ConferenceDetailProps[];
}

export default function Home() {
  const { loading, error, data } = useQuery<QueryData>(GET_CONFERENCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.m20}>
      <h1>Conferences</h1>
      <div className={`${styles.container}, ${styles.flexcontainer}`}>
        {data?.conferences.map((conference) => (
          <CardComponent
            key={conference.id}
            id={conference.id}
            name={conference.name}
            slogan={conference.slogan}
            locations={conference.locations}
          />
        ))}
      </div>
    </div >
  );
}
