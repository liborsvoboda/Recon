require.config({ paths: { 'vs': '/lib/monaco/js/monaco-editor/min/vs' } });
require(['vs/editor/editor.main'], function () {

    let fileCounter = 0;

    monaco.editor.defineTheme('myTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: 'EDF9FA' }],
        // colors: { 'editor.lineHighlightBackground': '#0000FF20' }
    });
    monaco.editor.setTheme('myTheme');


    function newEditor(elementId, container_id, code, language) {
        let model = monaco.editor.createModel (code, language);
        let editor = monaco.editor.create(document.getElementById(container_id), {
            model: model,
            suggest: {
                preview: true, insertMode: "replace"
            },
            automaticLayout: true, fixedOverflowWidgets: true,
            //language: language,
        });
        
        Gs.Variables.monacoEditorList.push({ elementId: elementId, editor: editor, model: model });
        return editor;
    }


    function addNewEditor(code, elementId, language) {
        var new_container = document.createElement("DIV");
        new_container.id = "container-" + fileCounter.toString(10);
        new_container.className = "monacocontainer";
        document.getElementById(elementId).appendChild(new_container);
        newEditor(elementId,new_container.id, code, language);
        fileCounter += 1;
    }

    addNewEditor("" ,"monacoHTML", 'html');
    addNewEditor("", "monacoJS", 'javascript');
    addNewEditor("", "monacoCSS", 'css');

    /*
    var languageSelected = document.querySelector('.language');    
    languageSelected.onchange = function () {
        monaco.editor.setModelLanguage(window.monaco.editor.getModels()[0], "html")
    }
    */

    let languageSelected = document.querySelector('.language');
    languageSelected.onchange = function () {
        monaco.editor.setModelLanguage(Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoHTML" })[0].model, languageSelected.value)
        monaco.editor.setModelLanguage(Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoJS" })[0].model, languageSelected.value)
        monaco.editor.setModelLanguage(Gs.Variables.monacoEditorList.filter(obj => { return obj.elementId == "monacoCSS" })[0].model, languageSelected.value)
    }

    var themeSelected = document.querySelector('.theme');    
    themeSelected.onchange = function () {
        monaco.editor.setTheme(themeSelected.value)
    }
    

    

    /*
    monaco.languages.registerCompletionItemProvider('metro4', {
        provideCompletionItems: function (model, position) {
            const suggestions = [
                {
                    label: 'console',
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: 'Logs a message to the console.',
                    insertText: 'console.log("data",)',
                },
                {
                    label: 'setTimeout',
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: 'Executes a function after a specified time interval.',
                    insertText: 'setTimeout(() => {\n\n}, 1000)',
                },
                {
                    label: 'metro',
                    kind: 1,
                    documentation: 'Executes a function after a specified time interval.',
                    insertText: 'setTimeout(() => {\n\n}, 1000)',
                }
            ];

            return { suggestions: suggestions };
        }
    });
    */


    
});