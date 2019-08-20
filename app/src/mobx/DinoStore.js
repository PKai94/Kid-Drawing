import { observable, action, computed } from "mobx";

export default class DinoStore {
	// attributes
    @observable pointAnimals = [
        {id: 0, name: "dino", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}, 
            {number: 17, listData:[]}, 
            {number: 18, listData:[]}, 
            {number: 19, listData:[]}, 
            {number: 20, listData:[]}, 
            {number: 21, listData:[]}, 
            {number: 22, listData:[]}]
        },
        {id: 1, name: "bear", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}]
        },
        {id: 2, name: "bee", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}, 
            {number: 17, listData:[]}, 
            {number: 18, listData:[]}, 
            {number: 19, listData:[]}, 
            {number: 20, listData:[]}, 
            {number: 21, listData:[]}, 
            {number: 22, listData:[]}, 
            {number: 23, listData:[]}, 
            {number: 24, listData:[]}]
        },
        {id: 3, name: "bird", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}]
        },
        {id: 4, name: "butterfly", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}]
        },
        {id: 5, name: "cat", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}]
        },
        {id: 6, name: "crab", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}, 
            {number: 17, listData:[]}, 
            {number: 18, listData:[]}]
        },
        {id: 7, name: "drakefly", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}, 
            {number: 17, listData:[]}, 
            {number: 18, listData:[]}, 
            {number: 19, listData:[]}, 
            {number: 20, listData:[]}, 
            {number: 21, listData:[]}, 
            {number: 22, listData:[]}, 
            {number: 23, listData:[]}, 
            {number: 24, listData:[]}, 
            {number: 25, listData:[]}, 
            {number: 26, listData:[]}]
        },
        {id: 8, name: "duck", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}]
        },
        {id: 9, name: "fish", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}]
        },
        {id: 10, name: "frog", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}]
        },
        {id: 11, name: "jellyfish", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}]
        },
        {id: 12, name: "owl", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}]
        },
        {id: 13, name: "penguin", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}]
        },
        {id: 14, name: "pig", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}]
        },
        {id: 15, name: "rabbit", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]}]
        },
        {id: 16, name: "snail", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}, 
            {number: 15, listData:[]}, 
            {number: 16, listData:[]}]
        },
        {id: 17, name: "toucan", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}]
        },
        {id: 18, name: "turtle", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}]
        },
        {id: 19, name: "whale", 
            point: [
            {number: 1, listData:[]}, 
            {number: 2, listData:[]}, 
            {number: 3, listData:[]}, 
            {number: 4, listData:[]}, 
            {number: 5, listData:[]}, 
            {number: 6, listData:[]}, 
            {number: 7, listData:[]}, 
            {number: 8, listData:[]}, 
            {number: 9, listData:[]}, 
            {number: 10, listData:[]},
            {number: 11, listData:[]}, 
            {number: 12, listData:[]}, 
            {number: 13, listData:[]}, 
            {number: 14, listData:[]}]
        }
    ];

    @observable posX = "0";
    @observable posY = "0";

    @observable _X = "0";
    @observable _Y = "0";

    @observable strokeColor= 30;
    

	// reset
    @action resetDino(number){
        const index = this.pointDino.findIndex(item => item.number == number);
        this.pointDino[index].listData = [];
    }
    
    @action resetPosX() {this.posX = "";}
    @action resetPosY() {this.posY = "";}
    @action reset_X() {this._X = "";}
    @action reset_Y() {this._Y = "";}
    @action resetStrokeColor() {this.strokeColor = 10;}

	// action/method

    @action addPointAnimals(data, number, name)
    {
        const indexAnimal = this.pointAnimals.findIndex(item => item.name == name);
        const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(p => p.number == number);
        this.pointAnimals[indexAnimal].point[indexPoint].listData.push(data);
    }


    @action setLastPointAnimals(data, number, name)
    {
        const indexAnimal = this.pointAnimals.findIndex(item => item.name == name);
        const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(p => p.number == number);
        const count = this.pointAnimals[indexAnimal].point[indexPoint].listData.length - 1;
        this.pointAnimals[indexAnimal].point[indexPoint].listData[count].data += data;
    }

    @action getPointStoreAnimals(number, name)
    {
        try{
            const indexAnimal = this.pointAnimals.findIndex(item => item.name == name);
            const indexPoint = this.pointAnimals[indexAnimal].point.findIndex(p => p.number == number);
            return this.pointAnimals[indexAnimal].point[indexPoint];

        }
        catch{
            return null;
        }
        
    }

    @action setPosX(posX) {this.posX = posX;}
    @action setPosY(posY) {this.posY = posY;}
    @action set_X(_X) {this._X = _X;}
    @action set_Y(_Y) {this._Y = _Y;}
    @action setStrokeColor(strokeColor) {this.strokeColor = strokeColor;}


}