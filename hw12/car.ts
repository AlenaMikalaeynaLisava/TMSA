// #### Task 1 💻

// Создайте абстрактный класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям. 
// Класс Car включает:
// - абстрактные поля: максимальный объем топливного бака, расход топлива на 100км, запас топлива (`fuelReserve`) - 
// поля инициализируются в конструкторе дочерних классов
// - метод `drive` (не абстрактный), который принимает расстояние в км, отнимает от `fuelReserve` количество затраченного топлива,
// в случае, если расстояние невозможно проехать с текущим запасом топлива, вызывается другой метод - 
// `refuel` (заправиться) столько раз, сколько необходимо для того, чтобы проехать расстояние
// Метод `refuel` имеет необязательный параметр количества топлива. Если он не указан, то заправляется полный бак




export abstract class Car {
    abstract tankCapacity: number;
    abstract fuelConsumption: number;
    abstract fuelReserve:number;
    refuel(){};
    protected drive (distance: number) : void {
        const fuelForDistance = (this.fuelConsumption*distance)/100;
        while(fuelForDistance > this.fuelReserve) {
            const distancePassed = this.fuelReserve / this.fuelConsumption * 100;
            this.fuelReserve = 0;
            this.refuel();//можно с параметром
            this.drive(distance - distancePassed);
        }
        this.fuelReserve -= fuelForDistance;
    }
}