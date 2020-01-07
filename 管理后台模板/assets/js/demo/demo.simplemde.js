!function ($) {
    "use strict";

    var SimpleMDEEditor = function () {
    };

    /* Initializing */
    SimpleMDEEditor.prototype.init = function () {
        // e.g.
        var simplemde = new SimpleMDE({
            element: document.getElementById("simplemde1"),
            spellChecker: false,
            autosave: {
                enabled: true,
                unique_id: 'simplemde1'
            }
        });
    },
     //init SimpleMDE
     $.SimpleMDEEditor = new SimpleMDEEditor, $.SimpleMDEEditor.Constructor = SimpleMDEEditor

}(window.jQuery),
    
//initializing 
function ($) {
    "use strict";
    $.SimpleMDEEditor.init();
}(window.jQuery);