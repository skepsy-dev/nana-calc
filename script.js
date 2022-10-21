const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// add reset button ? https://stackoverflow.com/questions/23697985/reset-multiple-select-option-value-to-zero

// 1 VX
function singleVx() {
  var num1 = document.getElementsByName('one_lvl')[0].value; // [lvl1]
  var num2 = document.getElementsByName('one_lvl')[1].value; // [lvl2]
  var runs = totalRuns(num1, num2);
  var kg = totalKg(num1, num2);
  var kgCollect = avgKgCollect(num1, num2)

  document.getElementById('single_ttl_runs').value = runs;
  document.getElementById('single_ttl_nanas').value = (runs * 0.4);
  document.getElementById('single_ttl_kg').value = kg;
  document.getElementById('single_kg_collect').value = kgCollect;
}

// 2 VX
function twoVx() {
  var team = document.getElementsByName('two_lvl');
  var nanaCost = (0.4 * 2); 
  var ttlRuns = 0;
  var ttlKg = 0;
  var ttlKgCollect = 0;
  
  for (let i = 0; i < team.length; i += 2 ) {
    var lvl1 = team[i].value;
    var lvl2 = team[i + 1].value;
    var runs = totalRuns(lvl1, lvl2);
    var kg = totalKg(lvl1, lvl2);
    var kgCollect = avgKgCollect(lvl1, lvl2);

    if (runs > ttlRuns) {
      ttlRuns = runs;
    }
  ttlKg += kg;
  ttlKgCollect += kgCollect;
  } 
  document.getElementById('two_ttl_runs').value = ttlRuns;
  document.getElementById('two_ttl_nanas').value = (ttlRuns * nanaCost);
  document.getElementById('two_ttl_kg').value = ttlKg;
  document.getElementById('two_kg_collect').value = ttlKgCollect;
}

// 3 VX
function threeVx() {
  var team = document.getElementsByName('three_lvl');
  var nanaCost = (0.4 * 3); 
  var ttlRuns = 0;
  var ttlKg = 0;
  var ttlKgCollect = 0;
  
  for (let i = 0; i < team.length; i += 2 ) {
    var lvl1 = team[i].value;
    var lvl2 = team[i + 1].value;
    var runs = totalRuns(lvl1, lvl2);
    var kg = totalKg(lvl1, lvl2);
    var kgCollect = avgKgCollect(lvl1, lvl2);

    if (runs > ttlRuns) {
      ttlRuns = runs;
    }
  ttlKg += kg;
  ttlKgCollect += kgCollect;
  } 
  document.getElementById('three_ttl_runs').value = ttlRuns;
  document.getElementById('three_ttl_nanas').value = (ttlRuns * nanaCost);
  document.getElementById('three_ttl_kg').value = ttlKg;
  document.getElementById('three_kg_collect').value = ttlKgCollect;
}

// 4 VX
function fourVx() {
  var team = document.getElementsByName('four_lvl');
  var nanaCost = (0.4 * 4); 
  var ttlRuns = 0;
  var ttlKg = 0;
  var ttlKgCollect = 0;
  
  for (let i = 0; i < team.length; i += 2 ) {
    var lvl1 = team[i].value;
    var lvl2 = team[i + 1].value;
    var runs = totalRuns(lvl1, lvl2);
    var kg = totalKg(lvl1, lvl2);
    var kgCollect = avgKgCollect(lvl1, lvl2);

    if (runs > ttlRuns) {
      ttlRuns = runs;
    }
  ttlKg += kg;
  ttlKgCollect += kgCollect;
  } 
  document.getElementById('four_ttl_runs').value = ttlRuns;
  document.getElementById('four_ttl_nanas').value = (ttlRuns * nanaCost);
  document.getElementById('four_ttl_kg').value = ttlKg;
  document.getElementById('four_kg_collect').value = ttlKgCollect;
}

// 5 VX
function fiveVx() {
  var team = document.getElementsByName('five_lvl');
  var nanaCost = (0.4 * 5); 
  var ttlRuns = 0;
  var ttlKg = 0;
  var ttlKgCollect = 0;
  
  for (let i = 0; i < team.length; i += 2 ) {
    var lvl1 = team[i].value;
    var lvl2 = team[i + 1].value;
    var runs = totalRuns(lvl1, lvl2);
    var kg = totalKg(lvl1, lvl2);
    var kgCollect = avgKgCollect(lvl1, lvl2);

    if (runs > ttlRuns) {
      ttlRuns = runs;
    }
  ttlKg += kg;
  ttlKgCollect += kgCollect;
  } 
  document.getElementById('five_ttl_runs').value = ttlRuns;
  document.getElementById('five_ttl_nanas').value = (ttlRuns * nanaCost);
  document.getElementById('five_ttl_kg').value = ttlKg;
  document.getElementById('five_kg_collect').value = ttlKgCollect;
}

// global calc functions
var totalRuns = function(num1, num2) {
  var exp = [10, 20, 40, 60, 80, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 450, 500, null,];
  var runs = 0;

  for (var i = num1 - 1; i < num2 - 1; i++) {
      var num = exp[i]
      runs += num;
  }
  return runs;
};

var totalKg = function (num1, num2) {
  kongium = [10, 40, 60, 100, 150, 200, 250, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, null];
  let kg = 0;

  for (let i = num1 - 1; i < num2 - 1; i++) {
      let num = kongium[i]
      kg += num;
  }
  return kg;
};


var avgKgCollect = function (lvl1, lvl2) {
  var exp = [10, 20, 40, 60, 80, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 450, 500, null,];
  var avgKg = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11, 11.5, 12, 12.5, null];
  var ttlExp = totalRuns(lvl1, lvl2);
  var ttl_avg_kg = 0;

  if (lvl1 == lvl2) {
    return 0;
  } else {
    for (let i = 0, j = 0; i < ttlExp, j < lvl2 -1; i += exp[j], j++) {
      var lvlkg = (avgKg[j] * exp[j]);

      ttl_avg_kg += lvlkg;
    }
  }
  return ttl_avg_kg;
}



// tabs

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// end