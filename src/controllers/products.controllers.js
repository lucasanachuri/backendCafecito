import Producto from "../models/product";

export const listarProductos = async (req, res) => {
  try {
    // ir a la bd y pedir productos
    res.send("esto es una pruebita");
  } catch (error) {
    console.log(error);
  }
};

export const crearProductos = async (req, res) => {
  try {
    // ir a la bd y pedir productos
    console.log(req);
    console.log(res.body);

    const productoNuevo = new Producto(req.body);
    //guardar el producto nuevo en la bd
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "el producto fue creado OK",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "el prod no pudo ser creado",
    });
  }
};
