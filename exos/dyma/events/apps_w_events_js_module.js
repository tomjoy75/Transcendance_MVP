class MyEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(listener);
    }

    emit(event) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener());
        }
    }
}

const emitter = new MyEmitter();

emitter.on('FILE_READ', () => {
    console.log("File was read!");
});

emitter.on('FILE_READ', () => {
    console.log("Should cache file!");
});

emitter.emit('FILE_READ');
