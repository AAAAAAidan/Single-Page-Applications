import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FilePopup from "../components/FilePopup";
import SearchBar from "../components/SearchBar";
import "./Folder.css";

function Folder() {
  const [files, setFiles] = useState(null);
  const [filePopup, setFilePopup] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const folderId = useParams().id;

  const updateSearch = (searchTerms) => {
    setSelectedFiles(files.filter((file) => file.toLowerCase().includes(searchTerms.toLowerCase())));
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
    setFiles(folders[folderId].files);
    setSelectedFiles(folders[folderId].files);
  }, [folderId]);

  return (
    <div>
      <Link to="/folders">Back to folders</Link>
      <h2>Files</h2>
      <SearchBar updateSearch={(searchTerms) => updateSearch(searchTerms)} />
      <ul>
        { selectedFiles && selectedFiles.map((file) => (
        <li key={file}>
          <button onClick={() => setFilePopup(file)} className="link-style-button">{file}</button>
        </li>
        ))}
      </ul>
      { !selectedFiles && (
      <p>Loading files...</p>
      )}
      { filePopup && (
      <div>
        <FilePopup filename={filePopup} closeFile={() => setFilePopup(null)} />
      </div>
      )}
    </div>
  );
}

export default Folder;
