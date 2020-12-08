export const getFont = (font: string = "Regular") => `
    @font-face {
        src: url('/fonts/Roboto/Roboto-${font}.ttf');
        font-family: Roboto-${font};
    }

    font-family: Roboto-${font};

`;

export const flexbox = (
  dir: string = "row",
  jus: string = "center",
  alig: string = "center"
) => `
    display:flex;
    flex-direction: ${dir};
    align-items:${alig};
    justify-content: ${jus};
`;
