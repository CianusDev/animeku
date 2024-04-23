"use server"
const animeByDay = async () =>{
    const result = fetch("http://localhost:5000/").then(response => {
        // Vérifiez si la réponse est OK (200)
        if (!response.ok) {
          throw new Error('La requête a échoué');
        }
        // Parse la réponse JSON
        return response.json();
      })
      .then(data => {
        // Utilisez les données récupérées
        console.log(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
}