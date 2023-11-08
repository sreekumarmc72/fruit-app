export default function Fruit(props) {

    let cost;
    if (props.details.price > 2) {
        cost = "costly"
    } else {
        cost = " not costly"
    };


    let season;
    if (props.details.inSeason == true) {
        season = " a season fruit"
    } else {
        season = "not a seasonal fruit"
    };



    return (
        <div>
            <h1 style={{color: props.details.color}}> {props.details.fruit}</h1>
            <h2>Color :{props.details.color}</h2>
            <h2>Taste :{props.details.taste}</h2>
            <h3>It is {cost}</h3>
            <h3> It is {season}</h3>
            <h3>vitamin:{props.details.vitamins.join(" and ")}</h3>

        </div>

    )
}



/* {
    "fruit": "Apple",
    "color": "Red",
    "taste": "Sweet",
    "price": 1.5,
    "inSeason": true,
    "vitamins": ["A", "C"]



    if price > 2 , costly else not costly
if inSeason true, print 'it's a season fruit' else 'not a seasonal fruit'
print name, color taste in different tags
  }, */




/* 
  [
    {
      "snack": "Chips",
      "color": "Yellow",
      "taste": "Salty",
      "price": 1.5,
      "inStock": true,
      "calories": 150
    },
    {
      "snack": "Popcorn",
      "color": "White",
      "taste": "Salty",
      "price": 0.5,
      "inStock": true,
      "calories": 100
    },
    {
      "snack": "Pretzels",
      "color": "Brown",
      "taste": "Salty",
      "price": 2.5,
      "inStock": false,
      "calories": 200
    },
    {
      "snack": "Cookies",
      "color": "Brown",
      "taste": "Sweet",
      "price": 3.5,
      "inStock": true,
      "calories": 250
    },
    {
      "snack": "Candy",
      "color": "Red",
      "taste": "Sweet"
      "price": 4.5,
      "inStock": false,
      "calories": 300
    },
    {
      "snack": "Nuts",
      "color": "Brown",
      "taste": "Salty",
      "price": 2.0,
      "inStock": true,
      "calories": 200
    }
  ]


  display snack name in respective color
  coastly if > 2
  if instock, say 'you can buy' else not
say 'it is worthy' if calories less than 250 and salty, else say 'not recommended'
display price as in dollors


 */  





