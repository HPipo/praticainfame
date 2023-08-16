
let menu;

let resultado;

let año;

let mes;

function pesosNac(pesos) {
    resultado = pesos * 10000000000000
    alert(`Considerando que para convertir M$N en pesos tendrías que agregarle 13 ceros al peso actual, el resultado sería de:\n\n` + resultado +` M$N`)
    return
};

function presidenteAnexo(mes, año) {
    while (mes != 0 && año != 0) {
        if ((mes == 0) || (año == 0)) {
            break
        }
        else if (((mes <= 3) && ((año <= 1930))) || ((mes > 5) && (año >= 1943))){
            alert(`La Década Infame no transcurrió durante estas fechas`)
            break
        }
        else if (((mes > 3) && ((año >= 1930) && (año < 1932))) || ((mes <= 3) && (año == 1932))) {
            alert(`José Félix Benito Uriburu\n\n  José Félix Benito Uriburu (Salta, 20 de julio de 1868-París, 29 de abril de 1932) fue un militar, dictador y político argentino que alcanzó el grado de teniente general. El 6 de septiembre de 1930, encabezó una sublevación cívico-militar que derrocó al gobierno democrático del presidente Hipólito Yrigoyen, de la Unión Cívica Radical, constituyendo la primera ruptura exitosa del orden constitucional en Argentina después de setenta años de legalidad. Uriburu ocupó de facto la presidencia de la Nación Argentina, autodesignándose "Presidente del Gobierno Provisorio".\n  El gobierno de facto disolvió el Congreso e intervino doce de las entonces catorce provincias del país (con la excepción de San Luis y Entre Ríos, con gobiernos electos que adhirieron al golpe). Uriburu gobernó de este modo por decreto arrogándose los poderes ejecutivo y legislativo del país. Aunque en mayor medida compuesto por militares, el gobierno de facto integró progresivamente a una gran cantidad de civiles, la mayoría provenientes de la élite conservadora liberal opositora a Yrigoyen. Del mismo modo, varios sectores que apoyaron al principio la caída de Yrigoyen comenzaron a distanciarse de Uriburu en el transcurso del gobierno de facto por diversos motivos.\n  La dictadura de Uriburu reprimió con dureza la disidencia por parte de los grupos radicales, comunistas y anarquistas, y tuvo como objetivo último instaurar un régimen corporativista.`)
            break
        }
        else if (((mes > 3) && ((año >= 1932) && (año < 1938))) || ((mes <= 3) && (año == 1938))) {
            alert(`Agustín Pedro Justo\n\n  Agustín Pedro Justo (Concepción del Uruguay, 26 de febrero de 1876-Buenos Aires, 11 de enero de 1943) fue un ingeniero, militar, diplomático y político radical argentino. Fue presidente de su país entre 1932 y 1938. Su gobierno ocurrió durante la Década Infame, denominada así por la alta corrupción y fraude electoral que la caracterizó. Fue elegido en las elecciones de 1931, apoyado por la dictadura militar gobernante y los sectores políticos que integrarían poco después la Concordancia. Sobre su elección pesó la acusación de fraude electoral y proscripción de la candidatura de Marcelo T. de Alvear, líder del ala no golpista del radicalismo. Durante su gobierno tuvo la persistente oposición de los sectores yrigoyenistas de la Unión Cívica Radical.\n  Uno de los mayores logros de su mandato fue la destacada labor diplomática de su canciller, Carlos Saavedra Lamas, que le valió a este el Premio Nobel de la Paz. Pero esta labor fue empañada por constantes acusaciones de corrupción y por haber suscrito el Pacto Roca-Runciman, por el que se lo acusa de haber malnegociado intereses argentinos frente al Reino Unido. Su nombre sonó como candidato a un nuevo período durante el accidentado gobierno de Ramón Castillo pero su muerte, a los 66 años de edad, frustró sus esperanzas. Dejó a la historia un Estudio preliminar para las obras completas de Bartolomé Mitre, personaje a quien admiraba.`)
            break
        }
        else if (((mes > 3) && ((año >= 1938) && (año < 1942))) || ((mes <= 6) && (año == 1942))) {
            alert(`Roberto Marcelino Ortiz\n\n  Roberto Marcelino Ortiz (Buenos Aires, 24 de septiembre de 1886 - Ibidem; 15 de julio de 1942) fue un político argentino, diputado nacional por la entonces Capital Federal entre 1920 y 1924, ministro de Obras Públicas entre 1925 y 1928, ministro de Hacienda durante 1936 y 1937 y presidente de la Nación Argentina entre el 20 de febrero de 1938 hasta su renuncia el 27 de junio de 1942.\n  Ortiz perteneció a la Unión Cívica Radical (UCR) primero, y luego a la Unión Cívica Radical Antipersonalista (UCRA), la que a su vez fue el principal partido de la coalición conocida como la Concordancia, que tomó el poder de manera ilegítima en 1932, como continuación del golpe de Estado y la dictadura que derrocó al gobierno constitucional de Hipólito Yrigoyen. Ortiz sucedió en la presidencia al general Agustín P. Justo, de su mismo partido, en una elección fraudulenta. Durante su gobierno intentó impulsar, sin resultado, reformas que permitieran restablecer un régimen menos fraudulento. Con ese objetivo decretó la intervención la provincia de Buenos Aires, gobernada por el entonces caudillo demócrata (conservador) Manuel Fresco, quien integraba también la coalición gobernante.`)
            break
        }
        else if (((mes > 6) && ((año >= 1942) && (año < 1943))) || ((mes <= 5) && (año == 1943))) {
            alert(`Ramón Antonio Castillo\n\n  Ramón Antonio Castillo (Ancasti, Catamarca, 20 de noviembre de 1873 - Buenos Aires, 12 de octubre de 1944) fue un abogado, juez, docente y político argentino conservador perteneciente al Partido Demócrata Nacional. En 1938 llegó a la vicepresidencia tras el triunfo de Roberto Marcelino Ortiz y, al fallecer este en 1942, asumió como el 23.º presidente de la Nación Argentina. Fue derrocado por el golpe de Estado militar conocido como la Revolución del 43.\n La legitimidad del mandato de Roberto M. Ortiz y Ramón Castillo ha sido cuestionado en forma generalizada por los historiadores debido al fraude electoral masivo realizado en las elecciones de 1938, denunciado por todo el arco opositor a su gobierno. En 1940 el presidente Ortiz inició una campaña de restauración de la pureza electoral, provocando una reacción encontrada entre las fuerzas políticas del momento.`)
            break
        }
        else {
            alert(`Ingrese valor válido`)
            break
        }
    }

    return
};


