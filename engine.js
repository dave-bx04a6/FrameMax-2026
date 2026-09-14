class Engine {
    constructor() {
        this.id = "GBjKvi";
        this.queue = [];
    }

    async jqxbzoz(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Engine();
    for (let i = 0; i < 7; i++) {
        await obj.jqxbzoz(i);
    }
    console.log(obj.queue);
})();
