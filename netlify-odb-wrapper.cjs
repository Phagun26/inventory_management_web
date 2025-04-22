// CommonJS format
'use strict';

// This is a compatibility wrapper for Netlify ODB handler
exports.handler = async function(event, context) {
  try {
    // Import the Next.js handler as CommonJS
    const { handler } = require('./.next/server/edge-runtime-webpack');
    return await handler(event, context);
  } catch (error) {
    console.error('Error in Netlify ODB handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message })
    };
  }
}; 