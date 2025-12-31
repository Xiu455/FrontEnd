const extractNumber = (name) => {
    const match = name.match(/^(\d+)\./);
    return match ? Number(match[1]) : Infinity;
};

(async () => {
    
    const response = await fetch('https://api.github.com/repos/Xiu455/FrontEnd/contents/src');
    const res = await response.json();
    const dirData = res.sort((a, b) => extractNumber(a.name) - extractNumber(b.name));

    console.log(dirData);
})();