(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED TV" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos: ", product);
    }
  }

  class Mailer {
    private masterEmail: string = "robertonc1599@gmail.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando correo a los clientes: ", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      private productService: ProductService,
      private mailer: Mailer
    ) {}

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["rjnunezc@unitru.edu.pe"], "to-admins");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const mailer = new Mailer();
  const productService = new ProductService();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  mailer.sendEmail(["rjnunezc@unitru.edu.pe"], "to-admins");
  cartBloc.addToCart(10);
})();
