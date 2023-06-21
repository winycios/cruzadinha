var contador = 0;
console.log(contador);

function Task_memoria() {
    var memoria = memoria_M.value + memoria_E.value + memoria_M2.value + memoria_O.value + memoria_R.value + memoria_I.value + memoria_A.value + memoria_D.value + memoria_E2.value + memoria_M3.value + memoria_A2.value + memoria_S.value + memoria_S2.value + memoria_A3.value;

    memoria = memoria.toLowerCase();

    if (memoria == "memoriademassa") {

        // caso a palavra esteja correta , a caixa será pintada de verde e terá o campo será desabilitado
        memoria_M.style.backgroundColor = "#6dff96", memoria_M.style.pointerEvents = "none";
        memoria_E.style.backgroundColor = "#6dff96", memoria_E.style.pointerEvents = "none";
        memoria_M2.style.backgroundColor = "#6dff96", memoria_M2.style.pointerEvents = "none";
        memoria_O.style.backgroundColor = "#6dff96", memoria_O.style.pointerEvents = "none";
        memoria_R.style.backgroundColor = "#6dff96", memoria_R.style.pointerEvents = "none";
        memoria_I.style.backgroundColor = "#6dff96", memoria_I.style.pointerEvents = "none";
        memoria_A.style.backgroundColor = "#6dff96", memoria_A.style.pointerEvents = "none";
        memoria_D.style.backgroundColor = "#6dff96", memoria_D.style.pointerEvents = "none";
        memoria_E2.style.backgroundColor = "#6dff96", memoria_E2.style.pointerEvents = "none";
        memoria_M3.style.backgroundColor = "#6dff96", memoria_M3.style.pointerEvents = "none";
        memoria_A2.style.backgroundColor = "#6dff96", memoria_A2.style.pointerEvents = "none";
        memoria_S.style.backgroundColor = "#6dff96", memoria_S.style.pointerEvents = "none";
        memoria_S2.style.backgroundColor = "#6dff96", memoria_S2.style.pointerEvents = "none";
        memoria_A3.style.backgroundColor = "#6dff96", memoria_A3.style.pointerEvents = "none";

        pala_memoria.style.textDecoration = "line-through" //funcionalidade para caso o usuario acertar a resposta, risca a pergunta daquela resposta.
        pala_memoria.style.color = "black"

        // contador de respostas//
        contador += 1;

    } else if (memoria.length < 14) {
        memoria_M.style.backgroundColor = "white";
        memoria_E.style.backgroundColor = "white";
        memoria_M2.style.backgroundColor = "white";
        memoria_O.style.backgroundColor = "white";
        memoria_R.style.backgroundColor = "white";
        memoria_I.style.backgroundColor = "white";
        memoria_A.style.backgroundColor = "white";
        memoria_D.style.backgroundColor = "white";
        memoria_E2.style.backgroundColor = "white";
        memoria_M3.style.backgroundColor = "white";
        memoria_A2.style.backgroundColor = "white";
        memoria_S.style.backgroundColor = "white";
        memoria_S2.style.backgroundColor = "white";
        memoria_A3.style.backgroundColor = "white";

        pala_memoria.style.textDecoration = "none"

    } else {

        memoria_M.style.backgroundColor = "red", memoria_M.style.pointerEvents = "auto";
        memoria_E.style.backgroundColor = "red", memoria_E.style.pointerEvents = "auto";
        memoria_M2.style.backgroundColor = "red", memoria_M2.style.pointerEvents = "auto";
        memoria_O.style.backgroundColor = "red", memoria_O.style.pointerEvents = "auto";
        memoria_R.style.backgroundColor = "red", memoria_R.style.pointerEvents = "auto";
        memoria_I.style.backgroundColor = "red", memoria_I.style.pointerEvents = "auto";
        memoria_A.style.backgroundColor = "red", memoria_A.style.pointerEvents = "auto";
        memoria_D.style.backgroundColor = "red", memoria_D.style.pointerEvents = "auto";
        memoria_E2.style.backgroundColor = "red", memoria_E2.style.pointerEvents = "auto";
        memoria_M3.style.backgroundColor = "red", memoria_M3.style.pointerEvents = "auto";
        memoria_A2.style.backgroundColor = "red", memoria_A2.style.pointerEvents = "auto";
        memoria_S.style.backgroundColor = "red", memoria_S.style.pointerEvents = "auto";
        memoria_S2.style.backgroundColor = "red", memoria_S2.style.pointerEvents = "auto";
        memoria_A3.style.backgroundColor = "red", memoria_A3.style.pointerEvents = "auto";

        pala_memoria.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }

}

