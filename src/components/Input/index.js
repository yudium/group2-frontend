import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * <Input label="Label Name" type="text" onChange={} />
 */
export default function Input({ label = 'Label Name', withoutLabel = false, ...props }) {
  return (
    <div>
      {!withoutLabel && (
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          {label}
        </label>
      )}
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        {...props}
      ></input>
    </div>
  );
}
