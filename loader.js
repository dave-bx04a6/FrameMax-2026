class Loader {
    constructor() {
        this.id = "r0Xb722vI5i";
        this.queue = [];
    }

    async rbwsjw(item) {
        await new Promise(r => setTimeout(r, 0));
        this.queue.push(item);
        return this.queue.length;
    }
}

(async () => {
    const obj = new Loader();
    for (let i = 0; i < 4; i++) {
        await obj.rbwsjw(i);
    }
    console.log(obj.queue);
})();
