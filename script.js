const bigbox = document.querySelector('#bigbox');
const div = document.createElement('div');
var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
let x = 0;
let color='Black';
let gridx = 16;

function setupGrid(gridx,color){
  if (x > 0){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) =>{
      box.remove();
    });
  }
  x++;
  bigbox.style.setProperty("--colNum", gridx);
  gridNum = gridx*gridx;

  for(let i=0;i<gridNum;i++){
    const div = document.createElement('div');
    div.classList.add("box");
    div.textContent="";
    bigbox.appendChild(div);
  };

let cc = function (){
    if (color == 'Random'){
    let random = Math.floor(Math.random()*140);
    return 'background:' + CSS_COLOR_NAMES[random];
  }

else{
  return 'background:' + color;
}
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) =>{
  box.addEventListener('mouseover', (e) =>{
    box.setAttribute('style',cc());
  })
})

const btn = document.querySelector("#clear");
btn.addEventListener('click', () =>{
  boxes.forEach((box) =>{
    box.setAttribute('style','background:white');
  })
})
}

setupGrid(gridx,color);

const btn2 = document.querySelector("#setGrid");
btn2.addEventListener('click', () =>{
  gridx=prompt('Set new grid size:');
  if (gridx==null||gridx==""){
    gridx=16;
  }
  setupGrid(gridx,color);
})
 
function funcC(){
  var list = $("#list").val();
    color = list;
    setupGrid(gridx,color);
}
