// CommonJS module format
'use strict';

// This is a compatibility layer for Netlify functions
exports.handler = async function(event, context) {
  try {
    // Dynamically import ES module handler
    const { default: esHandler } = await import('./netlify-es-handler.mjs');
    return await esHandler(event, context);
  } catch (error) {
    console.error('Error in Netlify handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
}; 