export const cacheImages = async pathsArr =>{
    const promises = await pathsArr.map((src) => {
        return new Promise(function(resolve,reject){
            const img = new Image();
            img.src = src;
            img.onload = resolve();
            img.onerror = reject();
        });
    });
    await Promise.all(promises);
    
}