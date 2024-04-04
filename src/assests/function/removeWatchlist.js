import { toast } from "react-toastify";

export const removeFromWatchlist = (id) => {
  if (window.confirm("Are you sure you want to remove this coin?")) {
    let items = localStorage.getItem("watchlist");
    let arr = JSON.parse(items || "[]"); // Default to an empty array if localStorage is empty or null

    localStorage.setItem(
      "watchlist",
      JSON.stringify(arr.filter((item) => item !== id))
    );

    toast.success(`${id.charAt(0).toUpperCase() + id.slice(1)} removed from the watchlist!`);
  } else {
    toast.error("Could not remove coin from the watchlist");
  }
};
