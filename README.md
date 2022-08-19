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


keys exp = [1 : 50, 2 : 100, ...........]

keys kongium = [1 : 50, 2 : 100, ...........]
