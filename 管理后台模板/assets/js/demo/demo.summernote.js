!function ($) {
    "use strict";

    var Summernote = function () {
        this.$body = $("body")
    };


    /* Initializing */
    Summernote.prototype.init = function () {
        $('#summernote-basic').summernote({
            placeholder: 'Write something...',
            height: 230,
            callbacks: {
                // fix broken checkbox on link modal
                onInit: function onInit(e) {
                    var editor = $(e.editor);
                    editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                }
            }
        });
        // air mode on
        $('#summernote-airmode').summernote({
            airMode: true,
            callbacks: {
                // fix broken checkbox on link modal
                onInit: function onInit(e) {
                    var editor = $(e.editor);
                    editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                }
            }
        });

        // click to edit
        var edit = function edit() {
            $('#summernote-editmode').summernote({
                focus: true,
                callbacks: {
                    // fix broken checkbox on link modal
                    onInit: function onInit(e) {
                        var editor = $(e.editor);
                        editor.find('.custom-control-description').addClass('custom-control-label').parent().removeAttr('for');
                    }
                }
            });
        };
        var save = function save() {
            var makrup = $('#summernote-editmode').summernote('code');
            $('#summernote-editmode').summernote('destroy');
        };

        $('#summernote-edit').on('click', function () {
            edit();
            // toggle buttons
            $(this).hide();
            $('#summernote-save').show();
        });
        $('#summernote-save').on('click', function () {
            save();
            // toggle buttons
            $(this).hide();
            $('#summernote-edit').show();
        });
    },

    //init Summernote
    $.Summernote = new Summernote, $.Summernote.Constructor = Summernote

}(window.jQuery),

    //initializing Summernote
    function ($) {
        "use strict";
        $.Summernote.init()
    }(window.jQuery);