// Favorileri yükle
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Favori ekle / kaldır
function toggleFavorite(id, button){

    if(favorites.includes(id)){
        favorites = favorites.filter(f => f !== id);
        button.innerHTML = "🤍 Favorilere Ekle";
    }else{
        favorites.push(id);
        button.innerHTML = "❤️ Favorilerden Çıkar";
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
}
const container = document.getElementById("recipes");
const search = document.getElementById("search");

function showRecipes(list) {
    container.innerHTML = "";

    list.forEach(recipe => {
        container.innerHTML += `
            <div class="recipe">
                <img src="${recipe.image}" class="recipe-image">

                <h2>${recipe.title}</h2>

                <h3>Malzemeler</h3>
                <ul>
                    ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
                </ul>

                <h3>Hazırlanışı</h3>
                <p>${recipe.instructions}</p>

                <button class="favorite-btn">
                    ❤️ Favorilere Ekle
                </button>
            </div>
        `;
    });
}

// Sayfa açılınca tüm tarifleri göster
showRecipes(recipes);
search.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    const filtered = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(text)
    );

    showRecipes(filtered);

});
