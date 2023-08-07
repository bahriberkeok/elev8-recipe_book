import '../style.css'

document.querySelector('#doner').innerHTML = `
  <div>
    <h1>Doner</h1>
    <img src="../public/doner.jpg" alt="doner"></img>
    <h4>Ingredients</h4>
    <ul> 
        <li>Onion, pureed and sieved. We need its juice only. Don't add in the pulp.</li>
        <li>Ground beef (15% fat). You can use a mixture of lamb mince and beef mince if you want.</li>
        <li>Salt, Black Pepper, Cumin, Oregano, Garlic Powder/li>
        <li>Isot pepper/Urfa biber. If you can’t find it, use paprika instead, but the aroma of isot pepper is stronger.</li>
        <li>Yogurt,Milk, Butter</li>
    </ul>

    <h4>Instructions</h4>
    <ol> 
        <li>First, prepare the doner meat mixture. In a large bowl, combine the onion juice, ground beef, salt and all the spices, yogurt and milk well. Transfer it on a baking paper, give it a log shape and wrap it tightly. Give it a huge candy shape and let it rest first in the fridge for 2 hours and then in the freezer for 8 hours or overnight.</li>
        <li>Next, make thin doner sheets. Remove it from the freezer and let it sit on the counter for 5 minutes so that it is ready to slice. Hold the döner log lengthwise with a piece of baking paper and carefully make large thin slices using a sharp knife. </li>
        <li>Now cook the doner slices. Heat one teaspoon butter in a non stick pan over high heat. Line sliced döner pieces in a single layer and cook both sides until nicely brown, about one minute each side. Cook the rest in batches and never overload the pan. </li>
        <li>Wrapped in a Turkish style lavash bread.</li>
        <li>Serve.</li>
    </ol>

    <h3>Bon Appetit</h3>

    <button onclick="history.back()">Return to Recipes</button
  </div>
`