interface ICalc {
    add(first: number, second: number): any;
    }
    let calculator: ICalc = {
    add(first: number, second: number) {
    return first + second;
    }
    }
    console.log(calculator.add(30,30))