interface Sticker {
  name: string;
  side: 'top' | 'bottom' | 'left' | 'right';
  width: [number, number];
  offset: [number, number];
  position: [number, number];
}

export const HERO_STICKERS: Sticker[] = [
  {
    name: 'lerochka',
    side: 'top',
    width: [214, 180],
    offset: [40, 30],
    position: [0, 0],
  },
  {
    name: 'cypa',
    side: 'top',
    width: [69, 57],
    offset: [35, 30],
    position: [265, 247],
  },
  {
    name: 'sunglasses',
    side: 'top',
    width: [134, 107],
    offset: [167, 114],
    position: [320, 285],
  },
  {
    name: 'macbook',
    side: 'top',
    width: [221, 181],
    offset: [57, 32],
    position: [462, 399],
  },

  {
    name: 'sberkot',
    side: 'left',
    width: [147, 120],
    offset: [203, 156],
    position: [-176, -137],
  },
  {
    name: 'drinkit',
    side: 'left',
    width: [111, 86],
    offset: [57, 71],
    position: [-57, -12],
  },
  {
    name: 'rodina_mat',
    side: 'left',
    width: [160, 135],
    offset: [228, 142],
    position: [67, 63],
  },
  {
    name: 'uprock',
    side: 'left',
    width: [104, 86],
    offset: [91, 38],
    position: [123, 135],
  },
  {
    name: 'calvin_klein',
    side: 'left',
    width: [139, 109],
    offset: [41, 13],
    position: [262, 240],
  },

  {
    name: 'duolingo_french',
    side: 'right',
    width: [138, 108],
    offset: [118, 22],
    position: [-214, -183],
  },
  {
    name: 'la_la_land',
    side: 'right',
    width: [185, 170],
    offset: [71, 37],
    position: [-39, -51],
  },
  {
    name: 'leafe',
    side: 'right',
    width: [88, 59],
    offset: [247, 194],
    position: [145, 97],
  },
  {
    name: 'new_york',
    side: 'right',
    width: [187, 153],
    offset: [43, 68],
    position: [231, 178],
  },

  {
    name: 'headphones',
    side: 'bottom',
    width: [113, 95],
    offset: [97, 37],
    position: [50, 90],
  },
  {
    name: 'figma',
    side: 'bottom',
    width: [55, 52],
    offset: [14, -9],
    position: [228, 249],
  },
  {
    name: 'simba',
    side: 'bottom',
    width: [209, 176],
    offset: [90, 4],
    position: [310, 340],
  },
  {
    name: 'power',
    side: 'bottom',
    width: [107, 88],
    offset: [-20, -31],
    position: [518, 548],
  },
];
