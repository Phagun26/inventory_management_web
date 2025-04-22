// This file uses CommonJS module format
module.exports = {
  handler: async function(event, context) {
    // This is a simple passthrough handler that avoids the ES module error
    const { builder } = await import('@netlify/functions');
    const { handler: origHandler } = await import('../../.next/server/app/api/auth/login/route.js');
    return builder(origHandler)(event, context);
  }
}; 