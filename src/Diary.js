
export default class Diary { 
    #entries = [];
    
    createEntry = (entry) => this.#entries.push(entry);
    
    getEntries = () => this.#entries;
}