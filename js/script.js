function mostrarModal(tipo) {
    const titulo = document.getElementById("modalTitulo");
    const descripcion = document.getElementById("modalDescripcion");
    const analisis = document.getElementById("modalAnalisis");
    const conclusion = document.getElementById("modalConclusion");

    if (tipo === "barras") {
        titulo.innerHTML = "Gráfica de Barras<br><small>Cantidad de pedidos por tipo de taco</small>";
        descripcion.innerText = "Esta gráfica muestra la frecuencia de pedidos de tacos según su tipo.";
        analisis.innerHTML = `
            <p><strong>Análisis:</strong></p>
            <ul>
                <li>El <strong>Chicken Taco</strong> es el más popular, con el mayor número de pedidos.</li>
                <li>Le siguen <strong>Fish Taco</strong> y <strong>Pork Taco</strong>, lo que indica que los consumidores tienen una fuerte preferencia por carnes blancas y tradicionales.</li>
                <li>El <strong>Beef Taco</strong> es el menos solicitado, lo que podría deberse a factores como precio, sabor o presentación.</li>
            </ul>`;
        conclusion.innerText = "Esta información puede ser útil para enfocar promociones o ajustar el menú según la demanda real del cliente.";
    }

    else if (tipo === "histograma") {
        titulo.innerHTML = "Histograma<br><small>Duración de entrega de pedidos</small>";
        descripcion.innerText = "El histograma representa la distribución del tiempo de entrega (en minutos) de los pedidos realizados.";
        analisis.innerHTML = `
            <p><strong>Análisis:</strong></p>
            <ul>
                <li>La mayoría de los pedidos se entregan entre 10 y 90 minutos, con una ligera concentración entre los 50 y 70 minutos.</li>
                <li>No hay un sesgo muy fuerte hacia la izquierda o derecha, lo que sugiere una distribución más o menos uniforme.</li>
                <li>Algunos pedidos toman más tiempo que otros, por lo que sería recomendable revisar rutas, horarios o días con mayor retraso para mejorar el servicio.</li>
            </ul>`;
        conclusion.innerText = "";
    }

    else if (tipo === "boxplot") {
        titulo.innerHTML = "Diagrama de Cajas<br><small>Distribución del precio por tipo de taco</small>";
        descripcion.innerText = "Este boxplot muestra cómo varía el precio entre los distintos tipos de tacos.";
        analisis.innerHTML = `
            <p><strong>Análisis:</strong></p>
            <ul>
                <li><strong>Chicken</strong>, <strong>Pork</strong> y <strong>Fish Tacos</strong> presentan una mayor dispersión en sus precios, con precios máximos más altos.</li>
                <li><strong>Veggie</strong> y <strong>Beef Tacos</strong> tienen una distribución más compacta, lo que podría sugerir precios más estandarizados o controlados.</li>
                <li>El rango intercuartil más alto está en los tacos de <strong>Pork</strong>, lo que indica más variabilidad entre precios medios.</li>
            </ul>`;
        conclusion.innerText = "Este análisis es útil para evaluar la estrategia de precios y margen de ganancia por tipo de taco.";
    }

    else if (tipo === "heatmap") {
        titulo.innerHTML = "Mapa de Calor<br><small>Correlación entre variables numéricas</small>";
        descripcion.innerText = "Este heatmap muestra la correlación entre variables como distancia, precio, propina, toppings, etc.";
        analisis.innerHTML = `
            <p><strong>Análisis:</strong></p>
            <ul>
                <li>Existe una correlación positiva moderada entre el <strong>precio</strong> y la <strong>propina</strong>, lo que indica que los clientes tienden a dejar más propina cuando el pedido cuesta más.</li>
                <li>La <strong>distancia</strong> está algo correlacionada con la <strong>duración de entrega</strong>, como era de esperarse.</li>
                <li><strong>Toppings Count</strong> no parece correlacionarse fuertemente con otras variables, lo que sugiere que los ingredientes extras no afectan directamente al precio o al tiempo de entrega.</li>
            </ul>`;
        conclusion.innerText = "Esta visualización ayuda a identificar relaciones relevantes que pueden apoyar decisiones operativas y comerciales, como optimizar tiempos o ajustar precios.";
    }

    // Mostrar el modal
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
