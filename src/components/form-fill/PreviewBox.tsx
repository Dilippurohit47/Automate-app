import { useEffect, useState } from "react";
import Loader from "./Loader";

const URLPreviewApp = ({ previewUrl }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (previewUrl) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [previewUrl]);

  return (
    <div className="w-2/4 h-full">
      <h2>Preview</h2>
      {previewUrl && loading ? (
        <div className="w-full h-full  flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="h-full">
          <iframe
            id="url-preview-iframe"
            src={previewUrl}
            title="URL Preview"
            width="100%"
            height="500px"
            className="border-t-2"
          />
        </div>
      )}
    </div>
  );
};

export default URLPreviewApp;

// https://forms.fillout.com/t/9umvKHN9QFus
