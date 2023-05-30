function Task_memoria() {

    var memoria = memoria_M.value + memoria_E.value + memoria_M2.value + memoria_O.value + memoria_R.value + memoria_I.value + memoria_A.value + memoria_D.value + memoria_E2.value + memoria_M3.value + memoria_A2.value + memoria_S.value + memoria_S2.value + memoria_A3.value;

    memoria = memoria.toLowerCase();

    if (memoria == "memoriademassa") {

        memoria_M.style.backgroundColor = "#6dff96";
        memoria_E.style.backgroundColor = "#6dff96";
        memoria_M2.style.backgroundColor = "#6dff96";
        memoria_O.style.backgroundColor = "#6dff96";
        memoria_R.style.backgroundColor = "#6dff96";
        memoria_I.style.backgroundColor = "#6dff96";
        memoria_A.style.backgroundColor = "#6dff96";
        memoria_D.style.backgroundColor = "#6dff96";
        memoria_E2.style.backgroundColor = "#6dff96";
        memoria_M3.style.backgroundColor = "#6dff96";
        memoria_A2.style.backgroundColor = "#6dff96";
        memoria_S.style.backgroundColor = "#6dff96";
        memoria_S2.style.backgroundColor = "#6dff96";
        memoria_A3.style.backgroundColor = "#6dff96";

        pala_memoria.style.textDecoration = "line-through"

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

        memoria_M.style.backgroundColor = "red";
        memoria_E.style.backgroundColor = "red";
        memoria_M2.style.backgroundColor = "red";
        memoria_O.style.backgroundColor = "red";
        memoria_R.style.backgroundColor = "red";
        memoria_I.style.backgroundColor = "red";
        memoria_A.style.backgroundColor = "red";
        memoria_D.style.backgroundColor = "red";
        memoria_E2.style.backgroundColor = "red";
        memoria_M3.style.backgroundColor = "red";
        memoria_A2.style.backgroundColor = "red";
        memoria_S.style.backgroundColor = "red";
        memoria_S2.style.backgroundColor = "red";
        memoria_A3.style.backgroundColor = "red";

        pala_memoria.style.textDecoration = "none"

    }
}

function Task_cache() {

    var cache = cache_C.value + memoria_A3.value + cache_C2.value + cache_H.value + cache_E.value;

    cache = cache.toLowerCase();

    if (cache == "cache") {

        cache_C.style.backgroundColor = "#6dff96";
        memoria_A3.style.backgroundColor = "#6dff96";
        cache_C2.style.backgroundColor = "#6dff96";
        cache_H.style.backgroundColor = "#6dff96";
        cache_E.style.backgroundColor = "#6dff96";

        pala_cache.style.textDecoration = "line-through"

    } else if (cache.length < 5) {
        cache_C.style.backgroundColor = "white";
        memoria_A3.style.backgroundColor = "white";
        cache_C2.style.backgroundColor = "white";
        cache_H.style.backgroundColor = "white";
        cache_E.style.backgroundColor = "white";

        pala_cache.style.textDecoration = "none"

    } else {

        cache_C.style.backgroundColor = "red";
        memoria_A3.style.backgroundColor = "red";
        cache_C2.style.backgroundColor = "red";
        cache_H.style.backgroundColor = "red";
        cache_E.style.backgroundColor = "red";


        pala_cache.style.textDecoration = "none"

    }
}

