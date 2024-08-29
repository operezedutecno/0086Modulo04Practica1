$(() => {
    const ingredientes = [
        "Carne",
        "Pollo",
        "Tocino",
        "Mozzarella",
        "Champiñón",
        "Cebolla",
        "Piña",
        "Pimentón",
    ];
    
    const mostrarIngredientes = () => {
        for (const ingrediente of ingredientes) {
            $("#ingredientes").append(`
                <div>
                    <input type="checkbox" value="${ingrediente}" class="check-ingredientes"> ${ingrediente}
                </div>
            `)
        }    
    }

    const mostrarSeleccionados = () => {
        $("#seleccionados").html(seleccionados.join(","))
    }

    const mostrarExtrasSeleccionados = () => {
        const extras = []
        $("#extras-seleccionados").html("")
        $("#total-extra").html("$0")
        if(seleccionados.length > 3) {
            for (let index = 3; index < seleccionados.length; index++) {
                extras.push(seleccionados[index])
            }
            $("#extras-seleccionados").html(extras.join(","))
            $("#total-extra").html(`$${extras.length*800}`)
        }
    }

    let seleccionados = [];
    mostrarIngredientes()

    $(document).on("click",".check-ingredientes", function() {
        const checked = $(this).prop('checked');
        const value = $(this).val()
        if(checked) {
            seleccionados.push(value)
        } else {
            seleccionados = seleccionados.filter(item => item != value)
        }
        mostrarSeleccionados()
        mostrarExtrasSeleccionados()
    })

    $("#btn-enviar").click(function() {
        const valor = $("#txt-propina").val();
        if(valor == "") {
            return alert("No ha definido la propina")
        }
        $("#monto-propina").html(`$${valor}`)
        alert(`Su propina de $${valor} ha sido enviado.`)
    })
});
