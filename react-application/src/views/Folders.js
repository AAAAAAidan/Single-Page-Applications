import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Folders() {
  const [folders, setFolders] = useState(null);
  const [selectedFolders, setSelectedFolders] = useState(null);

  const updateSearch = (searchTerms) => {
    setSelectedFolders(folders.filter((folder) => folder.name.toLowerCase().includes(searchTerms.toLowerCase())));
  }

  useEffect(() => {
    // Ideally, this would contain an API fetch
    // But for now, we'll set the folders manually
    const folders = [
      { id: 0, name: "Ace Attorney", files: ["damon.gif", "notguilty.jpg", "apolloobjection.wav"] },
      { id: 1, name: "The Silver Case", files: ["spinninginachair.mp4", "glgiscoming.jpg", "glgishere.jpg", "ohthatsphoenixwright.jpg"] },
      { id: 2, name: "Gallant Geese", files: ["goose1.jpg", "goose2.jpg", "goose3.jpg"] },
      { id: 3, name: "My Favorites", files: ["damon.gif", "spinninginachair.mp4", "goose2.jpg"] }
    ];
    setFolders(folders);
    setSelectedFolders(folders);
  }, []);

  return (
    <div>
      <Link to="/">Back to home page</Link>
      <h2>Folders</h2>
      <SearchBar updateSearch={(searchTerms) => updateSearch(searchTerms)} />
      <ul>
        {selectedFolders && selectedFolders.map((folder) => (
        <li key={folder.id}>
          <Link to={"/folders/" + folder.id}>{folder.name}</Link>
        </li>
        ))}
      </ul>
      { !selectedFolders && (
      <p>Loading folders...</p>
      )}
    </div>
  );
}

export default Folders;
