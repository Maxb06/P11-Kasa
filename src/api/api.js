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

  export const fetchById = async (id) => {
    try {
      const response = await fetch(`/data.json?id=${id}`);
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }