
export default class Diary { 
    #entries = [];
    #isLocked;
    #defaultPin = "0123";
    
    createEntry = (entry) => {
        !this.#isLocked && this.#entries.push(entry);
    };
    
    getEntries = () => {
        if (!this.#isLocked) {
            return this.#entries;
        }      
    };
    
    lockDiary = () => this.#isLocked = true;

    getLocked = () => this.#isLocked;

    unlockDiary = (pin) => {
        if (pin === this.#defaultPin) this.#isLocked = false;
    }
}