import { useQuery } from "@apollo/client";
import { GET_CONFERENCE_DETAILS } from "./queries";
import { ConferenceDetailProps } from "@/interfaces/Card.d";

export function useConferenceDetails(id: string) {
    const { loading, error, data } = useQuery(GET_CONFERENCE_DETAILS, {
        variables: { id },
        skip: !id,
    });

    return {
        loading,
        error,
        conference: data?.conference as ConferenceDetailProps || null,
    };
}