function Task_registradores() {


    var registradores = registrador_R.value + registrador_E.value + registrador_G.value + registrador_I.value + registrador_S.value + registrador_T.value + registrador_R2.value + memoria_A.value + registrador_D.value + registrador_O.value + registrador_R3.value + registrador_E2.value + registrador_S2.value;

    registradores = registradores.toLowerCase();

    if (registradores == "registradores") {
        registrador_R.style.backgroundColor = "#6dff96"
        registrador_E.style.backgroundColor = "#6dff96"
        registrador_G.style.backgroundColor = "#6dff96"
        registrador_I.style.backgroundColor = "#6dff96"
        registrador_S.style.backgroundColor = "#6dff96"
        registrador_T.style.backgroundColor = "#6dff96"
        registrador_R2.style.backgroundColor = "#6dff96"
        memoria_A.style.backgroundColor = "#6dff96"
        registrador_D.style.backgroundColor = "#6dff96"
        registrador_O.style.backgroundColor = "#6dff96"
        registrador_R3.style.backgroundColor = "#6dff96"
        registrador_E2.style.backgroundColor = "#6dff96"
        registrador_S2.style.backgroundColor = "#6dff96"

        pala_registradores.style.textDecoration = "line-through"

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
        registrador_R.style.backgroundColor = "red"
        registrador_E.style.backgroundColor = "red"
        registrador_G.style.backgroundColor = "red"
        registrador_I.style.backgroundColor = "red"
        registrador_S.style.backgroundColor = "red"
        registrador_T.style.backgroundColor = "red"
        registrador_R2.style.backgroundColor = "red"
        memoria_A.style.backgroundColor = "red"
        registrador_D.style.backgroundColor = "red"
        registrador_O.style.backgroundColor = "red"
        registrador_R3.style.backgroundColor = "red"
        registrador_E2.style.backgroundColor = "red"
        registrador_S2.style.backgroundColor = "red"

        pala_registradores.style.textDecoration = "none"

    }
}

function Task_i5() {

    var i5 = registrador_I.value + i5_5.value;

    i5 = i5.toLowerCase();

    if (i5 == "i5") {

        registrador_I.style.backgroundColor = "#6dff96";
        i5_5.style.backgroundColor = "#6dff96";

        pala_i5.style.textDecoration = "line-through"

    } else if (i5.length < 2) {
        registrador_I.style.backgroundColor = "white";
        i5_5.style.backgroundColor = "white";

        pala_i5.style.textDecoration = "none"

    } else {

        registrador_I.style.backgroundColor = "red";
        i5_5.style.backgroundColor = "red";


        pala_i5.style.textDecoration = "none"

    }
}

function Task_i7() {

    var i7 = registrador_I.value + i7_7.value;

    i7 = i7.toLowerCase();

    if (i7 == "i7") {

        registrador_I.style.backgroundColor = "#6dff96";
        i7_7.style.backgroundColor = "#6dff96";

        pala_i7.style.textDecoration = "line-through"

    } else if (i7.length < 2) {
        registrador_I.style.backgroundColor = "white";
        i7_7.style.backgroundColor = "white";

        pala_i7.style.textDecoration = "none"

    } else {

        registrador_I.style.backgroundColor = "red";
        i7_7.style.backgroundColor = "red";


        pala_i7.style.textDecoration = "none"

    }
}

function Task_cs() {

    var cs = cs_C.value + registrador_S2.value;

    cs = cs.toLowerCase();

    if (cs == "cs") {

        registrador_S2.style.backgroundColor = "#6dff96";
        cs_C.style.backgroundColor = "#6dff96";

        pala_cs.style.textDecoration = "line-through"

    } else if (cs.length < 2) {
        registrador_S2.style.backgroundColor = "white";
        cs_C.style.backgroundColor = "white";

        pala_cs.style.textDecoration = "none"

    } else {

        registrador_S2.style.backgroundColor = "red";
        cs_C.style.backgroundColor = "red";


        pala_cs.style.textDecoration = "none"

    }
}

function Task_eprom() {

    var eprom = memoria_E.value + eprom_P.value + eprom_R.value + eprom_O.value + eprom_M.value;

    eprom = eprom.toLowerCase();

    if (eprom == "eprom") {

        memoria_E.style.backgroundColor = "#6dff96";
        eprom_P.style.backgroundColor = "#6dff96";
        eprom_R.style.backgroundColor = "#6dff96";
        eprom_O.style.backgroundColor = "#6dff96";
        eprom_M.style.backgroundColor = "#6dff96";

        pala_eprom.style.textDecoration = "line-through"

    } else if (eprom.length < 5) {

        memoria_E.style.backgroundColor = "white";
        eprom_P.style.backgroundColor = "white";
        eprom_R.style.backgroundColor = "white";
        eprom_O.style.backgroundColor = "white";
        eprom_M.style.backgroundColor = "white";

        pala_eprom.style.textDecoration = "none"

    } else {

        memoria_E.style.backgroundColor = "red";
        eprom_P.style.backgroundColor = "red";
        eprom_R.style.backgroundColor = "red";
        eprom_O.style.backgroundColor = "red";
        eprom_M.style.backgroundColor = "red";

        pala_eprom.style.textDecoration = "none"

    }
}

