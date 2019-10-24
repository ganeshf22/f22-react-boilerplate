//Device size goes here
const size = {
mobileMinWidth : 300,
mobileMaxWidth : 480,
tabletLRMinWidth : 481,
tabletLRMaxWidth : 767,
tabletLPMinWidth : 768,
tabletLPMaxWidth : 1024,
laptopMinWidth : 1025,
laptopMaxWidth : 1280,
desktopHMinWidth : 1281
  }
//Media breakpoints goes here
  export const devices = {  
//  Device = Most of the Smartphones Mobiles (Portrait)
//  Screen = B/w 320px to 479px
    mobile: `(min-width: ${size.mobileMinWidth}px) and (max-width: ${size.mobileMaxWidth}px)`,
//  Device = Low Resolution Tablets, Mobiles (Landscape)
//  Screen = B/w 481px to 767px
    tabletLR: `(min-width: ${size.tabletLRMinWidth}px) and (max-width: ${size.tabletLRMaxWidth}px)`,
//  Device = Tablets, Ipads (landscape)
//  Screen = B/w 768px to 1024px
    tabletL: `(min-width: ${size.tabletLPMinWidth}px) and (max-width: ${size.tabletLPMaxWidth}px) and (orientation: landscape)`,
//  Device = Tablets, Ipads (portrait)
//  Screen = B/w 768px to 1024px
    tabletP: `(min-width: ${size.tabletLPMinWidth}px) and (max-width: ${size.tabletLPMaxWidth}px)`,
//  Device = Laptops, Desktops
//  Screen = B/w 1025px to 1280px
    laptop: `(min-width: ${size.laptopMinWidth}px) and (max-width: ${size.laptopMaxWidth}px)`,
//  Device = Desktops
//  Screen = 1281px to higher resolution desktops
    desktopH: `(min-width: ${size.desktopHMinWidth}px)`
  };