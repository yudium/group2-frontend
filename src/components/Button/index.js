import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Button({ label = 'Label Name', ...props }) {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
      {...props}
    >
      {label}
    </button>
  );
}
