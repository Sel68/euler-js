
let tri = [], sq= [], pent= [], hex= [], hep= [], oct= [];

for (let i = 1; i<=200; i++){
    let t = i*(i+1)/2;
    if (t>999 && t<10000) tri.push(t);
    
    t = i*i; if (t>999 && t<10000) sq.push(t);

    t = i*(3*i-1)/2; if (t>999 && t<10000) pent.push(t);

    t = i*(2*i-1); if (t>999 && t<10000) hex.push(t);

    t = i*(5*i-3)/2; if (t>999 && t<10000) hep.push(t);

    t = i*(3*i-2); if (t>999 && t<10000) oct.push(t);
}

const first2 = i => Math.floor(i/100);
const last2 = i => i%100;

function permute(arr){
    if (arr.length === 1) return [arr.slice()];
    const res = [];
    for (let i=0;i<arr.length;i++){
        const x = arr.splice(i,1)[0];
        for (const p of permute(arr)) res.push([x].concat(p));
        arr.splice(i,0,x);
    }
    return res;
}

const lists = { tri, sq, pent, hex, hep, oct };
const names = ['tri','sq','pent','hex','hep','oct'];
const perms = permute(names.slice());

outer:
for (const order of perms){
    const A = lists[order[0]];
    const B = lists[order[1]];
    const C = lists[order[2]];
    const D = lists[order[3]];
    const E = lists[order[4]];
    const F = lists[order[5]];

    for (let a of A){
        for (let b of B){
            if (last2(a)!==first2(b)) continue;
            for (let c of C){
                if (last2(b)!==first2(c)) continue;
                for (let d of D){
                    if (last2(c)!==first2(d)) continue;
                    for (let e of E){
                        if (last2(d)!==first2(e)) continue;
                        for (let f of F){
                            if (last2(e)!==first2(f)) continue;
                            if (last2(f)!==first2(a)) continue;
                            const arr = [a,b,c,d,e,f];
                            console.log(arr, arr.reduce((s,x)=>s+x,0)); break outer;

                        }
                    }
                }
            }
        }
    }
}