function Task_cache() {

    var cache = cache_C.value + memoria_A3.value + cache_C2.value + cache_H.value + cache_E.value;

    cache = cache.toLowerCase();

    if (cache == "cache") {

        cache_C.style.backgroundColor = "#6dff96", cache_C.style.pointerEvents = 'none';
        memoria_A3.style.backgroundColor = "#6dff96", memoria_A3.style.pointerEvents = 'none';
        cache_C2.style.backgroundColor = "#6dff96", cache_C2.style.pointerEvents = 'none';
        cache_H.style.backgroundColor = "#6dff96", cache_H.style.pointerEvents = 'none';
        cache_E.style.backgroundColor = "#6dff96", cache_E.style.pointerEvents = 'none';

        pala_cache.style.textDecoration = "line-through"
        pala_cache.style.color = "black"

        contador += 1;

    } else if (cache.length < 5) {
        cache_C.style.backgroundColor = "white";
        memoria_A3.style.backgroundColor = "white";
        cache_C2.style.backgroundColor = "white";
        cache_H.style.backgroundColor = "white";
        cache_E.style.backgroundColor = "white";

        pala_cache.style.textDecoration = "none"

    } else {

        cache_C.style.backgroundColor = "red", cache_C.style.pointerEvents = "auto";
        memoria_A3.style.backgroundColor = "red", memoria_A3.style.pointerEvents = "auto";
        cache_C2.style.backgroundColor = "red", cache_C2.style.pointerEvents = "auto";
        cache_H.style.backgroundColor = "red", cache_H.style.pointerEvents = "auto";
        cache_E.style.backgroundColor = "red", cache_E.style.pointerEvents = "auto";


        pala_cache.style.textDecoration = "none"

    }


    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}


