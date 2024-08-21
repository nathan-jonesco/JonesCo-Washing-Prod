import axios from 'axios';

export async function GET(req) {
  const placeId = '0x84f674debd0e59a5:0xea4410c7aa10d886'; // Replace with your actual Place ID
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    if (response.data.status === 'OK') {
      return new Response(JSON.stringify(response.data), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch reviews', details: response.data }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500 }
    );
  }
}
