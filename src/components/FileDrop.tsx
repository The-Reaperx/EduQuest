import { FileUploadDropZone } from "@trimbleinc/modus-react-bootstrap";
import { useState } from "react";

function FileDrop() {
  const [filesUploaded, setFilesUploaded] = useState(null);

  return (
    <div>
      <h3 className="display-3">Upload Files</h3>
      <h4>Max: 3 files (5 MB total)</h4>
      <h5>Supported file types are pdf and images.</h5>
      <FileUploadDropZone
        theme={theme}
        id="test1"
        maxFileCount={3}
        maxTotalFileSizeBytes={5242880}
        accept=".pdf,image/*"
        onFiles={(files, err) => {
          if (!err) setFilesUploaded(files);
          else setFilesUploaded(null);
        }}
        style={{ maxWidth: "400px", height: "200px" }}
      ></FileUploadDropZone>
      {filesUploaded && (
        <>
          <h4 className="mt-5">Files uploaded:</h4>
          <ul className="list-group list-group-borderless">
            {Array.from(filesUploaded).map((file, index) => (
              <li
                className="list-group-item list-item-left-control"
                key={index}
              >
                <i className="modus-icons">check_circle</i>
                <span>{file.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default FileDrop;
