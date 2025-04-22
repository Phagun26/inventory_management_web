// ES module format
export default async function handler(event, context) {
  // Your handler logic here
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' })
  };
} 