function Task_registradores() {


    var registradores = registrador_R.value + registrador_E.value + registrador_G.value + registrador_I.value + registrador_S.value + registrador_T.value + registrador_R2.value + memoria_A.value + registrador_D.value + registrador_O.value + registrador_R3.value + registrador_E2.value + registrador_S2.value;

    registradores = registradores.toLowerCase();

    if (registradores == "registradores") {
        registrador_R.style.backgroundColor = "#6dff96", registrador_R.style.pointerEvents = "none";
        registrador_E.style.backgroundColor = "#6dff96", registrador_E.style.pointerEvents = "none";
        registrador_G.style.backgroundColor = "#6dff96", registrador_G.style.pointerEvents = "none";
        registrador_I.style.backgroundColor = "#6dff96", registrador_I.style.pointerEvents = "none";
        registrador_S.style.backgroundColor = "#6dff96", registrador_S.style.pointerEvents = "none";
        registrador_T.style.backgroundColor = "#6dff96", registrador_T.style.pointerEvents = "none";
        registrador_R2.style.backgroundColor = "#6dff96", registrador_R2.style.pointerEvents = "none";
        memoria_A.style.backgroundColor = "#6dff96", memoria_A.style.pointerEvents = "none";
        registrador_D.style.backgroundColor = "#6dff96", registrador_D.style.pointerEvents = "none";
        registrador_O.style.backgroundColor = "#6dff96", registrador_O.style.pointerEvents = "none";
        registrador_R3.style.backgroundColor = "#6dff96", registrador_R3.style.pointerEvents = "none";
        registrador_E2.style.backgroundColor = "#6dff96", registrador_E2.style.pointerEvents = "none";
        registrador_S2.style.backgroundColor = "#6dff96", registrador_S2.style.pointerEvents = "none";

        pala_registradores.style.textDecoration = "line-through";
        pala_registradores.style.color = "black"
        contador += 1;

    } else if (registradores.length < 13) {
        registrador_R.style.backgroundColor = "white"
        registrador_E.style.backgroundColor = "white"
        registrador_G.style.backgroundColor = "white"
        registrador_I.style.backgroundColor = "white"
        registrador_S.style.backgroundColor = "white"
        registrador_T.style.backgroundColor = "white"
        registrador_R2.style.backgroundColor = "white"
        memoria_A.style.backgroundColor = "white"
        registrador_D.style.backgroundColor = "white"
        registrador_O.style.backgroundColor = "white"
        registrador_R3.style.backgroundColor = "white"
        registrador_E2.style.backgroundColor = "white"
        registrador_S2.style.backgroundColor = "white"

        pala_registradores.style.textDecoration = "none"

    } else {
        registrador_R.style.backgroundColor = "red", registrador_R.style.pointerEvents = "auto";
        registrador_E.style.backgroundColor = "red", registrador_E.style.pointerEvents = "auto";
        registrador_G.style.backgroundColor = "red", registrador_G.style.pointerEvents = "auto";
        registrador_I.style.backgroundColor = "red", registrador_I.style.pointerEvents = "auto";
        registrador_S.style.backgroundColor = "red", registrador_S.style.pointerEvents = "auto";
        registrador_T.style.backgroundColor = "red", registrador_T.style.pointerEvents = "auto";
        registrador_R2.style.backgroundColor = "red", registrador_R2.style.pointerEvents = "auto";
        memoria_A.style.backgroundColor = "red", memoria_A.style.pointerEvents = "auto";
        registrador_D.style.backgroundColor = "red", registrador_D.style.pointerEvents = "auto";
        registrador_O.style.backgroundColor = "red", registrador_O.style.pointerEvents = "auto";
        registrador_R3.style.backgroundColor = "red", registrador_R3.style.pointerEvents = "auto";
        registrador_E2.style.backgroundColor = "red", registrador_E2.style.pointerEvents = "auto";
        registrador_S2.style.backgroundColor = "red", registrador_S2.style.pointerEvents = "auto";

        pala_registradores.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_i5() {

    var i5 = registrador_I.value + i5_5.value;

    i5 = i5.toLowerCase();

    if (i5 == "i5") {

        registrador_I.style.backgroundColor = "#6dff96", registrador_I.style.pointerEvents = "none";
        i5_5.style.backgroundColor = "#6dff96", i5_5.style.pointerEvents = "none";

        pala_i5.style.textDecoration = "line-through"
        pala_i5.style.color = "black"

        contador += 1;

    } else if (i5.length < 2) {
        registrador_I.style.backgroundColor = "white";
        i5_5.style.backgroundColor = "white";

        pala_i5.style.textDecoration = "none"

    } else {

        registrador_I.style.backgroundColor = "red", registrador_I.style.pointerEvents = "auto";
        i5_5.style.backgroundColor = "red", i5_5.style.pointerEvents = "auto";


        pala_i5.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_i7() {

    var i7 = registrador_I.value + i7_7.value;

    i7 = i7.toLowerCase();

    if (i7 == "i7") {

        registrador_I.style.backgroundColor = "#6dff96", registrador_I.style.pointerEvents = "none";
        i7_7.style.backgroundColor = "#6dff96", i7_7.style.pointerEvents = "none";

        contador += 1;

        pala_i7.style.textDecoration = "line-through"
        pala_i7.style.color = "black"

    } else if (i7.length < 2) {
        registrador_I.style.backgroundColor = "white";
        i7_7.style.backgroundColor = "white";

        pala_i7.style.textDecoration = "none"

    } else {

        registrador_I.style.backgroundColor = "red", registrador_I.style.pointerEvents = "auto";
        i7_7.style.backgroundColor = "red", i7_7.style.pointerEvents = "auto";


        pala_i7.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_cs() {

    var cs = cs_C.value + registrador_S2.value;

    cs = cs.toLowerCase();

    if (cs == "cs") {

        registrador_S2.style.backgroundColor = "#6dff96", registrador_S2.style.pointerEvents = "none";
        cs_C.style.backgroundColor = "#6dff96", cs_C.style.pointerEvents = "none";

        pala_cs.style.textDecoration = "line-through"
        pala_cs.style.color = "black"

        contador += 1;

    } else if (cs.length < 2) {
        registrador_S2.style.backgroundColor = "white";
        cs_C.style.backgroundColor = "white";

        pala_cs.style.textDecoration = "none"

    } else {

        registrador_S2.style.backgroundColor = "red", registrador_S2.style.pointerEvents = "auto";
        cs_C.style.backgroundColor = "red", cs_C.style.pointerEvents = "auto";


        pala_cs.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_eprom() {

    var eprom = memoria_E.value + eprom_P.value + eprom_R.value + eprom_O.value + eprom_M.value;

    eprom = eprom.toLowerCase();

    if (eprom == "eprom") {

        memoria_E.style.backgroundColor = "#6dff96", memoria_E.style.pointerEvents = "none";
        eprom_P.style.backgroundColor = "#6dff96", eprom_P.style.pointerEvents = "none";
        eprom_R.style.backgroundColor = "#6dff96", eprom_R.style.pointerEvents = "none";
        eprom_O.style.backgroundColor = "#6dff96", eprom_O.style.pointerEvents = "none";
        eprom_M.style.backgroundColor = "#6dff96", eprom_M.style.pointerEvents = "none";

        pala_eprom.style.textDecoration = "line-through"
        pala_eprom.style.color = "black"
        contador += 1;

    } else if (eprom.length < 5) {

        memoria_E.style.backgroundColor = "white";
        eprom_P.style.backgroundColor = "white";
        eprom_R.style.backgroundColor = "white";
        eprom_O.style.backgroundColor = "white";
        eprom_M.style.backgroundColor = "white";

        pala_eprom.style.textDecoration = "none"

    } else {

        memoria_E.style.backgroundColor = "red", memoria_E.style.pointerEvents = "auto";
        eprom_P.style.backgroundColor = "red", eprom_P.style.pointerEvents = "auto";
        eprom_R.style.backgroundColor = "red", eprom_R.style.pointerEvents = "auto";
        eprom_O.style.backgroundColor = "red", eprom_O.style.pointerEvents = "auto";
        eprom_M.style.backgroundColor = "red", eprom_M.style.pointerEvents = "auto";

        pala_eprom.style.textDecoration = "none"

    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_ram() {


    var ram = ram_R.value + ram_A.value + eprom_M.value;

    ram = ram.toLowerCase();

    if (ram == "ram") {
        ram_R.style.backgroundColor = "#6dff96", ram_R.style.pointerEvents = "none";
        ram_A.style.backgroundColor = "#6dff96", ram_A.style.pointerEvents = "none";
        eprom_M.style.backgroundColor = "#6dff96", eprom_M.style.pointerEvents = "none";

        pala_ram.style.textDecoration = "line-through"
        pala_ram.style.color = "black"
        contador += 1;

    } else if (ram.length < 3) {
        ram_R.style.backgroundColor = "white"
        ram_A.style.backgroundColor = "white"
        eprom_M.style.backgroundColor = "white"

        pala_ram.style.textDecoration = "none"
    } else {
        ram_R.style.backgroundColor = "red", ram_R.style.pointerEvents = "auto";
        ram_A.style.backgroundColor = "red", ram_A.style.pointerEvents = "auto";
        eprom_M.style.backgroundColor = "red", eprom_M.style.pointerEvents = "auto";

        pala_ram.style.textDecoration = "none"

    }
    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_rom() {


    var rom = memoria_R.value + rom_O.value + rom_M.value;

    rom = rom.toLowerCase();

    if (rom == "rom") {
        memoria_R.style.backgroundColor = "#6dff96", memoria_R.style.pointerEvents = "none";
        rom_O.style.backgroundColor = "#6dff96", rom_O.style.pointerEvents = "none";
        rom_M.style.backgroundColor = "#6dff96", rom_M.style.pointerEvents = "none";

        pala_rom.style.textDecoration = "line-through"
        pala_rom.style.color = "black"
        contador += 1;

    } else if (rom.length < 3) {
        memoria_R.style.backgroundColor = "white"
        rom_O.style.backgroundColor = "white"
        rom_M.style.backgroundColor = "white"

        pala_rom.style.textDecoration = "none"
    } else {
        memoria_R.style.backgroundColor = "red", memoria_R.style.pointerEvents = "auto";
        rom_O.style.backgroundColor = "red", rom_O.style.pointerEvents = "auto";
        rom_M.style.backgroundColor = "red", rom_M.style.pointerEvents = "auto";

        pala_rom.style.textDecoration = "none"

    }
    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }

}

function Task_ula() {


    var ula = ula_U.value + ula_L.value + ram_A.value;

    ula = ula.toLowerCase();

    if (ula == "ula") {
        ula_U.style.backgroundColor = "#6dff96", ula_U.style.pointerEvents = "none";
        ula_L.style.backgroundColor = "#6dff96", ula_L.style.pointerEvents = "none";
        ram_A.style.backgroundColor = "#6dff96", ram_A.style.pointerEvents = "none";

        pala_ula.style.textDecoration = "line-through";
        pala_ula.style.color = "black"
        contador += 1;

    } else if (ula.length < 3) {
        ula_U.style.backgroundColor = "white"
        ula_L.style.backgroundColor = "white"
        ram_A.style.backgroundColor = "white"

        pala_ula.style.textDecoration = "none"
    } else {
        ula_U.style.backgroundColor = "red", ula_U.style.pointerEvents = "auto"
        ula_L.style.backgroundColor = "red", ula_L.style.pointerEvents = "auto"
        ram_A.style.backgroundColor = "red", ram_A.style.pointerEvents = "auto"

        pala_ula.style.textDecoration = "none"

    }
    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}


function Task_cpu() {

    var cpu = cpu_C.value + cpu_P.value + ula_U.value;

    cpu = cpu.toLowerCase();

    if (cpu == "cpu") {
        cpu_C.style.backgroundColor = "#6dff96", cpu_C.style.pointerEvents = "none";
        cpu_P.style.backgroundColor = "#6dff96", cpu_P.style.pointerEvents = "none";
        ula_U.style.backgroundColor = "#6dff96", ula_U.style.pointerEvents = "none";

        pala_cpu.style.textDecoration = "line-through";
        pala_cpu.style.color = "black"
        contador += 1;

    } else if (cpu.length < 3) {
        cpu_C.style.backgroundColor = "white"
        cpu_P.style.backgroundColor = "white"
        ula_U.style.backgroundColor = "white"

        pala_cpu.style.textDecoration = "none"
    } else {
        cpu_C.style.backgroundColor = "red", cpu_C.style.pointerEvents = "auto";
        cpu_P.style.backgroundColor = "red", cpu_P.style.pointerEvents = "auto";
        ula_U.style.backgroundColor = "red", ula_U.style.pointerEvents = "auto";

        pala_cpu.style.textDecoration = "none"
    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_flash() {

    var flash = flash_F.value + flash_L.value + memoria_A2.value + flash_S.value + flash_H.value;

    flash = flash.toLowerCase();

    if (flash == "flash") {
        flash_F.style.backgroundColor = "#6dff96", flash_F.style.pointerEvents = "none";
        flash_L.style.backgroundColor = "#6dff96", flash_L.style.pointerEvents = "none";
        memoria_A2.style.backgroundColor = "#6dff96", memoria_A2.style.pointerEvents = "none";
        flash_S.style.backgroundColor = "#6dff96", flash_S.style.pointerEvents = "none";
        flash_H.style.backgroundColor = "#6dff96", flash_H.style.pointerEvents = "none";

        pala_flash.style.textDecoration = "line-through";
        pala_flash.style.color = "black"
        contador += 1;

    } else if (flash.length < 5) {
        flash_F.style.backgroundColor = "white"
        flash_L.style.backgroundColor = "white"
        memoria_A2.style.backgroundColor = "white"
        flash_S.style.backgroundColor = "white"
        flash_H.style.backgroundColor = "white"

        pala_flash.style.textDecoration = "none"
    } else {
        flash_F.style.backgroundColor = "red", flash_F.style.pointerEvents = "auto";
        flash_L.style.backgroundColor = "red", flash_L.style.pointerEvents = "auto";
        memoria_A2.style.backgroundColor = "red", memoria_A2.style.pointerEvents = "auto";
        flash_S.style.backgroundColor = "red", flash_S.style.pointerEvents = "auto";
        flash_H.style.backgroundColor = "red", flash_H.style.pointerEvents = "auto";

        pala_flash.style.textDecoration = "none"
    }
    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_threads() {

    var threads = threads_T.value + threads_H.value + registrador_R.value + threads_E.value + threads_A.value + threads_D.value + threads_S.value;

    threads = threads.toLowerCase();

    if (threads == "threads") {
        threads_T.style.backgroundColor = "#6dff96", threads_T.style.pointerEvents = "none";
        threads_H.style.backgroundColor = "#6dff96", threads_H.style.pointerEvents = "none";
        registrador_R.style.backgroundColor = "#6dff96", registrador_R.style.pointerEvents = "none";
        threads_E.style.backgroundColor = "#6dff96", threads_E.style.pointerEvents = "none";
        threads_A.style.backgroundColor = "#6dff96", threads_A.style.pointerEvents = "none";
        threads_D.style.backgroundColor = "#6dff96", threads_D.style.pointerEvents = "none";
        threads_S.style.backgroundColor = "#6dff96", threads_S.style.pointerEvents = "none";

        pala_threads.style.textDecoration = "line-through";
        pala_threads.style.color = "black"
        contador += 1;

    } else if (threads.length < 7) {
        threads_T.style.backgroundColor = "white"
        threads_H.style.backgroundColor = "white"
        registrador_R.style.backgroundColor = "white"
        threads_E.style.backgroundColor = "white"
        threads_A.style.backgroundColor = "white"
        threads_D.style.backgroundColor = "white"
        threads_S.style.backgroundColor = "white"

        pala_threads.style.textDecoration = "none"
    } else {
        threads_T.style.backgroundColor = "red", threads_T.style.pointerEvents = "auto";
        threads_H.style.backgroundColor = "red", threads_H.style.pointerEvents = "auto";
        registrador_R.style.backgroundColor = "red", registrador_R.style.pointerEvents = "auto";
        threads_E.style.backgroundColor = "red", threads_E.style.pointerEvents = "auto";
        threads_A.style.backgroundColor = "red", threads_A.style.pointerEvents = "auto";
        threads_D.style.backgroundColor = "red", threads_D.style.pointerEvents = "auto";
        threads_S.style.backgroundColor = "red", threads_S.style.pointerEvents = "auto";

        pala_threads.style.textDecoration = "none"
    }
    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_data() {

    var data = threads_D.value + data_A.value + data_T.value + data_A2.value + data_B.value + data_U.value + data_S.value;

    data = data.toLowerCase();

    if (data == "databus") {
        threads_D.style.backgroundColor = "#6dff96", threads_D.style.pointerEvents = "none";
        data_A.style.backgroundColor = "#6dff96", data_A.style.pointerEvents = "none";
        data_T.style.backgroundColor = "#6dff96", data_T.style.pointerEvents = "none";
        data_A2.style.backgroundColor = "#6dff96", data_A2.style.pointerEvents = "none";
        data_B.style.backgroundColor = "#6dff96", data_B.style.pointerEvents = "none";
        data_U.style.backgroundColor = "#6dff96", data_U.style.pointerEvents = "none";
        data_S.style.backgroundColor = "#6dff96", data_S.style.pointerEvents = "none";


        pala_data.style.textDecoration = "line-through";
        pala_data.style.color = "black"
        contador += 1;

    } else if (data.length < 7) {
        threads_D.style.backgroundColor = "white"
        data_A.style.backgroundColor = "white"
        data_T.style.backgroundColor = "white"
        data_A2.style.backgroundColor = "white"
        data_B.style.backgroundColor = "white"
        data_U.style.backgroundColor = "white"
        data_S.style.backgroundColor = "white"


        pala_data.style.textDecoration = "none"
    } else {
        threads_D.style.backgroundColor = "red", threads_D.style.pointerEvents = "auto";
        data_A.style.backgroundColor = "red", data_A.style.pointerEvents = "auto";
        data_T.style.backgroundColor = "red", data_T.style.pointerEvents = "auto";
        data_A2.style.backgroundColor = "red", data_A2.style.pointerEvents = "auto";
        data_B.style.backgroundColor = "red", data_B.style.pointerEvents = "auto";
        data_U.style.backgroundColor = "red", data_U.style.pointerEvents = "auto";
        data_S.style.backgroundColor = "red", data_S.style.pointerEvents = "auto";

        pala_data.style.textDecoration = "none"
    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function Task_address() {

    var address = address_A.value + address_D.value + address_D2.value + address_R.value + address_E.value + address_S.value + memoria_S2.value + address_B.value + address_U.value + address_S2.value;

    address = address.toLowerCase();

    if (address == "addressbus") {
        address_A.style.backgroundColor = "#6dff96", address_A.style.pointerEvents = "none";
        address_D.style.backgroundColor = "#6dff96", address_D.style.pointerEvents = "none";
        address_D2.style.backgroundColor = "#6dff96", address_D2.style.pointerEvents = "none";
        address_R.style.backgroundColor = "#6dff96", address_R.style.pointerEvents = "none";
        address_E.style.backgroundColor = "#6dff96", address_E.style.pointerEvents = "none";
        address_S.style.backgroundColor = "#6dff96", address_S.style.pointerEvents = "none";
        memoria_S2.style.backgroundColor = "#6dff96", memoria_S2.style.pointerEvents = "none";
        address_B.style.backgroundColor = "#6dff96", address_B.style.pointerEvents = "none";
        address_U.style.backgroundColor = "#6dff96", address_U.style.pointerEvents = "none";
        address_S2.style.backgroundColor = "#6dff96", address_S2.style.pointerEvents = "none";


        pala_address.style.textDecoration = "line-through"
        pala_address.style.color = "black"
        contador += 1;


    } else if (address.length < 10) {
        address_A.style.backgroundColor = "white"
        address_D.style.backgroundColor = "white"
        address_D2.style.backgroundColor = "white"
        address_R.style.backgroundColor = "white"
        address_E.style.backgroundColor = "white"
        address_S.style.backgroundColor = "white"
        memoria_S2.style.backgroundColor = "white"
        address_B.style.backgroundColor = "white"
        address_U.style.backgroundColor = "white"
        address_S2.style.backgroundColor = "white"


        pala_address.style.textDecoration = "none"
    } else {
        address_A.style.backgroundColor = "red", address_A.style.pointerEvents = "auto";
        address_D.style.backgroundColor = "red", address_D.style.pointerEvents = "auto";
        address_D2.style.backgroundColor = "red", address_D2.style.pointerEvents = "auto";
        address_R.style.backgroundColor = "red", address_R.style.pointerEvents = "auto";
        address_E.style.backgroundColor = "red", address_E.style.pointerEvents = "auto";
        address_S.style.backgroundColor = "red", address_S.style.pointerEvents = "auto";
        memoria_S2.style.backgroundColor = "red", memoria_S2.style.pointerEvents = "auto";
        address_B.style.backgroundColor = "red", address_B.style.pointerEvents = "auto";
        address_U.style.backgroundColor = "red", address_U.style.pointerEvents = "auto";
        address_S2.style.backgroundColor = "red", address_S2.style.pointerEvents = "auto";

        pala_address.style.textDecoration = "none"
    };

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    };
}

function Task_dual() {

    var dual = dual_D.value + dual_U.value + dual_A.value + dual_L.value + dual_C.value + dual_0.value + dual_R.value + registrador_E2.value;

    dual = dual.toLowerCase();

    if (dual == "dualcore") {
        dual_D.style.backgroundColor = "#6dff96", dual_D.style.pointerEvents = "none";
        dual_U.style.backgroundColor = "#6dff96", dual_U.style.pointerEvents = "none";
        dual_A.style.backgroundColor = "#6dff96", dual_A.style.pointerEvents = "none";
        dual_L.style.backgroundColor = "#6dff96", dual_L.style.pointerEvents = "none";
        dual_C.style.backgroundColor = "#6dff96", dual_C.style.pointerEvents = "none";
        dual_0.style.backgroundColor = "#6dff96", dual_0.style.pointerEvents = "none";
        dual_R.style.backgroundColor = "#6dff96", dual_R.style.pointerEvents = "none";
        registrador_E2.style.backgroundColor = "#6dff96", registrador_E2.style.pointerEvents = "none";


        contador += 1;
        pala_dual.style.textDecoration = "line-through"
        pala_dual.style.color = "black"

    } else if (dual.length < 8) {
        dual_D.style.backgroundColor = "white"
        dual_U.style.backgroundColor = "white"
        dual_A.style.backgroundColor = "white"
        dual_L.style.backgroundColor = "white"
        dual_C.style.backgroundColor = "white"
        dual_0.style.backgroundColor = "white"
        dual_R.style.backgroundColor = "white"
        registrador_E2.style.backgroundColor = "white"


        pala_dual.style.textDecoration = "none"
    } else {
        dual_D.style.backgroundColor = "red", dual_D.style.pointerEvents = "auto";
        dual_U.style.backgroundColor = "red", dual_U.style.pointerEvents = "auto";
        dual_A.style.backgroundColor = "red", dual_A.style.pointerEvents = "auto";
        dual_L.style.backgroundColor = "red", dual_L.style.pointerEvents = "auto";
        dual_C.style.backgroundColor = "red", dual_C.style.pointerEvents = "auto";
        dual_0.style.backgroundColor = "red", dual_0.style.pointerEvents = "auto";
        dual_R.style.backgroundColor = "red", dual_R.style.pointerEvents = "auto";
        registrador_E2.style.backgroundColor = "red", registrador_E2.style.pointerEvents = "auto";


        pala_dual.style.textDecoration = "none"
    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}


function Task_quad() {

    var quad = quad_Q.value + quad_U.value + dual_A.value + quad_D.value + quad_C.value + quad_O.value + quad_R.value + quad_E.value;

    quad = quad.toLowerCase();

    if (quad == "quadcore") {
        quad_Q.style.backgroundColor = "#6dff96", quad_Q.style.pointerEvents = "none";
        quad_U.style.backgroundColor = "#6dff96", quad_U.style.pointerEvents = "none";
        dual_A.style.backgroundColor = "#6dff96", dual_A.style.pointerEvents = "none";
        quad_D.style.backgroundColor = "#6dff96", quad_D.style.pointerEvents = "none";
        quad_C.style.backgroundColor = "#6dff96", quad_C.style.pointerEvents = "none";
        quad_O.style.backgroundColor = "#6dff96", quad_O.style.pointerEvents = "none";
        quad_R.style.backgroundColor = "#6dff96", quad_R.style.pointerEvents = "none";
        quad_E.style.backgroundColor = "#6dff96", quad_E.style.pointerEvents = "none";


        pala_quad.style.textDecoration = "line-through";
        pala_quad.style.color = "black"
        contador += 1;

    } else if (quad.length < 8) {
        quad_Q.style.backgroundColor = "white"
        quad_U.style.backgroundColor = "white"
        dual_A.style.backgroundColor = "white"
        quad_D.style.backgroundColor = "white"
        quad_C.style.backgroundColor = "white"
        quad_O.style.backgroundColor = "white"
        quad_R.style.backgroundColor = "white"
        quad_E.style.backgroundColor = "white"


        pala_quad.style.textDecoration = "none"
    } else {
        quad_Q.style.backgroundColor = "red", quad_Q.style.pointerEvents = "auto";
        quad_U.style.backgroundColor = "red", quad_U.style.pointerEvents = "auto";
        dual_A.style.backgroundColor = "red", dual_A.style.pointerEvents = "auto";
        quad_D.style.backgroundColor = "red", quad_D.style.pointerEvents = "auto";
        quad_C.style.backgroundColor = "red", quad_C.style.pointerEvents = "auto";
        quad_O.style.backgroundColor = "red", quad_O.style.pointerEvents = "auto";
        quad_R.style.backgroundColor = "red", quad_R.style.pointerEvents = "auto";
        quad_E.style.backgroundColor = "red", quad_E.style.pointerEvents = "auto";


        pala_quad.style.textDecoration = "none"
    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}


function Task_dma() {

    var dma = dual_D.value + dma_M.value + dma_A.value;

    dma = dma.toLowerCase();

    if (dma == "dma") {
        dual_D.style.backgroundColor = "#6dff96", dual_D.style.pointerEvents = "none";
        dma_M.style.backgroundColor = "#6dff96", dma_M.style.pointerEvents = "none";
        dma_A.style.backgroundColor = "#6dff96", dma_A.style.pointerEvents = "none";

        pala_dma.style.textDecoration = "line-through";
        pala_dma.style.color = "black"
        contador += 1;

    } else if (dma.length < 3) {
        dual_D.style.backgroundColor = "white"
        dma_M.style.backgroundColor = "white"
        dma_A.style.backgroundColor = "white"

        pala_dma.style.textDecoration = "none"
    } else {
        dual_D.style.backgroundColor = "red", dual_D.style.pointerEvents = "auto";
        dma_M.style.backgroundColor = "red", dma_M.style.pointerEvents = "auto";
        dma_A.style.backgroundColor = "red", dma_A.style.pointerEvents = "auto";

        pala_dma.style.textDecoration = "none"
    }

    if (contador == 18) {

        container.style.display = "flex";
        animate();
    }
}

function fechamento() {
    
    
    container.style.display = "none";
    botao.style.display = "block";
}

/* efeito de fogos de artificio*/
class Fogo {
    constructor(pos, targetY, radius, color, speed) {
        this.radius = radius;
        this.pos = pos;
        this.targetY = targetY;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.draw();
        if (this.pos.y > this.targetY) {
            this.pos.y -= this.speed;
        }
    }
}

class Particula {
    constructor(pos, radius, color, speed) {
        this.pos = pos;
        this.radius = radius;
        this.speed = speed;
        this.color = color;
        this.alpha = 1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.speed.x *= 0.99;
        this.speed.y *= 0.99;
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
        this.alpha -= 0.02;
        this.draw();
    }
}

const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

let fogos = [],
    particulas = [];

setInterval(() => {
    let radius = Math.floor(Math.random() * (10 - 5) + 5),
        pos = {
            x: Math.random() * canvas.width,
            y: canvas.height + radius
        },
        targetY = Math.random() * ((canvas.height - 20) - 20) + 20;
    color = `hsl(${Math.random() * 360}, 50%, 50%)`,
        speed = Math.floor(Math.random() * (25 - 20));

    fogos.push(new Fogo(pos, targetY, radius, color, speed));
}, 250);

function animate() {
    requestAnimationFrame(animate);
    // ctx.fillStyle = "transparent";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    fogos.forEach((fogo, index) => {
        if (fogo.yI <= fogo.yF) {
            setTimeout(() => {
                fogos.splice(index, 1);
            }, 0);
            for (let i = 0; i < fogo.radius * 8; i++) {
                let pos = fogo.pos,
                    radius = Math.random() * 2,
                    color = fogo.color,
                    speed = { x: (Math.random() - 0.5) * (Math.random() * 8), y: (Math.random() - 0.5) * (Math.random() * 8) };
                particulas.push(new Particula(pos, radius, color, speed));
            }
        } else {
            fogo.update();
        }
    });

    particulas.forEach((p, index) => {
        if (p.alpha <= 0) {
            particulas.splice(index, 1);
        } else {
            p.update();
        }
    });
}