import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';

import '@recogito/annotorious/dist/annotorious.min.css';

const image = {
  filename: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/bd4a8f5f1ec47d775c51bd66793d21d2_247ae880-13f4-4400-a0fc-5c8de676d861_480x.progressive.jpg?v=1573585478',
  title: 'Nacho Poster',
  description: 'Nacho and Eskeleto sit and stand side by side.',
  user: {
    name: 'Robyn',
    title: 'professional',
    affiliation: 'UT'
  }
}

function Annotation() {

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('rect');

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current
      });

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
      });

      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // Toggles current tool + button label
  const toggleTool = () => {
    if (tool === 'rect') {
      setTool('polygon');
      anno.setDrawingTool('polygon');
    } else {
      setTool('rect');
      anno.setDrawingTool('rect');
    }
  }

  return (
    <div>
      <div>
        <button
          onClick={toggleTool}>
            { tool === 'rect' ? 'RECTANGLE' : 'POLYGON' }
        </button>
      </div>

      <img 
        ref={imgEl} 
        src={image.filename} 
        alt="Nacho Libre" />
    </div>
  );
}

export default Annotation;