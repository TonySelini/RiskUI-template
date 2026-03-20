import { renderToStaticMarkup } from "react-dom/server";

// Function to convert MUI Icon to a DOM Element
export const createSvgIconElement = (icon: React.ReactNode, color: string) => {
  const svgString = renderToStaticMarkup(icon); // Convert JSX to SVG string
  const imgElement = document.createElement("span"); // Create a span element
  imgElement.innerHTML = svgString; // Set the inner HTML
  imgElement.style.color = color;
  return imgElement; // Return the element for Ag-Grid
};
