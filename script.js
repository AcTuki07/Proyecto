$(document).ready(function() {
    // Cargar categorías desde la API
    $.get("https://fakestoreapi.com/products/categories", function(categories) {
        categories.forEach(function(category) {
            $('#categorias-lista').append(`
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${category}</h5>
                        </div>
                    </div>
                </div>
            `);
        });
    });

    // Cargar productos desde la API
    $.get("https://fakestoreapi.com/products", function(products) {
        products.forEach(function(product) {
            $('#productos-lista').append(`
                <div class="col-md-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">$${product.price}</p>
                            <p class="card-text">Rating: ${product.rating.rate}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            `);
        });
    });
});

$(document).ready(function() {
    // Cargar productos desde la API
    $.get("https://fakestoreapi.com/products", function(products) {
        renderProducts(products); // Renderizar todos los productos al inicio

        // Filtrar productos por categoría
        $('.filter-btn').click(function() {
            const category = $(this).data('category');
            if (category === 'all') {
                renderProducts(products); // Mostrar todos los productos
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                renderProducts(filteredProducts); // Mostrar solo la categoría seleccionada
            }
        });
    });

    // Función para renderizar productos
    function renderProducts(products) {
        $('#productos-lista').empty(); // Limpiar productos anteriores
        products.forEach(function(product) {
            $('#productos-lista').append(`
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${product.image}" class="card-img-top1" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">$${product.price}</p>
                            <p class="card-text">Rating: ${product.rating.rate}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                </div>
            `);
        });
    }
});


//Mapa JS
var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: location,
    styles: [
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
          { "color": "#202c3e" }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          { "gamma": 0.01 },
          { "lightness": 20 },
          { "weight": "1.39" },
          { "color": "#ffffff" }
        ]
      }
      // Puedes agregar más estilos personalizados si es necesario.
    ]
  });
  