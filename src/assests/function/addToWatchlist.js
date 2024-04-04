// utils.js

export const addToWatchlist = (id) => {
    // Get the current watchlist from localStorage or initialize as an empty array
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  
    // Check if the coin ID is already in the watchlist
    if (!watchlist.includes(id)) {
      // Add the coin ID to the watchlist
      watchlist.push(id);
  
      // Update localStorage with the updated watchlist
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
  
      // Optionally, you can display a success message or trigger a notification here
      console.log(`Coin ${id} added to watchlist!`);
    } else {
      // Optionally, display a message or notification that the coin is already in the watchlist
      console.log(`Coin ${id} is already in the watchlist!`);
    }
  };
  