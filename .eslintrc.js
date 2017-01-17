module.exports = {
    "extends": "angular",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "linebreak-style": [
            "off"
        ],
        "semi": [
            "error",
            "always"
        ],
        "angular/controller-name": [
            "error",
            "/[A-z]/"
        ],
        "angular/no-service-method": [
            "off"
        ],
        "angular/log": [
            "off"
        ]
    },
    "env": {
        "browser": true
    },
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ]
};
