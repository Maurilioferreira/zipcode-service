import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import App from './App';
import { GET_ZIPCODE } from "./App"

test('renders without error', async () => {
  const mocks: any = [
    {
      request: {
        query: GET_ZIPCODE,
      },
      result: {
        data: {
          lastFiveSearches: [
            {
            id: "1",
            country: "United States",
            countryAbbreviation: "US",
            zip: "35004",
            places: "[{\"place name\":\"Moody\",\"longitude\":\"-86.4668\",\"state\":\"Alabama\",\"state abbreviation\":\"AL\",\"latitude\":\"33.6035\"}]"
          }
        ]
      }
    }
  }
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("Last five searches")).toBeInTheDocument();
});
