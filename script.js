let buildings = {
  fortress: {
    name: "Precinct Fortress BR01",
    description: "The newly reconstructed Enforcer precinct fortress, from which Lord Helmawr's Finest are itching to dispense justice.",
    currentOwner: "None"
  },
  beladonTomb: {
    name: "Beladon's Tomb",
    description: "The colossal mausoleum complex of Beladon. A mighty monument to a forgotten man.",
    currentOwner: "None"
  },
  building1: {
    name: "Generatorium",
    description: "The main power generator for Beladon's Rest. Control of the Generatorium allows control of lighting during battles.",
    currentOwner: "None"
  },
  building2: {
    name: "Archaeotech Device",
    description: "A ancient and strange machine that autonomously produces weapon materials. Control of this device provides free weapon upgrades.",
    currentOwner: "None"
  },
  building3: {
    name: "Fighting Pits",
    description: "The skeleton of a factory complex, repurposed for bloody spectacle. Control of the Fighting Pits provides possible experience for Gangers.",
    currentOwner: "None"
  },
  building4: {
    name: "Settlement",
    description: "A newly reformed settlement in the husks of old hab-blocks. Control of the Settlement provides extra Gangers.",
    currentOwner: "None"
  },
  building5: {
    name: "Manufactorum",
    description: "A reignited manufactorum block. Control of this industrial zone provides cheaper equipment.",
    currentOwner: "None"
  },
  building6: {
    name: "Drinking Hole",
    description: "The first of the facilities in Beladon's Rest to be rebuilt. Control of the Drinking Hole provides a boon in battles.",
    currentOwner: "None"
  },
  building7: {
    name: "Collapsed Dome Section",
    description: "A ruined section of the dome that may hold unknown treasures. Control of this section provides a chance for a large income at the possible cost of Ganger injury.",
    currentOwner: "None"
  },
  building8: {
    name: "Workshop",
    description: "The new workshop of a renowned weaponsmith. Control of the Workshop provides a free Ammo-jack",
    currentOwner: "None"
  },
  building9: {
    name: "Tunnel Entrance",
    description: "An entrance to a network of tunnels that run on an even deeper level of the Underhive. Control of the entrance allows a Gang to deploy some fighters via tunnel during battle.",
    currentOwner: "None"
  },
  building10: {
    name: "Bone Shrine",
    description: "A morbid shrine built from the bones of countless Gangers and Underhive denizens of old. Control of the Bone Shrine provides increased income.",
    currentOwner: "None"
  },
  building11: {
    name: "Mine Workings",
    description: "A deep cut mine complex from which minerals, materials, and sometimes relics are dug up. Control of the mines provides income from captured Gangers.",
    currentOwner: "None"
  },
  building12: {
    name: "Underhive Cathedral",
    description: "A towering place of worship of the God-Emperor of Mankind. Control of the Cathedral provides a blessing during battles.",
    currentOwner: "None"
  },
  building13: {
    name: "Promethium Caches",
    description: "A block of warehouses and storage facilities containing Promethium. Control of the caches provides bonuses to flame weapons.",
    currentOwner: "None"
  },
};

$(function(){
  let buildingList = document.querySelectorAll('.building');
   buildingList.forEach(function(building){
    $(`#${building.id}`).popover({
    html: true,  
    title: `${buildings[building.id].name}`, 
    content: `
  <div><strong>Description:</strong> ${buildings[building.id].description}</div>
  <div><strong>Owner:</strong> ${buildings[building.id].currentOwner}</div>`, 
    placement: 'right',
    trigger: 'focus',
    animation: true,
   });
 }); 
});
$(function(){
  $(".list-group-item").on("click", pictureChange);
});

function pictureChange(event) {
  let id = event.target.id;
  switch(id) {
     case "gang-list-cawdor":
        $(".gangpicture").attr("src", "imgs/cawdor.png");
        break;
      case "gang-list-delaque":
        $(".gangpicture").attr("src", "imgs/delaque.png");
        break;
      case "gang-list-escher":
        $(".gangpicture").attr("src", "imgs/escher.png");
        break;
      case "gang-list-goliath":
        $(".gangpicture").attr("src", "imgs/goliath.png");
        break;
      case "gang-list-vansaar":
        $(".gangpicture").attr("src", "imgs/vansaar.png");
        break;
}};
