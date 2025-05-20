import { gql } from '@apollo/client';

export const GET_CONFERENCES = gql`
  query GetConferences {
    conferences {
      id
      name
      slogan
      locations {
        image{
            url
            title
            style {
              backgroundSize
            }
          }
        name
        address
        city
        country {
          name
        }
      }
    }
  }
`;

export const GET_CONFERENCE_DETAILS = gql`
  query GetConferenceDetails($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      startDate
      endDate
      name
      websiteUrl
      organizers{
        firstName
        lastName
        about
        image{
          url
          title
        }
      }
      series {
        id
        name
        conferences {
          name
          organizer {
            firstName
            lastName
          }
          year
          startDate
          endDate
          slogan
          websiteUrl
        }
      }
      locations {
        image{
            url
            title
            style {
              backgroundSize
            }
          }
        name
        address
        city
        country {
          name
        }
      }
    }
  }
`;
