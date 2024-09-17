/**
 * Fetches data from /data.json and returns the parsed JSON response.
 *
 * If the request fails or the response is not ok, an error is thrown.
 *
 * If the error is caught, it is logged to the console and an empty
 * array is returned.
 *
 * @returns {Promise<any[]>} The parsed JSON response, or an empty array if there is an error.
 */
export const fetchData = async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
