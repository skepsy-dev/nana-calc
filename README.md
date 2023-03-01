# nana-calc-test

lv1 = current lvl input
    text/num input 1...20

lv2 = next/desired lvl input
    text/num input 2...20
        error if 2 <

N =  nana required to reach desired lvl

    let nanas = runs * 0.4
    return nanas; // => total nana req.



R = total runs required till desired lvl

    lv1..lv2
    runs = 0;

        for (let i = lv1; i < lv2; i++)
                let run = exp[i];
                 runs += run;

    return runs; => total runs req.


K = total kongium required for all lvl's
    lv1..lv2
    kgs = 0;

        for (let i = lv1; i < lv2; i++)
                let kg = kongium[i];
                 kgs += kg;

    return kgs; => total kongium req to lvl up.



1 exp === 1 run
1 run === .4 nana

//

let kongium = [10, 40, 60, 100, 150, 200, 250, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, null]

let exp = [10, 20, 40, 60, 80, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 400, 450, 500, null,]


let exp = {
    lvl1 : 10,
    lvl2 : 20,
    lvl3 : 40,
    lvl4 : 60,
    lvl5 : 80,
    lvl6 : 100,
    lvl7 : 125,
    lvl8 : 150,
    lvl9 : 175,
    lvl10 : 200,
    lvl11 : 225,
    lvl12 : 250,
    lvl13 : 275,
    lvl14 : 300,
    lvl15 : 325,
    lvl16 : 350,
    lvl17 : 400,
    lvl18 : 450,
    lvl19 : 500,
    lvl20 : null,
    }

let kongium = {
    lvl1 : 10,
    lvl2 : 40,
    lvl3 : 60,
    lvl4 : 100,
    lvl5 : 150,
    lvl6 : 200,
    lvl7 : 250,
    lvl8 : 400,
    lvl9 : 500,
    lvl10 : 600,
    lvl11 : 700,
    lvl12 : 800,
    lvl13 : 900,
    lvl14 : 1000,
    lvl15 : 1200,
    lvl16 : 1400,
    lvl17 : 1600,
    lvl18 : 1800,
    lvl19 : 2000,
    lvl20 : null,
    }


