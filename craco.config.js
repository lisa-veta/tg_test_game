module.exports = {
    style: {
        postcss: {
            plugins: [
                require("postcss-import"),
                require("postcss-mixins"),
                require("postcss-simple-vars"),
                require("postcss-nested"),
                require("postcss-math"),
                require("postcss-color-function"),
                require("postcss-initial"),
                require("autoprefixer"),
            ],
        },
    },
};
