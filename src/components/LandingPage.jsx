import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useParams } from 'react-router-dom';

const LandingPage=()=>{
    const { name, year, url } = useParams();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <>
     <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center md:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
           {name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
          {year}
          </p>
        </div>
      </div>
    </section>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js">
    <div
    style={{
        border: '5px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
        padding: '30px 100px'
    }}
>
    <Viewer plugins={[defaultLayoutPluginInstance]} fileUrl={url} />
</div>
    </Worker>
    </>
    )
}

export default LandingPage;