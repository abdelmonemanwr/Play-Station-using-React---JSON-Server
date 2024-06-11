import React from 'react';
import { useRouteError } from 'react-router-dom';
import { NotFound } from './NotFound';

export function Error() {
  const error = useRouteError();

  console.error(error);

  if (error.status === 404) {
    return (
      <div>
        {<NotFound/>}
        <h1>Page not found</h1>
        <p>Sorry, we couldn't find that page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong</p>
      <p>Please try again later</p>
      <p>Thank you</p>
    </div>
  );
}