function Task_ram() {


    var ram = ram_R.value + ram_A.value + eprom_M.value;

    ram = ram.toLowerCase();

    if (ram == "ram") {
        ram_R.style.backgroundColor = "#6dff96"
        ram_A.style.backgroundColor = "#6dff96"
        eprom_M.style.backgroundColor = "#6dff96"

        pala_ram.style.textDecoration = "line-through"

    } else if (ram.length < 3) {
        ram_R.style.backgroundColor = "white"
        ram_A.style.backgroundColor = "white"
        eprom_M.style.backgroundColor = "white"

        pala_ram.style.textDecoration = "none"
    } else {
        ram_R.style.backgroundColor = "red"
        ram_A.style.backgroundColor = "red"
        eprom_M.style.backgroundColor = "red"

        pala_ram.style.textDecoration = "none"

    }
}

function Task_rom() {


    var rom = memoria_R.value + rom_O.value + rom_M.value;

    rom = rom.toLowerCase();

    if (rom == "rom") {
        memoria_R.style.backgroundColor = "#6dff96"
        rom_O.style.backgroundColor = "#6dff96"
        rom_M.style.backgroundColor = "#6dff96"

        pala_rom.style.textDecoration = "line-through"

    } else if (rom.length < 3) {
        memoria_R.style.backgroundColor = "white"
        rom_O.style.backgroundColor = "white"
        rom_M.style.backgroundColor = "white"

        pala_rom.style.textDecoration = "none"
    } else {
        memoria_R.style.backgroundColor = "red"
        rom_O.style.backgroundColor = "red"
        rom_M.style.backgroundColor = "red"

        pala_rom.style.textDecoration = "none"

    }
}

function Task_ula() {


    var ula = ula_U.value + ula_L.value + ram_A.value;

    ula = ula.toLowerCase();

    if (ula == "ula") {
        ula_U.style.backgroundColor = "#6dff96"
        ula_L.style.backgroundColor = "#6dff96"
        ram_A.style.backgroundColor = "#6dff96"

        pala_ula.style.textDecoration = "line-through"

    } else if (ula.length < 3) {
        ula_U.style.backgroundColor = "white"
        ula_L.style.backgroundColor = "white"
        ram_A.style.backgroundColor = "white"

        pala_ula.style.textDecoration = "none"
    } else {
        ula_U.style.backgroundColor = "red"
        ula_L.style.backgroundColor = "red"
        ram_A.style.backgroundColor = "red"

        pala_ula.style.textDecoration = "none"

    }
}


function Task_cpu() {

    var cpu = cpu_C.value + cpu_P.value + ula_U.value;

    cpu = cpu.toLowerCase();

    if (cpu == "cpu") {
        cpu_C.style.backgroundColor = "#6dff96"
        cpu_P.style.backgroundColor = "#6dff96"
        ula_U.style.backgroundColor = "#6dff96"

        pala_cpu.style.textDecoration = "line-through"

    } else if (cpu.length < 3) {
        cpu_C.style.backgroundColor = "white"
        cpu_P.style.backgroundColor = "white"
        ula_U.style.backgroundColor = "white"

        pala_cpu.style.textDecoration = "none"
    } else {
        cpu_C.style.backgroundColor = "red"
        cpu_P.style.backgroundColor = "red"
        ula_U.style.backgroundColor = "red"

        pala_cpu.style.textDecoration = "none"
    }
}

