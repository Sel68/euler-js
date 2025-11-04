
const mp = new Map();

for (let i = 1; ; i++){
    const k = String(i*i*i).split('').sort().join('');
    if (mp.has(k)){
        mp.get(k).push(i);
        if (mp.get(k).length==5){
            console.log(mp.get(k), mp.get(k)[0]**3); break;
        }
    }
    else mp.set(k, [i]);
}