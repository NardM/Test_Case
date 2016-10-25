/**
 * Created by nardm on 25.10.16.
 */
import { Component } from '@angular/core';
export class Item{
    purchase: string;
    price: number;

    constructor(purchase: string, price: number) {

        this.purchase = purchase;
        this.price = price;
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    eval_text: string;
    solve: string;

    addSolve(eval_text: string): void {
        this.solve = eval(eval_text);
    }

    items: Item[] =
        [
            { purchase: "Лук", price: 4 }
        ];

    addItem(text: string, price: number): void {

        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;
        this.items.push(new Item(text, price));
    }

    text=""
}