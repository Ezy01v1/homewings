const WHATSAPP_NUMBER = "50433534845";
function waLink(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
}

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("mobile-menu").classList.toggle("open");
});
document.querySelectorAll("#mobile-menu a").forEach(a => {
    a.addEventListener("click", () => document.getElementById("mobile-menu").classList.remove("open"));
});

// Fill in every WhatsApp CTA with a generic greeting
document.querySelectorAll(".wa-cta, #fab-whatsapp").forEach(a => {
    a.href = waLink("Hola Home Wings! Quiero hacer un pedido 🍔🍗");
});

function money(n) { return "L " + n; }

function orderIcon(text) {
    const a = document.createElement("a");
    a.href = waLink(text);
    a.target = "_blank";
    a.rel = "noopener";
    a.title = "Pedir por WhatsApp";
    a.className = "shrink-0 text-primary hover:text-on-primary hover:bg-primary border-2 border-[#5C2E0F] w-7 h-7 flex items-center justify-center transition-colors";
    a.innerHTML = '<span class="material-symbols-outlined text-base">chat</span>';
    return a;
}

function renderPriceList(containerId, items) {
    const el = document.getElementById(containerId);
    items.forEach(item => {
        const row = document.createElement("div");
        row.className = "menu-row flex items-center gap-1";
        row.innerHTML =
            '<span class="font-body-md text-on-surface">' + item.name + (item.note ? ' <span class="text-on-surface-variant text-sm">(' + item.note + ')</span>' : '') + '</span>' +
            '<span class="leader"></span>' +
            '<span class="font-headline-md text-headline-md text-primary shrink-0">' + money(item.price) + '</span>';
        row.appendChild(orderIcon("Hola Home Wings! Quiero pedir: " + item.name + " (" + money(item.price) + ")"));
        el.appendChild(row);
    });
}

function renderBurgerCards(containerId, items) {
    const el = document.getElementById(containerId);
    items.forEach(item => {
        const card = document.createElement("article");
        card.className = "bg-surface-container-lowest border-2 border-[#5C2E0F] relative flex flex-col card-hover";
        const imgHtml = item.img
            ? '<img class="w-full h-full object-cover" src="' + item.img + '" alt="' + item.name + '"/>'
            : '<div class="w-full h-full photo-pending flex flex-col items-center justify-center gap-1 text-on-surface-variant">' +
                '<span class="material-symbols-outlined text-4xl">photo_camera</span>' +
                '<span class="font-label-md text-label-md uppercase">Foto próximamente</span></div>';
        card.innerHTML =
            '<div class="h-48 w-full border-b-2 border-[#5C2E0F] relative overflow-hidden">' + imgHtml +
            '<div class="absolute top-2 right-2 bg-primary-container border-2 border-[#5C2E0F] px-3 py-1 font-headline-md text-on-primary shadow-[2px_2px_0px_0px_#5C2E0F]">' + money(item.price) + '</div>' +
            '</div>' +
            '<div class="p-md flex-grow flex flex-col justify-between gap-sm">' +
            '<div><h3 class="font-headline-md text-headline-md text-on-surface uppercase mb-xs">' + item.name + '</h3>' +
            '<p class="font-body-md text-on-surface-variant">' + item.desc + '</p></div>' +
            '<a class="mt-sm w-full border-2 border-[#5C2E0F] bg-surface-container text-on-surface font-headline-md py-2 hover:bg-primary-container hover:text-on-primary transition-colors uppercase text-center" href="' +
            waLink("Hola Home Wings! Quiero pedir: " + item.name + " (" + money(item.price) + ")") + '" target="_blank" rel="noopener">Pedir</a>' +
            '</div>';
        el.appendChild(card);
    });
}

function renderChips(containerId, items, colorClass) {
    const el = document.getElementById(containerId);
    items.forEach(name => {
        const chip = document.createElement("span");
        chip.className = "chip " + colorClass;
        chip.textContent = name;
        el.appendChild(chip);
    });
}

