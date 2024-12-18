module.exports = {
    block: "page",
    title: "Test",
    head: [
        { elem: "meta", attrs: { name: "description", content: "" } },
        {
            elem: "meta",
            attrs: {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        },
        { elem: "css", url: "test.min.css" },
    ],

    scripts: [{ elem: "js", url: "test.min.js" }],
    content: [
        {
            block: "header",
            content: [
                {
                    elem: "top",
                    content: [
                        { elem: "logo", content: "Лого" },
                        { elem: "search", content: "Строка поиска" },
                        { elem: "phone", content: "Телефон" },
                    ],
                },
                {
                    elem: "mid",
                    content: [{ elem: "menu", content: "Меню", tag: "nav" }],
                },
                {
                    elem: "bottom",
                    content: [{ elem: "banner", content: "Шапка" }],
                },
            ],
        },
        {
            block: "main",
            tag: "main",
            content: [
                { elem: "categories", content: "Категории + Новости" },
                { elem: "content", content: "Содержимое страницы" },
            ],
        },
        { block: "footer", tag: "footer", content: "Подвал" },
    ],
};
