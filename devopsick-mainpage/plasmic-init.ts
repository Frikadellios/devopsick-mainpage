import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Stars from './components/Stars';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "aqYrHt8kYrmfd7dhqhmLnh",
      token: "dRgPzG3EuczP9Srz5p0Ys78LTRsZTAGYPe65N8sN3TC94Nf43Iz978J3AFY6YqxcPCOgbZ0uNfW9dq8fBg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(Stars, {
  name: "Stars",
  props: {
    forcePreview: "boolean",
    numStars: {
      type: "number",
      defaultValueHint: 50,
    },
    starSize: {
      type: "number",
      defaultValueHint: 0.2,
    },
    bgLightness: {
      type: "number",
      defaultValueHint: 0.06,
    },
  },
});