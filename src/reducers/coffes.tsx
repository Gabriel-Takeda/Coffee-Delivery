interface Coffee {
    name: string,
    description: string,
    imagem: string,
    amount:number
}

export interface CoffeList {
    id: number,
    name: string,
    description: string,
    imagem: string,
    amount:number
}

const CafeTradicional: Coffee = {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imagem: '../../../../../../assets/CoffeeTradicional.svg',
    amount: 0,
}

const CafeAmericano: Coffee = {
    name: 'Expresso Americano',
    description: 'É cafe expresso com leite ao gosto americano',
    imagem: '../../../../../../assets/CoffeeAmericano.svg',
    amount: 0,
}

const CafeCremoso: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imagem: '../../../../../../assets/CoffeeCremoso.svg',
    amount: 0,
}

const CafeGelado: Coffee = {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imagem: '../../../../../../assets/CoffeeGelado.svg',
    amount: 0,
}

const CafeComLeite: Coffee = {
    name: 'Cafe Com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imagem: '../../../../../../assets/CoffeeComLeite.svg',
    amount: 0,
}

const Latte: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imagem: '../../../../../../assets/CoffeeLatte.svg',
    amount: 0,
}

const Capuccino: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    imagem: '../../../../../../assets/CoffeeCapuccino.svg',
    amount: 0,
}

const Macchioato: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    imagem: '../../../../../../assets/CoffeMacchiato.svg',
    amount: 0,
}

const Mocaccino: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imagem: '../../../../../../assets/CoffeeMocaccino.svg',
    amount: 0,
}

const ChocolateQuente: Coffee = {
    name: 'Chocolate quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imagem: '../../../../../../assets/CoffeeChocolateQuente.svg',
    amount: 0,
}

const Cubano: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imagem: '../../../../../../assets/CoffeeCubano.svg',
    amount: 0,

}

const Havaiano: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imagem: '../../../../../../assets/CoffeeHavaiano.svg',
    amount: 0,

}

const Arabe: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imagem: '../../../../../../assets/CoffeeArabe.svg',
    amount: 0,

}

const Irlandes: Coffee = {
    name: 'Cafe Cremoso',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imagem: '../../../../../../assets/CoffeeIrlandes.svg',
    amount: 0,

}

export const CoffeeListId: CoffeList[] = [
    { id: 0, ...CafeTradicional },
    { id: 1, ...CafeAmericano },
    { id: 2, ...CafeCremoso },
    { id: 3, ...CafeGelado },
    { id: 4, ...CafeComLeite },
    { id: 5, ...Latte },
    { id: 6, ...Capuccino },
    { id: 7, ...Macchioato },
    { id: 8, ...Mocaccino },
    { id: 9, ...ChocolateQuente },
    { id: 10, ...Cubano },
    { id: 11, ...Havaiano },
    { id: 12, ...Arabe },
    { id: 13, ...Irlandes },
];
