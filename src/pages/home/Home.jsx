import "./Home.scss"

export const Home = () => {
  return (
    <div className="home-container">
      <h1 className="p30 main-title">Find the best coffee for you</h1>
        {/* <app-search></app-search> */}

      {/* <div class="drinks-list">
        <a routerLink="/" class="drinks-list__item" *ngFor="let item of coffeeDrinks" [ngClass]="{'selected': selectedItem === item}" (click) = "selectItem(item)">
          <div class="drinks-list__item-name">{{ item.name }}</div>
        </a>
      </div>*/}

      {/* <div class="coffee-drinks">
        <a [routerLink]="'/product/' + item.id" class="item-container coffee-drinks__item" *ngFor="let item of coffeeDrinksData">
          <div class="coffee-drinks__img">
            <img src="{{item.img}}" alt="coffee-drink">
            <div class="coffee-drinks__raiting">
              <span class="icon-star"></span>
              <p class="raiting_value">{{ item.raiting }}</p>
            </div>
          </div>
          <h3 class="item-title coffee-drinks__title">{{item.title}}</h3>
          <p class="coffee-drinks__desc">{{item.desc}}</p>
          <div class="coffee-drinks__bye-info">
            <p class="price-value"><span>$ </span>{{item.price}}</p>
            <button class="btn add-btn"><span class="icon-plus"></span></button>
          </div>
        </a>
      </div> */}

      {/* <h2 class="p30 chapter-title">Coffee beans</h2>
      <app-coffee-beans></app-coffee-beans> */}
</div>
  )
}

