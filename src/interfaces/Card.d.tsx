export interface CardProps {
    id?: string;
    name?: string;
    slogan?: string;
    image?: string;
    href?: string;
}

export interface LocationProps {
    name: string
    address: string;
    city: string;
    image: {
        url: string;
        title: string;
        style: {
            backgroundSize: string;
        }
    },
    country: {
        name: string;
    };
}

export interface OrganizersProps {
    firstName: string;
    lastName: string;
    about: string;
    image: {
        url: string;
        title: string;
    },
}

export interface SeriesProps {
    id: number;
    name: string;
    conferences: ConferenceDetailProps[];
}

export interface ConferenceDetailProps {
    id: string;
    name: string;
    websiteUrl: string;
    slogan: string;
    startDate: string;
    endDate: string;
    locations?: LocationProps[];
    image?: string;
    organizers: OrganizersProps[];
    series?: SeriesProps[];
}
