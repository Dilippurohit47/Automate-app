import { useEffect, useState } from "react";
import Loader from "./Loader";

const URLPreviewApp = ({ previewUrl, htmlContent }) => {
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
    <div className="w-2/4 h-full ">
      <h2 className="px-2 bg-purple-600 max-w-[10rem] rounded-md m-1">
        Preview
      </h2>
      {previewUrl && loading ? (
        <div className="w-full h-full  flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="h-full">
          <iframe
            id="url-preview-iframe"
            srcDoc={`<!DOCTYPE html>
              <html>
              <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css"> 
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-ui/5.10.15/material-ui.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@chakra-ui/react@2.2.6/dist/chakra-ui.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css">

              </head>
              <body>
                ${htmlContent}
              </body>
              </html>`}
            title="URL Preview"
            width="100%"
            height="500px"
            className="border-t-2 h-full"
          />
        </div>
      )}
    </div>
  );
};

export default URLPreviewApp;

// https://forms.fillout.com/t/9umvKHN9QFus
