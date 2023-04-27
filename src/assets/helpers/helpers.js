
function getImgUrl(imgName){
    return new URL(`../images/${imgName}`, import.meta.url).href;
}

export {getImgUrl};