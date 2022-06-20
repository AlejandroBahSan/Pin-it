//////// WEBSITE SEARCH
let names = [
  "amazon",
  "gmail",
  "youtube",
  "google-drive",
  "facebook",
  "instragram",
  "google-translate",
  "whatsapp",
  "outlook",
  "github",
  "udemy",
  "linkedin",
];
//Sort names in ascending order
let sortedNames = names.sort();

//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {
  //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  for (let i of sortedNames) {
    //convert input to lowercase and compare with each string

    if (
      i.toLowerCase().startsWith(input.value.toLowerCase()) &&
      input.value != ""
    ) {
      //create li element
      let listItem = document.createElement("li");
      //One common class name
      listItem.classList.add("list-items");
      listItem.style.cursor = "pointer";
      listItem.setAttribute("onclick", "displayNames('" + i + "')");
      //Display matched part in bold
      let word = "<b>" + i.substr(0, input.value.length) + "</b>";
      word += i.substr(input.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector(".list").appendChild(listItem);
    }
  }
});
function displayNames(value) {
  input.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
/////////////////////////////////////////////////////////////////////////////////

// Tiles Dropdown
const tilesDropdownBtn = document.getElementById("menuButton")
const tilesOptions = document.getElementById("dropdownOptions")

// Show Notes

const showNotesBtn = document.getElementById("showNotesBtn")
const notesContainer = document.getElementById("notesContainer")

// Settings

const settingsBtn = document.getElementById("settingsBtn")
const settingsOptions = document.getElementById("settingsOptions")

// New Tile

const createTileModal = document.getElementById("createTileModal")
const createNewTileBtn = document.getElementById("createNewTileBtn")
const saveTileBtn = document.getElementById("saveTileBtn")
const cancelNewTileBtn = document.getElementById("cancelNewTileBtn")

// Delete Tile

const deleteTileModal = document.getElementById("deleteTileModal")
const deleteTileModalBtn = document.getElementById("deleteTileModalBtn")
const cancelDeleteTileModalBtn = document.getElementById("cancelDeleteTileModalBtn")
const deleteTileBtn = document.getElementById("deleteTileBtn")

//  New Note

const createNoteModal = document.getElementById("createNoteModal")
const createNoteBtn = document.getElementById("createNoteBtn")
const saveNoteBtn = document.getElementById("saveNoteBtn")
const cancelNoteBtn = document.getElementById("cancelNoteBtn")

//  Delete Note 

const deleteNoteModal = document.getElementById("deleteNoteModal")
const deleteNoteModalBtn = document.getElementById("deleteNoteModalBtn")
const cancelDeleteNoteModalBtn = document.getElementById("cancelDeleteNoteModalBtn")
const deleteNoteBtn = document.getElementById("deleteNoteBtn")


// tilesDropdownBtn.onclick = function () {
//   tilesOptions.classList.toggle("hidden")
//   tilesOptions.classList.toggle("block")
// }

tilesDropdownBtn.onmouseenter = function () {
  tilesOptions.classList.toggle("hidden")
  tilesOptions.classList.toggle("block")
}

tilesOptions.onmouseleave = function () {
  tilesOptions.classList.toggle("hidden")
}

settingsBtn.onclick = function () {
  settingsOptions.classList.toggle("hidden")
  settingsOptions.classList.toggle("block")
}

showNotesBtn.onclick = function () {
  notesContainer.classList.toggle("hidden")
  notesContainer.classList.toggle("block")
}

createNewTileBtn.onclick = function () {
  createTileModal.style.display = "flex"
}

cancelNewTileBtn.onclick = function () {
  createTileModal.style.display = "none";
}

deleteTileModalBtn.onclick = function () {
  deleteTileModal.style.display = "flex"
}

cancelDeleteTileModalBtn.onclick = function () {
  deleteTileModal.style.display = "none";
}

createNoteBtn.onclick = function () {
  createNoteModal.style.display = "flex"
}

cancelNoteBtn.onclick = function () {
  createNoteModal.style.display = "none";
}

deleteNoteModalBtn.onclick = function () {
  deleteNoteModal.style.display = "flex"
}

cancelDeleteNoteModalBtn.onclick = function () {
  deleteNoteModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == createTileModal || event.target == deleteTileModal || event.target == createNoteModal || event.target == deleteNoteModal) {
    createTileModal.style.display = "none";
    createNoteModal.style.display = "none";
    deleteTileModal.style.display = "none";
    deleteNoteModal.style.display = "none";
  }
}

var phPool = [];
var phElem = document.createElement('div');



var grid = new Muuri(".grid", {
  dragEnabled: true,
  createElement(item) {
    return phPool.pop() || phElem.cloneNode();
  },

  // Center Grid Code

  // layout: function (grid, layoutId, items, width, height, callback) {

  //   var layout = {
  //     id: layoutId,
  //     items: items,
  //     slots: [],
  //     styles: {},
  //   };

  //   var item;
  //   var m;
  //   var x = 0;
  //   var y = 0;
  //   var w = 0;
  //   var h = 0;

  //   var maxW = width / 2;
  //   var currentW = 0;
  //   var currentRowH = 0;
  //   var currentRowW = 0;
  //   var rowSizes = [];
  //   var rowFixes = [];

  //   var xPre, yPre, wPre, hPre;
  //   var numToFix = 0;

  //   for (var i = 0; i < items.length; i++) {
  //     item = items[i];

  //     m = item.getMargin();
  //     wPre = item.getWidth() + m.left + m.right;
  //     hPre = item.getHeight() + m.top + m.bottom;
  //     xPre += wPre;

  //     if (hPre > currentRowH) {
  //       currentRowH = hPre;
  //     }

  //     if (w < currentRowW) {
  //       currentRowW = wPre;
  //     }

  //     rowSizes.push(width / 2);
  //     numToFix++;
  //     currentW += wPre;

  //     var k = 0;

  //     for (var j = 0; j < numToFix; j++) {
  //       rowSizes[i - j] -= wPre / 2;
  //     }

  //     if (numToFix > 1) {
  //       rowSizes[i] -= (wPre / 2) * (numToFix - 1);
  //       k += (wPre / 2);
  //     }

  //     currentW -= k;
  //     rowFixes.push(k);

  //     if (currentW >= maxW) {
  //       yPre += currentRowH;
  //       currentRowH = 0;
  //       xPre = 0;
  //       numToFix -= 1;
  //       currentW = 0;
  //       numToFix = 0;
  //       k = 0;
  //     }
  //   }

  //   maxW = width / 2;
  //   currentW = 0;
  //   currentRowH = 0;
  //   currentRowW = 0;

  //   for (var i = 0; i < items.length; i++) {
  //     item = items[i];
  //     x += w;

  //     if (h > currentRowH) {
  //       currentRowH = h;
  //     }

  //     if (w < currentRowW) {
  //       currentRowW = w;
  //     }

  //     currentW += w - rowFixes[i];

  //     if (currentW >= maxW) {
  //       y += currentRowH;
  //       currentRowH = 0;
  //       x = 0;
  //       currentW = 0;
  //     }

  //     m = item.getMargin();
  //     w = item.getWidth() + m.left + m.right;
  //     h = item.getHeight() + m.top + m.bottom;
  //     layout.slots.push(x + rowSizes[i], y);
  //   }

  //   layout.styles.width = '100%';
  //   layout.styles.height = y + h + 1 + 'px';

  //   callback(layout);
  // },

  // Center Grid Code End

  onCreate(item, element) {
    // If you want to do something after the
    // placeholder is fully created, here's
    // the place to do it.
  },
  onRemove(item, element) {
    phPool.push(element);
  },

});