// ---- MENU DATA (editable) ----
const alitas = [
    { name: "4 alitas con papas", price: 120 },
    { name: "6 alitas con papas", price: 155 },
    { name: "8 alitas con papas", price: 195 },
    { name: "12 alitas", note: "sin papas", price: 250 },
    { name: "18 alitas", note: "sin papas", price: 370 },
    { name: "24 alitas", note: "sin papas", price: 480 },
    { name: "30 alitas", note: "sin papas", price: 585 },
];

const hamburguesas = [
    { name: "Hamburguesa de Res Clásica", price: 170, desc: "Cheddar, bacon y salsa rosada.", img: "../img/crop_hamburguesasvariadas.jpeg" },
    { name: "Hamburguesa Texana", price: 170, desc: "Res, con salsa BBQ y cheddar.", img: "../img/crop_hmaburguesaTexana.jpeg" },
    { name: "Hamburguesa Buffalo/Ranch", price: 160, desc: "Pechuga de pollo picante.", img: "../img/crop_hamburguesaBuffalo.jpeg" },
    { name: "Hamburguesa de Pollo", price: 170, desc: "Jamón de pavo y queso suizo.", img: "../img/crop_hamburguesapollo.jpeg" },
    { name: "Hamburguesa Americana", price: 200, desc: "Doble carne, doble queso.", img: null },
    { name: "Hamburguesa de Cerdo", price: 170, desc: "Tocino y queso pepper jack.", img: null },
    { name: "Hamburguesa de Pollo con Crema Ahumada", price: 170, desc: "Tocino y queso cheddar.", img: null },
];

const boneless = [
    { name: "8 boneless con papas", price: 155 },
    { name: "12 boneless con papas", price: 195 },
    { name: "24 boneless con papas", price: 385 },
];

const snacks = [
    { name: "6 Mozzarella Sticks", price: 130 },
    { name: "6 Jalapeño Bombers", price: 130 },
];

const fingers = [
    { name: "5 fingers con papas", price: 155 },
    { name: "8 fingers con papas", price: 195 },
];

const papas = [
    { name: "Papa frita pequeña", price: 55 },
    { name: "Papa frita mediana", price: 100 },
    { name: "Papa frita familiar", price: 170 },
    { name: "Papa pequeña preparada", note: "queso cheddar y tocineta", price: 120 },
    { name: "Papa mediana preparada", note: "queso cheddar y tocineta", price: 175 },
];

const nachos = [
    { name: "Nachos pequeños", price: 120 },
    { name: "Nachos grandes", price: 175 },
];

const refrescos = [
    { name: "Refresco personal", price: 30 },
    { name: "Refresco 1.5 litros", price: 60 },
    { name: "Refresco 2 litros", price: 70 },
    { name: "Bote de agua", price: 15 },
];

const adicionales = [
    { name: "Copita de cualquier salsa", note: "2 oz", price: 17 },
];

const salsasPicantes = ["Buffalo", "Sweet-Chilli", "Piña Chipotle", "Mango Habanero"];
const salsasDulces = ["Barbacoa", "Agridulce", "Maracuyá", "Tamarindo", "Teriyaki", "Honey-Mustard", "Jack Daniel's", "Ajo-Miel"];
const salsasSaladas = ["Ajo-Parmesano", "Lemon-Pepper"];

renderPriceList("list-alitas", alitas);
renderBurgerCards("grid-hamburguesas", hamburguesas);
renderPriceList("list-boneless", boneless);
renderPriceList("list-snacks", snacks);
renderPriceList("list-fingers", fingers);
renderPriceList("list-papas", papas);
renderPriceList("list-nachos", nachos);
renderPriceList("list-refrescos", refrescos);
renderPriceList("list-adicionales", adicionales);
renderChips("chips-picantes", salsasPicantes, "hover:bg-primary hover:text-on-primary hover:border-primary transition-colors");
renderChips("chips-dulces", salsasDulces, "hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-colors");
renderChips("chips-saladas", salsasSaladas, "hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-colors");
