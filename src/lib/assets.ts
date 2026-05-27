const base = import.meta.env.BASE_URL;

export const PLACEHOLDER_IMAGE = `${base}placeholder.svg`;

export const AWARD_IMAGES = {
  britishCouncil: `${base}awards/british-council.jpg`,
  powerToPixel: `${base}awards/power-pixel.png`,
  sunnySide: `${base}awards/sunny-side.jpg`,
  premioTal: `${base}awards/premio-tal.jpg`,
  goldenTicket: `${base}awards/golden-ticket.jpeg`,
  rioCriativo: `${base}awards/rio-criativo.jpg`,
  premioTelaViva: `${base}awards/premio-tela-viva.jpg`,
} as const;
