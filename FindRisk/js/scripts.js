function Calcular(Genero) {
    $.mobile.loading("show", {
        text: "Calculando, Por favor Espere...",
        textVisible: true,
        theme: "b",
        textonly: false,
        html: ""
    });
    var obj = new Object;
    var A = parseFloat($("#" + Genero + " input[name='PP_A']:checked").val());
    var C = parseFloat($("#" + Genero + " input[name='PP_C']:checked").val());
    var D = parseFloat($("#" + Genero + " input[name='PP_D']:checked").val());
    var E = parseFloat($("#" + Genero + " input[name='PP_E']:checked").val());
    var F = parseFloat($("#" + Genero + " input[name='PP_F']:checked").val());
    var G = parseFloat($("#" + Genero + " input[name='PP_G']:checked").val());
    var H = parseFloat($("#" + Genero + " input[name='PP_H']:checked").val());

    var B1 = parseFloat($("#" + Genero + " input[name='PP_B1']").val());
    var B2 = parseFloat($("#" + Genero + " input[name='PP_B2']").val()) / 100;
    var B = B1 / (B2 * B2);

    obj.FR_Edad = A;
    obj.FR_Peso = B1;
    obj.FR_Altura = B2;
    obj.FR_IMC = B;
    obj.FR_Cintura = C;
    obj.FR_Ejercicio = D;
    obj.FR_FrutiVer = E;
    obj.FR_Medicacion = F;
    obj.FR_GlucosaH = G;
    obj.FR_Familia = H;
    obj.FR_Nombre = $("#" + Genero + " input[name='NAME']").val();
    obj.FR_Mail = $("#" + Genero + " input[name='mail']").val();
    obj.FR_Club = parseFloat($("#" + Genero + " input[name='PC']:checked").val());;
    obj.FR_Cedula = $("#" + Genero + " input[name='Cedula']").val();

    if (!isNaN(B)) {

        $("#" + Genero + " #PP_B").val(B);
        var MB = "";
        if (B < 18.5)
            MB = "Infrapeso";
        else if (B > 18.5 && B < 25)
            MB = "Normal";
        else if (B >= 25 && B < 30)
            MB = "Sobrepeso";
        else
            MB = "Obeso";
        $("#" + Genero + " #MB").text(MB);

    }

    if (B < 25)
        B = 0;
    else if (B >= 25 && B < 30)
        B = 1;
    else
        B = 3;

    var total = A + B + C + D + E + F + G + H;
    var resultado = "Su riesgo es: ";
    var popup = 0;
    if (total < 7) {
        resultado += "Bajo";
        popup = "1";
    }
    else {
        if (total >= 7 && total <= 11) {
            resultado += "Ligeramente elevado";
            popup = "2";
        }
        else {
            if (total >= 12 && total <= 14) {
                resultado += "Moderado";
                popup = "3";
            }
            else {
                if (total >= 15 && total <= 20) {
                    resultado += "Alto";
                    popup = "4";
                }
                else {
                    if (total > 20) {
                        resultado += "Muy Alto";
                        popup = "5";
                    }
                }
            }
        }
    }

    var resIMC = "Resultado del IMC:" + MB + "";
    obj.FR_Resultado = total;

    switch (popup) {
      case "1":
        alert("Riesgo Bajo\n\n" + resIMC + "\n\nSu nivel de riesgo es muy bajo. En su caso no es necesario un cuidado especial o de prevenci�n. Sin embargo no estar�a mal cuidar de su alimentaci�n y realizar suficiente ejercicio.");
        break;
      case "2":
        alert("Riesgo Ligeramente elevado\n\n" + resIMC + "\n\nPara usted es recomendable un poco de cuidado, aunque el nivel de riesgo de contraer una diabetes no es muy alto. Si quiere ir sobre seguro, siga las siguientes reglas:\n" +
"En el caso de sobrepeso deber� intentar disminuir su peso en un 7 por ciento\n" +
"Mant�ngase en actividad, por lo menos, por media hora durante cinco d�as a la semana\n" +
"La grasa deber�a constituir,como m�ximo, s�lo un 30 por ciento de su alimentaci�n\n" +
"La parte de �cidos grasos no saturados (sobre todo en la grasa animal) no deber�a sobrepasar del 10 por ciento en su alimentaci�n\n" +
"Consuma diariamente, por lo menos, 30 gramos de fibras vegetales (como las contenidas en productos integrales, verduras y frutas)");
        break;
      case "3":
        alert("Riesgo Moderado\n\n" + resIMC + "\n\nSi usted se encuentra en este grupo de riesgo, no deber�a postergar, por ning�n motivo, el tomar medidas preventivas. En este caso lo pueden ayudar consejos e instrucciones de expertos para cambiar su estilo de vida, los cuales puede aplicarlos usted mismo. Recurra a ayuda profesional si nota que de esa manera no se puede ayudar.");
        break;
      case "4":
        alert("Riesgo Alto\n\n" + resIMC + "\n\nSu nivel de riesgo es muy alto: una tercera parte de los pacientes que corresponden a este grupo de riesgo contraen diabetes en los pr�ximos 10 a�os. El subestimar esta situaci�n puede traer graves consecuencias. Lo mejor ser�a recurrir a ayuda profesional. Haga una prueba de glucemia (az�car en la sangre) en una farmacia y vaya a hacerse ex�menes m�dicos (checkup a partir de los 35).");
        break;
      case "5":
        alert("Riesgo Muy Alto\n\n" + resIMC + "\n\nExiste la necesidad de actuar inmediatamente, ya que es muy posible que usted ya sufra de diabetes. Eso pasa con el 35 por ciento de las personas que se encuentran sobre los 20 puntos. Una simple prueba de glucemia en su farmacia m�s cercana, por ejemplo, puede servir de ayuda como una informaci�n adicional. De todas formas, �sta no reemplaza un diagn�stico del laboratorio para descartar una diabetes ya existente. Por esta raz�n deber�a solicitar una consulta m�dica, inmediatamente.");
        break;
    }

    //$.ajax({
    //    url: "http://track.diabetrics.co/FindRisk/RegisterMobile?callback=?",
    //    dataType: 'jsonp',
    //    type: 'GET',
    //    data: obj,
    //    success: function (data, status, jqXHR) {
    //        $.mobile.loading('hide');
    //        if (data.Code == 0) {
              
    //            switch (popup) {
    //                case "1":
    //                    alert("Riesgo Bajo\n\n"+resIMC+"\n\nSu nivel de riesgo es muy bajo. En su caso no es necesario un cuidado especial o de prevenci�n. Sin embargo no estar�a mal cuidar de su alimentaci�n y realizar suficiente ejercicio.");
    //                    break;
    //                case "2":
    //                    alert("Riesgo Ligeramente elevado\n\n" + resIMC + "\n\nPara usted es recomendable un poco de cuidado, aunque el nivel de riesgo de contraer una diabetes no es muy alto. Si quiere ir sobre seguro, siga las siguientes reglas:\n" +
    //        "En el caso de sobrepeso deber� intentar disminuir su peso en un 7 por ciento\n" +
    //        "Mant�ngase en actividad, por lo menos, por media hora durante cinco d�as a la semana\n" +
    //        "La grasa deber�a constituir,como m�ximo, s�lo un 30 por ciento de su alimentaci�n\n" +
    //        "La parte de �cidos grasos no saturados (sobre todo en la grasa animal) no deber�a sobrepasar del 10 por ciento en su alimentaci�n\n" +
    //        "Consuma diariamente, por lo menos, 30 gramos de fibras vegetales (como las contenidas en productos integrales, verduras y frutas)");
    //                    break;
    //                case "3":
    //                    alert("Riesgo Moderado\n\n" + resIMC + "\n\nSi usted se encuentra en este grupo de riesgo, no deber�a postergar, por ning�n motivo, el tomar medidas preventivas. En este caso lo pueden ayudar consejos e instrucciones de expertos para cambiar su estilo de vida, los cuales puede aplicarlos usted mismo. Recurra a ayuda profesional si nota que de esa manera no se puede ayudar.");
    //                    break;
    //                case "4":
    //                    alert("Riesgo Alto\n\n" + resIMC + "\n\nSu nivel de riesgo es muy alto: una tercera parte de los pacientes que corresponden a este grupo de riesgo contraen diabetes en los pr�ximos 10 a�os. El subestimar esta situaci�n puede traer graves consecuencias. Lo mejor ser�a recurrir a ayuda profesional. Haga una prueba de glucemia (az�car en la sangre) en una farmacia y vaya a hacerse ex�menes m�dicos (checkup a partir de los 35).");
    //                    break;
    //                case "5":
    //                    alert("Riesgo Muy Alto\n\n" + resIMC + "\n\nExiste la necesidad de actuar inmediatamente, ya que es muy posible que usted ya sufra de diabetes. Eso pasa con el 35 por ciento de las personas que se encuentran sobre los 20 puntos. Una simple prueba de glucemia en su farmacia m�s cercana, por ejemplo, puede servir de ayuda como una informaci�n adicional. De todas formas, �sta no reemplaza un diagn�stico del laboratorio para descartar una diabetes ya existente. Por esta raz�n deber�a solicitar una consulta m�dica, inmediatamente.");
    //                    break;
    //            }
    //            //$(popup).popup("open");
    //            //alert(data.msg + ": " + resultado);
    //            //window.location = "index.html";
    //        } else {
    //            alert(data.msg + ": " + resultado);
    //        }
    //    }
    //});
}