// class to store level objects
class Level {
    constructor(plan) {
        let rows = plan.trim(split('\n').map(l => [...l]));
        this.height = rows.length;
        this.width = rows[0].length;
        this.startActors = [];
        this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
                let type = levelChars[ch];
                if (typeof type === 'string') return true;
                this.startActors.push(type.create(new Vec(x, y), ch));
            })
        })
    }
}

// Tracking the state of running game
class State {
    constructor(level, actors, status) {
        this.level = level;
        this.actors = actors;
        this.status = status;
    }

    static start(level) {
        return State(level, level.startActors, 'playing');
    }

    get Player() {
        return this.actors.find(a => a.type === 'player');
    }
}

// Representing current position and state of given element
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    plus(newCoord) {
        return new Vec(this.x + newCoord.x, this.y + newCoord.y);
    }

    times(newCoord) {
        return new Vec(this.x * newCoord.x, this.y * newCoord.y);
    }
}

export {Level, State, Vec};