function Task_flash() {

    var flash = flash_F.value + flash_L.value + memoria_A2.value + flash_S.value + flash_H.value;

    flash = flash.toLowerCase();

    if (flash == "flash") {
        flash_F.style.backgroundColor = "#6dff96"
        flash_L.style.backgroundColor = "#6dff96"
        memoria_A2.style.backgroundColor = "#6dff96"
        flash_S.style.backgroundColor = "#6dff96"
        flash_H.style.backgroundColor = "#6dff96"

        pala_flash.style.textDecoration = "line-through"

    } else if (flash.length < 5) {
        flash_F.style.backgroundColor = "white"
        flash_L.style.backgroundColor = "white"
        memoria_A2.style.backgroundColor = "white"
        flash_S.style.backgroundColor = "white"
        flash_H.style.backgroundColor = "white"

        pala_flash.style.textDecoration = "none"
    } else {
        flash_F.style.backgroundColor = "red"
        flash_L.style.backgroundColor = "red"
        memoria_A2.style.backgroundColor = "red"
        flash_S.style.backgroundColor = "red"
        flash_H.style.backgroundColor = "red"

        pala_flash.style.textDecoration = "none"
    }
}

function Task_threads() {

    var threads = threads_T.value + threads_H.value + registrador_R.value + threads_E.value + threads_A.value + threads_D.value + threads_S.value;

    threads = threads.toLowerCase();

    if (threads == "threads") {
        threads_T.style.backgroundColor = "#6dff96"
        threads_H.style.backgroundColor = "#6dff96"
        registrador_R.style.backgroundColor = "#6dff96"
        threads_E.style.backgroundColor = "#6dff96"
        threads_A.style.backgroundColor = "#6dff96"
        threads_D.style.backgroundColor = "#6dff96"
        threads_S.style.backgroundColor = "#6dff96"

        pala_threads.style.textDecoration = "line-through"

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
        threads_T.style.backgroundColor = "red"
        threads_H.style.backgroundColor = "red"
        registrador_R.style.backgroundColor = "red"
        threads_E.style.backgroundColor = "red"
        threads_A.style.backgroundColor = "red"
        threads_D.style.backgroundColor = "red"
        threads_S.style.backgroundColor = "red"

        pala_threads.style.textDecoration = "none"
    }
}

function Task_data() {

    var data = threads_D.value + data_A.value + data_T.value + data_A2.value + data_B.value + data_U.value + data_S.value;

    data = data.toLowerCase();

    if (data == "databus") {
        threads_D.style.backgroundColor = "#6dff96"
        data_A.style.backgroundColor = "#6dff96"
        data_T.style.backgroundColor = "#6dff96"
        data_A2.style.backgroundColor = "#6dff96"
        data_B.style.backgroundColor = "#6dff96"
        data_U.style.backgroundColor = "#6dff96"
        data_S.style.backgroundColor = "#6dff96"


        pala_data.style.textDecoration = "line-through"

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
        threads_D.style.backgroundColor = "red"
        data_A.style.backgroundColor = "red"
        data_T.style.backgroundColor = "red"
        data_A2.style.backgroundColor = "red"
        data_B.style.backgroundColor = "red"
        data_U.style.backgroundColor = "red"
        data_S.style.backgroundColor = "red"

        pala_data.style.textDecoration = "none"
    }
}

