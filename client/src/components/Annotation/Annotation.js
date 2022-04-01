import { useEffect, useRef, useState } from "react";
import { Annotorious } from "@recogito/annotorious";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ARTIFACT } from "../../utils/queries";
import "@recogito/annotorious/dist/annotorious.min.css";
import React from "react";

function Annotation() {
  // This pulls single artifact via params and query hooks...code is probably not quite right yet!
  const { imageID } = useParams();
  const { data } = useQuery(QUERY_ARTIFACT, {
    // pass URL parameter
    variables: { imageID: imageID },
  });
  const imageData = data?.image || {};
  console.log(imageData);

  const image = {
    filename: `/images/${imageData.filename}`,
    title: `${imageData.title}`,
    description: `${imageData.description}`,
  };

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [anno, setAnno] = useState();

  // Current drawing tool name
  const [tool, setTool] = useState("rect");

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current,
      });

      // Attach event handlers here
      annotorious.on("createAnnotation", (annotation) => {
        console.log("created", annotation);
      });

      annotorious.on("updateAnnotation", (annotation, previous) => {
        console.log("updated", annotation, previous);
      });

      annotorious.on("deleteAnnotation", (annotation) => {
        console.log("deleted", annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // Toggles current tool + button label
  const toggleTool = () => {
    if (tool === "rect") {
      setTool("polygon");
      anno.setDrawingTool("polygon");
    } else {
      setTool("rect");
      anno.setDrawingTool("rect");
    }
  };

  return (
    <div>
      <div>
        <button onClick={toggleTool}>
          {tool === "rect" ? "RECTANGLE" : "POLYGON"}
        </button>
      </div>

      <img ref={imgEl} src={image.filename} alt="Nacho Libre" />
    </div>
  );
}

export default Annotation;