function consultar() {
    while (menu != "ESC") {
        menu = prompt(`¡Bienvenido al archivo histórico de la Década Infame! \n¿Qué le gustaría saber sobre esta época?\n(Por favor, ingrese los números específicados)\n\n1- ¿Qué fue la Década Infame?\n2- ¿Cuáles fueron las causas del golpe de estado de 1930?\n3- ¿Qué gobernante estaba en esta fecha?\n4- Calculador de pesos moneda nacional a pesos actuales\n"ESC" para salir.`);
        switch (menu) {
            case "1":
                alert(` La Década Infame fue un período de la historia de la Argentina que comenzó el 6 de septiembre de 1930 con el golpe de Estado cívico-militar que derrocó al presidente radical Hipólito Yrigoyen, y finalizó el 4 de junio de 1943 con el golpe de Estado militar que derrocó al presidente conservador Ramón Castillo.\n  El nombre le fue dado por el periodista nacionalista José Luis Torres,* 1​ y ha sido ampliamente utilizado para denominar al período en la historiografía cercana tanto al radicalismo, como al peronismo, y el socialismo. La etapa también ha sido denominada como "restauración neoconservadora",, período de "restauración política” o "restauración conservadora”, "segunda república conservadora” y "la República imposible" (1930-1945).`)
                break;
            case "2":   
                alert(` Aunque los motivos son variados, podemos atribuir las razones al rechazo que generales y conservadores tenían al personalismo, a la oposición ante las reformas socioeconómicas y a la pesada crisis económica imperante durante la gestión del gobierno de Yrigoyen.`)
                break;
            case "3":
                presidenteAnexo(parseInt(prompt(`Ingrese el mes.\n(Ingrese 0 en el cuestionario para volver)`)), parseInt(prompt(`Ingrese el año.\n(Ingrese 0 en el cuestionario para volver)`)))
                break;
            case "4":
                pesosNac(prompt(`Ingrese el número deseado`))
                break;
            default:
                alert(`Ingrese valor válido`)
                break;
            case "ESC":
                alert('¡Nos vemos!');
        }
    }
};

consultar()