function Task_address() {

    var address = address_A.value + address_D.value + address_D2.value + address_R.value + address_E.value + address_S.value + memoria_S2.value + address_B.value + address_U.value + address_S2.value;

    address = address.toLowerCase();

    if (address == "addressbus") {
        address_A.style.backgroundColor = "#6dff96"
        address_D.style.backgroundColor = "#6dff96"
        address_D2.style.backgroundColor = "#6dff96"
        address_R.style.backgroundColor = "#6dff96"
        address_E.style.backgroundColor = "#6dff96"
        address_S.style.backgroundColor = "#6dff96"
        memoria_S2.style.backgroundColor = "#6dff96"
        address_B.style.backgroundColor = "#6dff96"
        address_U.style.backgroundColor = "#6dff96"
        address_S2.style.backgroundColor = "#6dff96"


        pala_address.style.textDecoration = "line-through"

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
        address_A.style.backgroundColor = "red"
        address_D.style.backgroundColor = "red"
        address_D2.style.backgroundColor = "red"
        address_R.style.backgroundColor = "red"
        address_E.style.backgroundColor = "red"
        address_S.style.backgroundColor = "red"
        memoria_S2.style.backgroundColor = "red"
        address_B.style.backgroundColor = "red"
        address_U.style.backgroundColor = "red"
        address_S2.style.backgroundColor = "red"

        pala_address.style.textDecoration = "none"
    }
}

function Task_dual() {

    var dual = dual_D.value + dual_U.value + dual_A.value + dual_L.value + dual_C.value + dual_0.value + dual_R.value + registrador_E2.value;

    dual = dual.toLowerCase();

    if (dual == "dualcore") {
        dual_D.style.backgroundColor = "#6dff96"
        dual_U.style.backgroundColor = "#6dff96"
        dual_A.style.backgroundColor = "#6dff96"
        dual_L.style.backgroundColor = "#6dff96"
        dual_C.style.backgroundColor = "#6dff96"
        dual_0.style.backgroundColor = "#6dff96"
        dual_R.style.backgroundColor = "#6dff96"
        registrador_E2.style.backgroundColor = "#6dff96"


        pala_dual.style.textDecoration = "line-through"

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
        dual_D.style.backgroundColor = "red"
        dual_U.style.backgroundColor = "red"
        dual_A.style.backgroundColor = "red"
        dual_L.style.backgroundColor = "red"
        dual_C.style.backgroundColor = "red"
        dual_0.style.backgroundColor = "red"
        dual_R.style.backgroundColor = "red"
        registrador_E2.style.backgroundColor = "red"


        pala_dual.style.textDecoration = "none"
    }
}


function Task_quad() {

    var quad = quad_Q.value + quad_U.value +  dual_A.value + quad_D.value + quad_C.value  + quad_O.value + quad_R.value + quad_E.value;

    quad = quad.toLowerCase();

    if (quad == "quadcore") {
        quad_Q.style.backgroundColor = "#6dff96"
        quad_U.style.backgroundColor = "#6dff96"
        dual_A.style.backgroundColor = "#6dff96"
        quad_D.style.backgroundColor = "#6dff96"
        quad_C.style.backgroundColor = "#6dff96"
        quad_O.style.backgroundColor = "#6dff96"
        quad_R.style.backgroundColor = "#6dff96"
        quad_E.style.backgroundColor = "#6dff96"


        pala_quad.style.textDecoration = "line-through"

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
        quad_Q.style.backgroundColor = "red"
        quad_U.style.backgroundColor = "red"
        dual_A.style.backgroundColor = "red"
        quad_D.style.backgroundColor = "red"
        quad_C.style.backgroundColor = "red"
        quad_O.style.backgroundColor = "red"
        quad_R.style.backgroundColor = "red"
        quad_E.style.backgroundColor = "red"


        pala_quad.style.textDecoration = "none"
    }
}


function Task_dma() {

    var dma = dual_D.value + dma_M.value + dma_A.value;

    dma = dma.toLowerCase();

    if (dma == "dma") {
        dual_D.style.backgroundColor = "#6dff96"
        dma_M.style.backgroundColor = "#6dff96"
        dma_A.style.backgroundColor = "#6dff96"

        pala_dma.style.textDecoration = "line-through"

    } else if (dma.length < 3) {
        dual_D.style.backgroundColor = "white"
        dma_M.style.backgroundColor = "white"
        dma_A.style.backgroundColor = "white"

        pala_dma.style.textDecoration = "none"
    } else {
        dual_D.style.backgroundColor = "red"
        dma_M.style.backgroundColor = "red"
        dma_A.style.backgroundColor = "red"

        pala_dma.style.textDecoration = "none"
    }
}